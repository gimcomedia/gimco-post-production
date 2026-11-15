# بناء كومبات قابلة للتعديل بالكود (.jsx)

- **الاستخدام:** لما Claude يبني الكومب نفسه بدل رندر مسطّح.
- **المكان:** نصي
- **المتطلبات:** After Effects + Run Script
- **البديل Native:** بناء يدوي بنفس الأسماء والـCONFIG
- **الفهرس:** [INDEX](../INDEX.md)

---

## Editable motion for After Effects and Premiere

Goal: everything Claude makes opens as native, editable layers in AE or clips in Premiere. Plan the beat first with `montage-hub`.

## After Effects: write a .jsx that builds the comp

Delivery: one `.jsx` file per job. The editor runs it from File > Scripts > Run Script File. In a Claude Code session on the editor's Windows machine, Claude may run it directly: `"C:\Program Files\Adobe\Adobe After Effects <version>\Support Files\AfterFX.exe" -r "<full path>\script.jsx"` (check the installed version folder first).

Script rules:
- Wrap everything: `app.beginUndoGroup("Claude - <name>"); ... app.endUndoGroup();` so one Ctrl+Z removes it. Use ExtendScript (ES3): `var`, no arrow functions, no `let`/`const`, no template strings.
- Put all editable values at the top in one `CONFIG` object: texts, brand colours (as [r,g,b] 0-1), font PostScript names, sizes, durations, fps. Name every comp, layer and folder clearly (e.g. `LT_LowerThird_Name`, `TXT_Name`, `SHP_Bar`). Create a project folder for the job.
- Comp: `app.project.items.addComp(name, 1080, 1920, 1, durationSec, 30)` for 9:16 reels (1920x1080 or 1080x1080 as needed).
- Text: `var l = comp.layers.addText("..."); var p = l.property("Source Text"); var d = p.value; d.font = "Cairo-Bold"; d.fontSize = 72; d.applyFill = true; d.fillColor = [1,1,1]; d.justification = ParagraphJustification.RIGHT_JUSTIFY; p.setValue(d);` Use the font's PostScript name; check it is installed or fall back and say so.
- Arabic: tell the editor once that AE must use the Middle Eastern text engine (Preferences > Type > "South Asian and Middle Eastern") for correct joining and RTL. Right-justify Arabic. Never animate Arabic per character; use whole-word or whole-line animators or layer-level transforms.
- Shapes: `var s = comp.layers.addShape(); var g = s.property("Contents").addProperty("ADBE Vector Group"); var c = g.property("Contents"); var r = c.addProperty("ADBE Vector Shape - Rect"); r.property("Size").setValue([w,h]); r.property("Roundness").setValue(24); c.addProperty("ADBE Vector Graphic - Fill").property("Color").setValue([r,g,b]);`
- Keyframes: `prop.setValueAtTime(t, value)`. Ease with `prop.setTemporalEaseAtKey(k, inArr, outArr)` where each array has one `new KeyframeEase(0, influence)` per dimension for non-spatial properties (Scale: 3, Opacity: 1) and exactly one for spatial properties (Position). Typical: out 0/75, in 0/75 (easy ease); snappy entrance: out influence 85-90. Entrances 300-600 ms, stagger 60-150 ms, never linear.
- Keep motion alive on holds (slow 1 -> 1.03 scale drift) so a held frame does not look frozen.
- Markers for the editor: `l.property("Marker").setValueAtTime(t, new MarkerValue("cue: word"));`
- Make it Premiere-editable (optional, when asked): `textLayer.property("Source Text").addToMotionGraphicsTemplateAs(comp, "Doctor name")` for each editable field, then `comp.exportAsMotionGraphicsTemplate(true, "<path>\\name.mogrt")`. The editor then changes the text in Premiere's Essential Graphics panel.
- Use expressions only when they make the comp easier to edit (e.g. a slider controlling all delays); comment them.
- Finish with `comp.openInViewer();` and an `alert()` summary in English listing what was created.

Lessons from real builds (Alaa Reel 2, AE 2027):
- `layer.copyToComp(comp)` keeps the source layer's in/out points. After shifting the copy's `startTime`, set its `inPoint`/`outPoint` again, or it can vanish mid-shot.
- Keyframe times are comp time and travel with `startTime`: shifting a layer moves all its keys, so re-key fades after the shift.
- Making a precomp longer does not extend its layer in the parent comp: set that layer's `outPoint` too.
- Time Remap: `timeRemapEnabled = true`, set `outPoint`, add your keys, then remove only the default keys. Removing every key first throws "Can not set value ... property hidden".
- `layer.applyPreset(file)` needs the comp open in the viewer, only that layer selected, and `comp.time` set to where the preset should start.
- Shatter's match name is `APC Shatter` (not `ADBE Shatter`).
- Applying one of Mahmoud's scale presets (`.ffx`) to a layer replaced the effects already on it: a Slider Control on that null was gone and an `Elastic Controller` was there instead. Apply the preset first and add your own effects after it, or keep controls on another layer.
- An expression that reads a slider whose value is missing ends in "invalid numeric result" and the property falls back to its static value (a liquid fill silently stayed empty). For a one-off fill, plain keyframes on the shape's Size/Position are safer.
- Shape layer contents draw top-down: the first group in the list sits on top, and `addProperty()` appends at the bottom. Call `group.moveTo(1)` for a detail that must stay on top (a tick on a badge).
- For Claude's own checks, `comp.saveFrameToPng(time, file)` writes a PNG with alpha: no render queue, and nothing to send to the editor.

Before handing over: re-read the script for ES3 syntax errors, matching begin/endUndoGroup, correct property match names, and that every text fits the safe area (keep 120 px margins top/bottom for 9:16 UI overlays).

Then the editor links the comp into Premiere with Dynamic Link (File > Adobe Dynamic Link > Import After Effects Composition) or imports the MOGRT.
