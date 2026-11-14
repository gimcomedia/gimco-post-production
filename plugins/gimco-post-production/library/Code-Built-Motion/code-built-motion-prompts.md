# قوالب برومبت لإيديت مبني بالكود

- **الاستخدام:** قوالب جاهزة بكتابتنا: ستايل على كليب جديد، إنترفيو بسبليت وchips، إعلان منتج على شاشة مكتب، نسخ ريفرنس 1:1 بالقياس، إطار عرض قبل/بعد، وجولة نوتس.
- **المكان:** نصي
- **المتطلبات:** نفس متطلبات [المبادئ](code-built-motion-edits.md)
- **البديل Native:** القوالب نفسها تنفع كبريف لمونتير بيشتغل في افتر وبريمير
- **الفهرس:** [INDEX](../INDEX.md)

---

القوالب دي مكتوبة على [المبادئ](code-built-motion-edits.md). اللي بين [ ] بيتعبى. القوالب بالإنجليزي عشان أسماء الأدوات والمصطلحات، والسطور الخاصة بالعربي وقواعد البيت متضافة جواها. القيم أمثلة بتتظبط حسب المشروع.

قواعد البيت اللي متضمنة في كل قالب: أكسنت واحد من باليتة المشروع، الكابشن عند الصدر (52–61% من الطول)، Thmanyah Sans للأساسي وAmira Typo للكلمة الخاصة، Ligatures شغالة للعربي، مفيش نص على الوش، والستيلز للفحص الداخلي مش للتسليم.

---

## 1) ستايل على كليب جديد (متكلم + تايب حركي / كلمة ورا الشخص)

```markdown
You are my motion designer. Turn footage/[clip].mp4 into a [length] vertical edit, 1080x1920, [fps = same as the clip], built in code: Python + OpenCV + ffmpeg for the footage (crop, grade, eased push-ins, person matte), HTML/CSS + GSAP on one paused timeline for every graphic, seeked frame by frame in headless Chrome as transparent PNGs, composited with ffmpeg. No After Effects, no templates, no hand-set keyframes.

First: transcribe with word-level timestamps (local Whisper). Write a beat plan, one row per line: the words, start/end, the line type (hook / statement / list / claim / quiet), the treatment from STYLE, the one key word, the frame each element lands on, the sound. Render one test still per line. Show me the plan and the stills before you build.
My lines (Arabic): [line 1] / [line 2] / [line 3] / [line 4]. Accent: [hex].

STYLE ([background look], ONE accent [hex] for key word, marks, glow, dots; white type)
1. Type roles: small lead-in in Thmanyah Sans, the key word in Amira Typo in the accent, the final word large and heavy. Arabic: ligatures on, right-aligned logic, no letter-spacing, animate word by word (never letter by letter), reveals run right to left.
2. The big word sits BEHIND the head and shoulders (person matte between text and footage) and never covers the face.
3. Hook (first second): [what lands first]. Then hold with one small moving element (cursor, glow drift or slow push-in) so the frame never freezes.
4. [Line-type treatments, one per number, described as what you see.]
5. Plain lines: a small caption at chest height (52-61% of frame height) and nothing else.

MOTION RULES
- Every element lands on its word's onset, 0-3 frames after, never before. Timing from the transcript, never by eye.
- Pops 0 -> 1.1 -> 1.0 in about 6 frames; big cards 0 -> 1.08 -> 1.0 in about 8. Exits ease out (expo/power3). Nothing just appears.
- Motion blur only on fast moves: average 8 sub-frames per frame.
- One line on screen at a time, max 3 text lines, never over the face.
- Matte: per-frame segmentation (MediaPipe or rembg), OpenCV edge cleanup, 2-3 px feather, smoothed over time so the hair never flickers.

AUDIO Voice first, cleaned, master -14 LUFS. One sound per move type, placed in code on the frame the move starts: whoosh for transitions, soft pop per pill/mark, click for cursor, tick for counters, pen scratch under a script word. Music well under the voice. If effects fight the voice, the effects go down.

QC (for your own checking) A still at the peak of every line; check the matte on the hair at 200%; check no text touches the face; check every word against my lines. Then render final.mp4.
```

---

## 2) إنترفيو أو بودكاست (بي رول على الكلمة + سبليت + chips)

```markdown
You are my video editor. Cut my raw interview into a [20-30 s] vertical edit, 1080x1920, built in code (ffmpeg + Python/OpenCV for cuts, crops and grade; HTML/CSS + GSAP for captions, pills, chips and name tags, rendered as transparent PNGs; ffmpeg composite).

First: transcribe raw/ with word timestamps. Pick the strongest stretch (one complete thought, opinion first). Write a plan, one row per line: the shot (close-up / split / B-roll clip name), the line type, the caption treatment, the key word. List any B-roll that broll/ is missing. Show me before you build.
Names: [speaker, role], [listener, role]. Accent: [hex].

STYLE (warm soft grade matched across interview and B-roll, white type, ONE accent)
1. Hook: stacked words in mixed weights, the key word large in the accent, the topic word in an accent pill. Name tag on first appearance: small dark rounded box, name, role under it.
2. B-roll on the word: when a line names something you can show, cut to it for that phrase only. Accent fade at the bottom of B-roll, dark fade at the bottom of face shots, so white text always reads.
3. Statements: two caps lines (Latin) or two weights (Arabic), the second bigger.
4. Split: speaker on top, listener below, thin gutter. Later the top panel turns to B-roll and the speaker drops to the bottom. Panels slide in, never pop.
5. Lists: an intro line with a small icon, then one chip per item on its word, wrapping to a new row; the B-roll changes per item.
6. The one big claim: condensed type on an accent block, last word in a lighter tint.
7. Quiet linking lines: one small caption, nothing else.

MOTION RULES
- Cuts on word starts or in the first real silence after a word, never mid-word.
- Chips pop 0 -> 1.1 -> 1.0 and rise a few px. One caption block at a time, at chest height, never on a face.
- B-roll always has a slow push-in so it never sits still.

AUDIO Voice first at -14 LUFS. Soft pop per pill and chip, light whoosh per cut and split, quiet music bed.

QC Still per caption block; every word, name and spelling checked against the transcript and names; then final.mp4.
```

