"""talking_cut_plan.py - dead-air cut plan for a talking-head clip, rounded to frames.

    python -I -X utf8 talking_cut_plan.py <clip> [--min-silence 0.5] [--noise DB]
           [--pad-after 0.06] [--pad-before 0.10] [--min-keep 0.25] [--out-dir DIR] [--preview]

Method (library/Editorial/cutting-and-selects.md, «كشف السكوت بعتبة من الكليب نفسه»):
  1. the threshold comes from the clip: loudnorm's input_thresh (override with --noise);
  2. silencedetect with --min-silence (0.5 to start; tighter for explaining, looser for story);
  3. silences closer than 0.2 s merge; a silence at 0 is the head, one reaching the end is the tail.
Then every kept piece keeps --pad-after after its last word and --pad-before before the next one,
the clip opens --pad-before ahead of the first word and ends --pad-after after the last.

Every edge is rounded to the clip's frame grid FIRST, and both the source times and the timeline
times are computed from those rounded frames. A plan that rounds the timeline but reads the source
from the raw times puts a shot one segment late (the lips drift).

Writes <clip>.cuts.json:
  {"fps", "threshold_db", "segments": [{"src_in_f", "src_out_f", "src_in", "src_out", "tl_in", "tl_out"}],
   "removed_s", "kept_s"}
--preview also renders <clip>.cut_preview.mp4 (picture and sound cut together) to watch the plan.
Only silence is removed; a cut inside speech is proposed to the editor, never made here.
"""
import argparse
import json
import os
import re
import subprocess
import sys
from fractions import Fraction


def run(cmd):
    p = subprocess.run(cmd, capture_output=True)
    return p.returncode, p.stdout.decode("utf-8", "replace"), p.stderr.decode("utf-8", "replace")


def probe(path):
    _, out, _ = run(["ffprobe", "-v", "error", "-print_format", "json", "-show_streams", "-show_format", path])
    info = json.loads(out or "{}")
    v = next((s for s in info.get("streams", []) if s["codec_type"] == "video"), None)
    a = next((s for s in info.get("streams", []) if s["codec_type"] == "audio"), None)
    fps = Fraction(v["avg_frame_rate"]) if v and v.get("avg_frame_rate", "0/0") != "0/0" else Fraction(25)
    return fps, float(info.get("format", {}).get("duration") or 0), bool(v), bool(a)


def clip_threshold(path):
    err = run(["ffmpeg", "-nostdin", "-hide_banner", "-i", path, "-map", "0:a:0",
               "-af", "loudnorm=print_format=json", "-f", "null", "-"])[2]
    m = re.search(r"\{[^{}]*\"input_thresh\"[^{}]*\}", err, re.S)
    return float(json.loads(m.group(0))["input_thresh"]) if m else -40.0


def silences(path, noise_db, min_dur, dur):
    err = run(["ffmpeg", "-nostdin", "-hide_banner", "-i", path, "-map", "0:a:0",
               "-af", f"silencedetect=noise={noise_db}dB:d={min_dur}", "-f", "null", "-"])[2]
    starts = [float(x) for x in re.findall(r"silence_start:\s*(-?[\d.]+)", err)]
    ends = [float(x) for x in re.findall(r"silence_end:\s*([\d.]+)", err)]
    pairs = [(max(0.0, s), ends[i] if i < len(ends) else dur) for i, s in enumerate(starts)]
    merged = []
    for s, e in pairs:
        if merged and s - merged[-1][1] < 0.2:
            merged[-1] = (merged[-1][0], e)
        else:
            merged.append((s, e))
    return merged


def plan(dur, sil, pad_after, pad_before, min_keep):
    """Speech pieces = the gaps between silences, padded, clamped, overlapping pieces joined."""
    speech, cur = [], 0.0
    for s, e in sil:
        if s > cur:
            speech.append((cur, s))
        cur = max(cur, e)
    if cur < dur:
        speech.append((cur, dur))
    pieces = []
    for s, e in speech:
        s, e = max(0.0, s - pad_before), min(dur, e + pad_after)
        if pieces and s <= pieces[-1][1]:
            pieces[-1] = (pieces[-1][0], max(pieces[-1][1], e))
        else:
            pieces.append((s, e))
    return [(s, e) for s, e in pieces if e - s >= min_keep]


