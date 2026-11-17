# تسليم سيكوينس قابل للاستيراد (XML، SRT، ماركرز)

- **الاستخدام:** لما Claude يجهّز الكت أو الكابشن كملفات بريمير يفتحها.
- **المكان:** نصي
- **المتطلبات:** Premiere
- **البديل Native:** مش محتاج
- **الفهرس:** [INDEX](../INDEX.md)

---

## Premiere Pro: deliver an importable sequence

- Cut list -> FCP7 XML (`<xmeml version="4">`) that Premiere imports (File > Import). One `<sequence>` with `<rate><timebase>` matching the source fps (`<ntsc>TRUE</ntsc>` for 29.97/23.976), video and audio tracks, and one `<clipitem>` per kept segment: `<in>/<out>` are source frames, `<start>/<end>` are sequence frames, each clip references the same `<file id>` with `<pathurl>file://localhost/C:/...</pathurl>` (forward slashes, URL-encode spaces as %20). Link audio and video clipitems. Validate the XML is well-formed before delivery.
- Cuts come from a reviewed transcript with word timings: silence-only cuts in the first draft; fillers, retakes and other speech cuts only after the editor approves (see `montage-hub`). Add a few frames of handle so cuts can be rolled.
- Captions: SRT (UTF-8) from reviewed words, 1-2 lines, at most about 7 words per line for 9:16; the editor imports it as a caption track and styles it. Mark uncertain medical terms in the review note.
- Markers: add `<marker>` entries for beats from EDITORIAL_PLAN.md (name = beat job, comment = what the AE comp shows) so motion slots are obvious on the timeline.
- Never overwrite the editor's project file; deliver new files next to it with clear names and a version number.

## Rendered overlays (only when a code-built animation is wanted)

If a motion piece is built in code, render it with alpha as ProRes 4444 (`-c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le`) or PNG sequence, so it sits on a Premiere track over the footage. Remotion is the default code engine: the house starter renders ProRes 4444 with alpha by default ([remotion-engine](../Code-Built-Motion/remotion-engine.md)). Remotion is free for individuals and teams of up to 3 people (collaborations count the combined headcount); 4+ people need a Company License. HyperFrames (Apache-2.0) is the alternative when that license is a problem.

## Hand-off note
