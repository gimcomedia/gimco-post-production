"""qc_reel.py - automatic check of a rendered reel before it goes to review.

    python -I -X utf8 qc_reel.py <video> [--type vo|talking|music|ugc] [--max-dur S] [--expect-dur S]
                                 [--aspect 9:16] [--out-dir DIR] [--no-sheet]

Needs ffmpeg and ffprobe on PATH. Prints a table (نجح / تحذير / سقط), writes <video>.qc.json and,
unless --no-sheet, <video>.qc_sheet.png: one frame from the middle of every shot with the safe zone
drawn on it. Exit code 1 when anything is «سقط».

The numbers are gimco's own (library/Templates-and-Checklists/review-and-delivery-checklist.md §3,
library/Editorial/structure-hook-safezone-pacing.md safe zone). Only hard faults fail:
  سقط   no video stream, no audio stream, silent audio, wrong aspect, longer than --max-dur,
        true peak above 0 dBTP (clipping).
  تحذير loudness off the target for --type, true peak above -1 dBTP, black or frozen stretches,
        shots shorter than 3 frames, duration off --expect-dur, sound still loud at the last frame.
--type sets the loudness target:
  vo       voice-over or motion piece: about -14 LUFS (±1.5 LU before a warning)
  talking  a person on camera: no whole-reel target (measured value is printed), peak only
  music    music-only montage: about -14 LUFS (±2 LU)
  ugc      the client's own clip and sound: numbers printed, no verdict
"""
import argparse
import json
import os
import re
import subprocess
import sys
import tempfile

PASS, WARN, FAIL = "نجح", "تحذير", "سقط"
REF_W, REF_H = 1080, 1920
# Safe zone on 1080x1920 (structure-hook-safezone-pacing.md): red bands top 0-335 and bottom 1520-1920,
# side margins 85, and 200 px clear on the right for the platform's button column.
SAFE = (85, 335, REF_W - 200, 1520)
TARGETS = {"vo": (-14.0, 1.5), "music": (-14.0, 2.0)}


def run(cmd):
    p = subprocess.run(cmd, capture_output=True)
    return p.returncode, p.stdout.decode("utf-8", "replace"), p.stderr.decode("utf-8", "replace")


def ffmpeg_filter(path, args):
    return run(["ffmpeg", "-nostdin", "-hide_banner", "-i", path, *args, "-f", "null", "-"])[2]


def probe(path):
    code, out, err = run(["ffprobe", "-v", "error", "-print_format", "json", "-show_streams", "-show_format", path])
    if code:
        sys.exit(f"ffprobe failed: {err.strip()}")
    return json.loads(out)


def fps_of(stream):
    num, _, den = (stream.get("avg_frame_rate") or "0/1").partition("/")
    try:
        return float(num) / float(den or 1)
    except (ValueError, ZeroDivisionError):
        return 0.0


def loudness(path):
    err = ffmpeg_filter(path, ["-map", "0:a:0", "-af", "loudnorm=print_format=json"])
    m = re.search(r"\{[^{}]*\"input_i\"[^{}]*\}", err, re.S)
    if not m:
        return None, None
    d = json.loads(m.group(0))
    to_f = lambda v: None if v in (None, "-inf", "inf") else float(v)
    return to_f(d.get("input_i")), to_f(d.get("input_tp"))


def max_volume(path, tail=None):
    """Loudest sample in dB; tail=seconds measures only the end (-sseof is an input option, before -i)."""
    pre = ["-sseof", f"-{tail}"] if tail else []
    err = run(["ffmpeg", "-nostdin", "-hide_banner", *pre, "-i", path, "-map", "0:a:0", "-af", "volumedetect",
               "-f", "null", "-"])[2]
    m = re.search(r"max_volume:\s*(-?[\d.]+|-inf) dB", err)
    return None if not m or m.group(1) == "-inf" else float(m.group(1))


def spans(path, filt, start_key, end_key):
    err = ffmpeg_filter(path, ["-map", "0:v:0", "-vf", filt])
    starts = [float(x) for x in re.findall(start_key + r"[:=]\s*([\d.]+)", err)]
    ends = [float(x) for x in re.findall(end_key + r"[:=]\s*([\d.]+)", err)]
    return list(zip(starts, ends + [None] * (len(starts) - len(ends))))