def to_frames(pieces, fps, total_frames):
    out, tl = [], 0
    for s, e in pieces:
        fi, fo = round(s * fps), min(round(e * fps), total_frames)
        if fo - fi < 1:
            continue
        if out and fi <= out[-1]["src_out_f"]:
            fi = out[-1]["src_out_f"]
        n = fo - fi
        out.append({"src_in_f": fi, "src_out_f": fo,
                    "src_in": round(float(fi / fps), 4), "src_out": round(float(fo / fps), 4),
                    "tl_in": round(float(tl / fps), 4), "tl_out": round(float((tl + n) / fps), 4)})
        tl += n
    return out


def preview(path, segs, out_path, has_audio):
    sel = "+".join(f"between(n,{s['src_in_f']},{s['src_out_f'] - 1})" for s in segs)
    asel = "+".join(f"between(t,{s['src_in']},{s['src_out']})" for s in segs)
    args = ["ffmpeg", "-nostdin", "-v", "error", "-y", "-i", path,
            "-vf", f"select='{sel}',setpts=N/FRAME_RATE/TB"]
    if has_audio:
        args += ["-af", f"aselect='{asel}',asetpts=N/SR/TB"]
    args += ["-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast", out_path]
    return run(args)[0] == 0


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("clip")
    ap.add_argument("--min-silence", type=float, default=0.5)
    ap.add_argument("--noise", type=float, help="threshold in dB (default: the clip's loudnorm input_thresh)")
    ap.add_argument("--pad-after", type=float, default=0.06)
    ap.add_argument("--pad-before", type=float, default=0.10)
    ap.add_argument("--min-keep", type=float, default=0.25)
    ap.add_argument("--out-dir")
    ap.add_argument("--preview", action="store_true")
    a = ap.parse_args()
    sys.stdout.reconfigure(encoding="utf-8")
    if not os.path.isfile(a.clip):
        sys.exit(f"not found: {a.clip}")

    fps, dur, has_video, has_audio = probe(a.clip)
    if not has_audio:
        sys.exit("the clip has no audio: nothing to cut on")
    thr = a.noise if a.noise is not None else clip_threshold(a.clip)
    sil = silences(a.clip, thr, a.min_silence, dur)
    # The head and tail are cut even when shorter than --min-silence: the clip opens on the first word.
    edge = silences(a.clip, thr, 0.1, dur)
    if edge and edge[0][0] < 0.05 and not (sil and sil[0][0] < 0.05):
        sil.insert(0, edge[0])
    if edge and edge[-1][1] > dur - 0.05 and not (sil and sil[-1][1] > dur - 0.05):
        sil.append(edge[-1])
    segs = to_frames(plan(dur, sil, a.pad_after, a.pad_before, a.min_keep), fps, round(dur * fps))
    kept = segs[-1]["tl_out"] if segs else 0.0

    out_dir = a.out_dir or os.path.dirname(os.path.abspath(a.clip))
    os.makedirs(out_dir, exist_ok=True)
    base = os.path.join(out_dir, os.path.basename(a.clip))
    result = {"clip": os.path.abspath(a.clip), "fps": float(fps), "threshold_db": thr,
              "min_silence": a.min_silence, "pad_after": a.pad_after, "pad_before": a.pad_before,
              "duration": round(dur, 4), "kept_s": kept, "removed_s": round(dur - kept, 4), "segments": segs}
    with open(base + ".cuts.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"العتبة {thr:.1f} dB، أقل سكوت {a.min_silence}s، {float(fps):.3f} fps")
    print(f"{len(segs)} قطعة: الأصل {dur:.2f}s ← بعد القص {kept:.2f}s (اتشال {dur - kept:.2f}s)")
    for i, s in enumerate(segs, 1):
        print(f"  {i:>3}  مصدر {s['src_in']:>8.3f}-{s['src_out']:<8.3f}  تايملاين {s['tl_in']:>8.3f}-{s['tl_out']:.3f}")
    print(f"الخطة: {base}.cuts.json")
    if a.preview and has_video and segs:
        pv = base + ".cut_preview.mp4"
        print(f"البريفيو: {pv}" if preview(a.clip, segs, pv, has_audio) else "البريفيو ماتعملش")
    return 0


if __name__ == "__main__":
    sys.exit(main())