---

## 3) إعلان منتج على شاشة مكتب

```markdown
You are my motion designer. Build a [12 s] launch film for my product that plays on the monitor in assets/desk.[jpg|mp4], final 1080x1920. Screen film in HTML/CSS + GSAP (CSS 3D or three.js for tilted panels and phones), rendered flat at the screen's own aspect ratio; Python + OpenCV pins it onto the monitor; ffmpeg encodes.

First: mark the four screen corners on a still (track them per frame if the shot moves; mesh-warp if the monitor is curved) and pin a flat test colour inside. Write 4-5 on-screen lines of 2-3 words and a beat plan, one scene per line, 1-2 s each. Show me before you build.
Product: [name, what it does, 3 features]. Real product photo/logo/screenshots in assets/ (use them, don't invent the product).

THE SCREEN (dark base, ONE glow colour drifting behind everything, thin clean type, frosted glass with a 1 px bright rim and soft shadow)
1. One short line at a time, centred, fading up out of a blur (no pop).
2. Every scene change goes THROUGH the content: zoom into the icon, fly into a phone screen, a shape becoming the next shape. No hard cuts.
3. 3D moves share one camera. Numbers count through every value.
4. Close: claim line, then the logo on the brightest glow.

ON THE DESK
- Feather the screen edge 1-2 px inside the bezel; bezel and anything in front stay on top.
- Make it filmed: lift blacks slightly, soften a touch, faint reflection, the screen's light spills onto desk and wall in its colour. The room stays still; all motion is on the screen.
- Two fixed dark rounded labels above the monitor from frame 1 (no pop-in): [hook] and [CTA], key word in the accent. They never touch the screen.

AUDIO No voice. Music bed, whoosh per move, click on the cursor tap, riser under the count, one low hit on the logo.

QC Still per scene on the desk; corners locked on first, middle and last frame; every word against the plan; then final.mp4.
```

---

## 4) نسخ ريفرنس 1:1 بالقياس

```markdown
Copy the edit in reference.mp4 onto my material, 1:1: same timing, layout, type, colours, motion and sound, with my footage and my lines. Built in code, frame by frame. No hand-set keyframes.

1. Probe both files (size, fps, length). If the reference sits inside a showcase frame, find the exact rectangle of the card being copied, crop it with ffmpeg, and work from that crop. Scale every measurement to the output size (720 -> 1080 = x1.5).
2. Split the reference into beats: every cut, new line, element in or out. For each beat write REF.md with numbers measured from frames, never guessed: positions and sizes in px, corner radii, fonts matched by x-height and letter shapes, colours sampled from the frame, glow and shadow radius, start/end frame and easing of each element, stagger counted in frames.
3. Map my lines to beats by line function (same kind of line, same treatment). Keep my words close to the reference word lengths so the layout holds. Arabic: ligatures on, word-by-word instead of letter-by-letter, right-to-left reveals. Write the mapping in PLAN.md.
4. Build one beat at a time, render it next to the same moment of the reference, write DIFF.md (every difference, worst first: position, size, font, timing, colour, blur), fix the worst, compare again. Move on only when the beat matches.
5. Rebuild every graphic clean at full resolution. Never cut anything out of the reference and upscale it.
6. Sound: find every onset in the reference audio, log its frame, and put my sounds on the same frames at the same level. Voice on top at -14 LUFS.
7. Finish with a side-by-side (reference left, mine right) and a per-frame check that nothing jitters and the matte never flickers. Ask me only for a missing file; otherwise show me the result.
```

---

## 5) إطار العرض قبل/بعد (بوست يبيع نفسه)

```markdown
Also render showcase.mp4, 1080x1920, both cards frame-locked:
- Background: light grey to white with one huge, very faint brand shape behind everything.
- Edit card: x 35-85%, y 22-72% of the frame (9:16), rounded corners, soft shadow, in front.
- Raw card: my untouched clip in black and white, x 10-35%, y 34-61%, tucked behind the edit card's left edge.
- Dark pill above each card: [brand/label] above the edit, "Raw footage" with a red dot above the raw card.
- CTA: two centred lines at y 76-81%, the keyword in the accent.
```

---

## 6) جولة نوتس

```markdown
Notes, round [N]. Fix only these, keep everything else:
1. [At 0:0X / on element Y]: [what happens now] -> [what it should do].
2. ...
Render again and show me.
```

نصايح النوتس: نقط قصيرة ومحددة بالثانية أو العنصر، جولة واحدة في المرة. ولو الحركة بترعش: "اعمل الحركة من نقط مفتاحية قليلة ومنحنى ناعم، مش من أرقام متقاسة فريم بفريم". ولو الصوت بياكل كلمة: "اقطع في أول سكوت حقيقي بعد الكلمة".
