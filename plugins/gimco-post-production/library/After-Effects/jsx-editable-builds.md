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

Delivery: one `.jsx` file per job. The editor runs it from File > Scripts > Run Script File. In a Claude Code session on the editor's Windows machine, Claude may run it directly: `"<AE>\AfterFX.exe" -r "<full path>\script.jsx"` (`<AE>` is defined in Tools-and-Presets/LOCATIONS; check the installed version folder first).

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
- Sending a Premiere script from AE with BridgeTalk: `bt.send(timeout)` blocks AE until Premiere answers. When that Premiere script needs Dynamic Link renders of the same AE project (QE `exportFramePNG` on a timeline with AE comps), the two wait for each other: AE froze for about 4 minutes and the DL frames came out blank or out of date. Send with `bt.send()` (no wait), let the Premiere script write its own log, and never pull DL frames from Premiere while AE is busy.
- When the editor asks for work on the Premiere timeline, AE is only a launcher for the script: change no comp in AE without asking, even to make the placement easier.
- A Dynamic Link clip's media length is the comp's full duration, not its work area.
- A small comp (a 441×441 box, a 720×371 gauge) lands in Premiere with "Set to Frame Size": Motion Scale shows 244.9 or so, not 100. Set Scale from the design (e.g. 94.5) together with Position.
- The editor may retime a comp himself (here he trimmed the empty head of a word comp by 29 frames). Read the comp as it is now before placing it by the old master times.
- Adding a property to a shape group's contents (a Fill after a Rect, a new group next to another group) invalidates the references you already hold to its siblings. Using them then throws "Object is invalid" (one build stopped at its first liquid). Re-fetch after the adds, e.g. `g.property("ADBE Vectors Group").property("ADBE Vector Shape - Rect")`, or by group name from the Root Vectors Group. The group you added into stays valid.
- A null's Opacity does not reach its children. To fade a parented object, put a "Fade" Slider on its CTRL null and drive each visible child's Opacity by expression. Keep that slider off any layer that gets a preset, because the preset replaces its effects.
- In a big build, wrap each scene in its own try, so one error does not stop the rest of the build.
- Reading the editor's projects without opening any app: the `.aep` reads read-only with the Python package `py-aep` (`py_aep.parse(path)`: comps, durations, work areas, layers, in/out, transforms, keyframes). The `.prproj` is gzip XML: unzip a copy and follow the sequence's tracks (`VideoClipTrackItem` Start/End in ticks, 254016000000 per second; Motion Position in 0–1 coordinates of the frame).
- Before placing front graphics in Premiere, read where the captions sit: a caption MOGRT's Motion Position in the `.prproj` is in 0–1 frame coordinates (0.5:0.5 = mid-frame). Keep front cards clear of that band, above or below it.
- Deep Glow 2 comes in with Radius 1000. In a Dynamic Link comp that leaves a wide, banded brown halo around each glowing element, and the halo stays even at Exposure 0 (rings on a dark jacket in Premiere). Set Radius to about 140 (more only for one huge word), and give the effect's Compositing Options > Effect Opacity (`ADBE Effect Built In Params` > `ADBE Effect Mask Opacity`) an expression that switches it off at Exposure 0: `x = thisProperty.propertyGroup(2)("Exposure"); Math.min(1, Math.max(0, x / 0.03)) * 100`.
- Keep the glow on a small solid (a send button) at a whisper, around 0.1. Near 0.9 it washed the copper to white and hid the arrow.
- A full-screen clip that must stay under the captions, when the tracks right under them are taken (overlays, an adjustment layer): add one empty video track there with QE. `app.enableQE(); qe.project.getActiveSequence().addTracks(1, N, 0)` inserted it right after the N-th video track (Premiere 2027), and the caption track moved up one. Find the caption track again afterwards (the track with the long run of clips) and check the new track is empty before placing; on a re-run, reuse it instead of adding another.
- A clip placed with `overwriteClip` takes its project item's name (e.g. `type warp ٣`), not the name the editor gave the source clip (`Volt - type warp ٣`). Find copies by project item (`clip.projectItem.name` / `nodeId`) and track. Never fall back to "anything that starts at this time" across all tracks: that switched off the speaker's own clip on V1.
- Copying a caption look from an older reel onto every caption (same MOGRT): copy each component value with `getValue()`/`setValue(v, true)` except Source Text. Source Text is a JSON string that also carries the font: parse it (`eval("(" + s + ")")`), put the clip's own words in `textEditValue`, keep one run (each array to its first item, `fontTextRunLength = [words.length]`), and write it back as JSON.
- Export from a script: `seq.exportAsMediaDirect(outPath, eprPath, 1)` (1 = sequence In to Out). Premiere 2027 ships `Settings/IngestPresets/Transcode/Match Source - H.264 High Bitrate.epr` in its app folder. It worked while Premiere's panels had stopped repainting.
- QE audio tracks: `qe.project.getActiveSequence().addTracks(0, 0, n, 1, numAudio)` appended n audio tracks that take stereo SFX (Premiere 2027).
- Driving Premiere by screen: Enter while the timecode field is not focused starts Render In to Out. Click the field and check it is in edit mode before typing a timecode.
- Exact box of any layer (any comp, parents included) from a script: add a temporary null, give its Position an expression that takes the layer's `sourceRectAtTime(t, false)` corners through `toComp(point, t)` and returns the min (then the max), read it with `valueAtTime(0, false)`, then remove the null. Works across comps with `comp("Name").layer("X")`.
- Moving one part of the editor's template without editing it: `comp.duplicate()`, then offset that part's controller null with an expression `value + [dx, dy]` (use `ADBE Position_0/_1` if dimensions are separated). If the part moves past the copy's frame edge, turn on `collapseTransformation` on the nested layer, or it is cut at the edge.
- Black-background animated icons (mp4, no alpha): Screen inside a precomp over transparency keeps the black square in Dynamic Link, and on a light reel Screen washes the colours out. Put each icon on a dark rounded tile: tile shape, the icon above it in Screen mode, and a copy of the tile as the icon's alpha matte (`setTrackMatte`). `timeRemapEnabled = true` + a later `outPoint` holds the last frame for a longer stay.
- Premiere runs BridgeTalk scripts only when no modal dialog is open: after opening a project, a "Resolve Fonts" dialog held every script in a queue; they all ran, in order, the moment it was closed. With no project open the script just reports "sequence not found". Look at Premiere's screen before re-sending.
- Moving a placed clip to another track by script: `overwriteClip` the same project item on the target track, confirm the new clip is there, then `oldClip.remove(false, false)` (no ripple).
- QE `exportFramePNG(timecode, path)` adds ".png" to the path itself: pass the path without the extension.
- A template's 3D icon from a 2D shape (Polite After "3D icon"): the flat shape layer inside the main-shape comp is extruded by the Advanced 3D renderer (Geometry Options: Extrusion Depth, Bevel) and turned by its own Y Rotation keys; channel comps light it and the output comp makes the chromatic look; the top comp shows that output several times (main + lens-blurred copies). To use another icon (a house instead of the bolt), replace only that layer's Path: extrusion, lights, rotation and the copies all follow. To keep the original, copy the whole chain first (main shape -> channel comps -> output -> top comp) and `replaceSource(copy, false)` each layer onto the next copy.
- Do not read or set `layer.parent` on layers of a duplicated template comp: here it threw, and the failed `parent = null` left that layer rendering nothing. Write positions in the parent's space instead (`child = (frame - parentPos) / parentScale + parentAnchor`, scale / parentScale). If a layer is already damaged, duplicate a healthy sibling, set it up, and switch the damaged one off.
- When AE throws "Object of type Error found where a Number, Array, or Property is needed", turning that error into text (`"..." + err`) throws again outside the try. Log `err.message` inside its own try.
- `comp.saveFrameToPng()` renders at the comp viewer's current resolution (a Quarter viewer gives 270×480 for 1080×1920): fine for a placement check, not for judging detail.
- Run Script File dialog: Enter in the file name field sometimes does nothing; click Open.

Before handing over: re-read the script for ES3 syntax errors, matching begin/endUndoGroup, correct property match names, and that every text fits the safe area (keep 120 px margins top/bottom for 9:16 UI overlays).

Then the editor links the comp into Premiere with Dynamic Link (File > Adobe Dynamic Link > Import After Effects Composition) or imports the MOGRT.