def shot_cuts(path, threshold=10.0):
    err = ffmpeg_filter(path, ["-map", "0:v:0", "-vf", f"scdet=threshold={threshold},metadata=print"])
    return sorted({float(t) for t in re.findall(r"lavfi\.scd\.time[=:]\s*([\d.]+)", err)})


def contact_sheet(path, mids, w, h, out_png):
    """One frame per shot (middle), safe zone drawn, tiled 6 across."""
    sx, sy = w / REF_W, h / REF_H
    x0, y0, x1, y1 = (round(SAFE[0] * sx), round(SAFE[1] * sy), round(SAFE[2] * sx), round(SAFE[3] * sy))
    tmp = tempfile.mkdtemp(prefix="qc_")
    frames = []
    for i, t in enumerate(mids[:60]):
        f = os.path.join(tmp, f"{i:03d}.png")
        box = f"drawbox=x={x0}:y={y0}:w={x1 - x0}:h={y1 - y0}:color=lime@0.8:t={max(2, round(4 * sx))}"
        run(["ffmpeg", "-nostdin", "-v", "error", "-ss", f"{t:.3f}", "-i", path, "-frames:v", "1",
             "-vf", f"{box},scale=270:-2", "-y", f])
        if os.path.exists(f):
            frames.append(f)
    if not frames:
        return False
    cols = min(6, len(frames))
    rows = -(-len(frames) // cols)
    listing = os.path.join(tmp, "list.txt")
    with open(listing, "w", encoding="utf-8") as fh:
        for f in frames:
            fh.write(f"file '{f.replace(os.sep, '/')}'\n")
    code, _, _ = run(["ffmpeg", "-nostdin", "-v", "error", "-f", "concat", "-safe", "0", "-i", listing,
                      "-vf", f"tile={cols}x{rows}:padding=6:color=black", "-frames:v", "1", "-y", out_png])
    return code == 0 and os.path.exists(out_png)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("video")
    ap.add_argument("--type", choices=["vo", "talking", "music", "ugc"])
    ap.add_argument("--max-dur", type=float)
    ap.add_argument("--expect-dur", type=float)
    ap.add_argument("--aspect", default="9:16")
    ap.add_argument("--out-dir")
    ap.add_argument("--no-sheet", action="store_true")
    a = ap.parse_args()
    sys.stdout.reconfigure(encoding="utf-8")
    if not os.path.isfile(a.video):
        sys.exit(f"not found: {a.video}")

    rows = []
    add = lambda name, verdict, detail: rows.append({"check": name, "verdict": verdict, "detail": detail})
    info = probe(a.video)
    v = next((s for s in info["streams"] if s["codec_type"] == "video"), None)
    au = next((s for s in info["streams"] if s["codec_type"] == "audio"), None)
    dur = float(info.get("format", {}).get("duration") or 0)
    fps = fps_of(v) if v else 0.0

    if not v:
        add("فيديو", FAIL, "مفيش فيديو في الملف")
    else:
        w, h = int(v["width"]), int(v["height"])
        rot = abs(int(next((sd.get("rotation", 0) for sd in v.get("side_data_list", []) if "rotation" in sd), 0)))
        if rot in (90, 270):
            w, h = h, w
        aw, _, ah = a.aspect.partition(":")
        ok = abs(w / h - float(aw) / float(ah)) < 0.01
        add("المقاس", PASS if ok else FAIL, f"{w}x{h} @ {fps:.3f}fps" + ("" if ok else f" (المطلوب {a.aspect})"))

    if a.max_dur and dur > a.max_dur:
        add("المدة", FAIL, f"{dur:.2f}s أطول من {a.max_dur}s")
    elif a.expect_dur and abs(dur - a.expect_dur) > 0.5:
        add("المدة", WARN, f"{dur:.2f}s والمتوقع {a.expect_dur}s")
    else:
        add("المدة", PASS, f"{dur:.2f}s")

    if not au:
        add("الصوت", FAIL, "مفيش تراك صوت")
    else:
        peak = max_volume(a.video)
        if peak is None or peak < -60:
            add("الصوت", FAIL, f"الصوت صامت (أعلى قيمة {peak} dB)")
        else:
            lufs, tp = loudness(a.video)
            if tp is not None and tp > 0:
                add("True Peak", FAIL, f"{tp:+.1f} dBTP: فيه clipping")
            elif tp is not None and tp > -1:
                add("True Peak", WARN, f"{tp:+.1f} dBTP (الهدف حوالي -1)")
            else:
                add("True Peak", PASS, f"{tp:+.1f} dBTP" if tp is not None else "مش مقاس")
            target = TARGETS.get(a.type or "")
            if lufs is None:
                add("العلو", WARN, "مقدرتش أقيس LUFS")
            elif target:
                off = lufs - target[0]
                add("العلو", PASS if abs(off) <= target[1] else WARN,
                    f"{lufs:.1f} LUFS (الهدف {target[0]:.0f} ±{target[1]})")
            else:
                add("العلو", PASS, f"{lufs:.1f} LUFS (مفيش هدف للنوع ده، الرقم للعلم)")
            if dur > 0.5:
                tail = max_volume(a.video, tail=0.3)
                if tail is None:
                    add("النهاية", PASS, "آخر 0.3s صامتة")
                elif tail > -20:
                    add("النهاية", WARN, f"الصوت لسه عالي في آخر 0.3s ({tail:.1f} dB): نهاية مقطوعة؟")
                else:
                    add("النهاية", PASS, f"الصوت بيخلص نضيف ({tail:.1f} dB في الآخر)")

    mids = []
    if v:
        blacks = [s for s in spans(a.video, "blackdetect=d=0.1:pix_th=0.10", "black_start", "black_end")]
        add("فريمات سودا", WARN if blacks else PASS,
            ", ".join(f"{s:.2f}-{e if e is not None else dur:.2f}s" for s, e in blacks) or "مفيش")
        frozen = spans(a.video, "freezedetect=n=0.003:d=1.0", "lavfi.freezedetect.freeze_start",
                       "lavfi.freezedetect.freeze_end")
        add("فريم واقف", WARN if frozen else PASS,
            ", ".join(f"{s:.2f}-{e if e is not None else dur:.2f}s" for s, e in frozen) or "مفيش ثانية واقفة")
        cuts = [c for c in shot_cuts(a.video) if 0 < c < dur]
        edges = [0.0, *cuts, dur]
        shots = [(edges[i], edges[i + 1]) for i in range(len(edges) - 1)]
        tiny = [f"{s:.2f}s" for s, e in shots if fps and (e - s) * fps < 3]
        add("الشوتات", WARN if tiny else PASS,
            f"{len(shots)} شوت" + (f"؛ أقل من 3 فريمات عند {', '.join(tiny)}" if tiny else ""))
        mids = [(s + e) / 2 for s, e in shots]

    out_dir = a.out_dir or os.path.dirname(os.path.abspath(a.video))
    os.makedirs(out_dir, exist_ok=True)
    base = os.path.join(out_dir, os.path.basename(a.video))
    sheet = None
    if v and mids and not a.no_sheet:
        sheet = base + ".qc_sheet.png"
        if not contact_sheet(a.video, mids, w, h, sheet):
            sheet = None
            add("شيت الفريمات", WARN, "ماتعملش")

    width = max(len(r["check"]) for r in rows)
    for r in rows:
        print(f"{r['verdict']:<6} {r['check']:<{width}}  {r['detail']}")
    failed = any(r["verdict"] == FAIL for r in rows)
    print(f"\nالنتيجة: {FAIL if failed else (WARN if any(r['verdict'] == WARN for r in rows) else PASS)}"
          + (f"\nالشيت: {sheet}" if sheet else ""))
    with open(base + ".qc.json", "w", encoding="utf-8") as f:
        json.dump({"video": os.path.abspath(a.video), "type": a.type, "duration": dur, "checks": rows,
                   "sheet": sheet, "failed": failed}, f, ensure_ascii=False, indent=2)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
