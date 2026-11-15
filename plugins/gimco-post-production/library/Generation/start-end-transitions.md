# ترانزيشن Start Frame → End Frame

- **الاستخدام:** انتقال مولّد بين لقطتين بحركة كاميرا أو VFX.
- **المكان:** نصي
- **المتطلبات:** موديل فيديو يدعم Start/End
- **البديل Native:** ترانزيشن Native في افتر (Editorial/Visual)
- **الفهرس:** [INDEX](../INDEX.md)

---

## ترانزيشن Start Frame → End Frame (Creative Direction System)
الخلاصة اللي وصلنالها من مشاريع سابقة: أقوى ترانزيشن **مش اللي فيه مؤثرات أكتر**، لكن اللي بيخليك تحس إن الكاميرا اتحركت فعلًا من المشهد الأول للتاني، حتى لو المكانين مختلفين تمامًا. يعني: **لقطة كاميرا واحدة حقيقية، جواها تعديلة واحدة مستخبية بذكاء**، مش Morph ومش تأثير بنفرضه على الصورتين. البرومبتات القديمة (مشروع سابق، والبرج، وTAMKEEN/Aramex، والتخرّج، وMUST) في `<DOCS>\Gimco_Motion_Skill\abdallah-generate\transition-prompts-library.txt`، وأي برومبت ينجح يتضاف هناك.

### الخطوة 0: حلّل الفريمين قبل أي تأثير
**القاعدة الأم:** التقنية بتطلع من تكوين الصورتين. ما نقررش التأثير الأول وبعدين نحاول نفرضه عليهم.
افتح الصورتين (Read) واكتب لكل فريم في سطرين: الفورجراوند القريب، والمرساة البصرية (أقوى عنصر)، والمنظور وارتفاع الكاميرا، واتجاه الضوء وحرارته، والأشكال والخطوط المتكررة، والأصول المقفولة (لوجو، كتابة، وش، منتج). بعدين جاوب على **4 أسئلة بالترتيب ده**:
1. **نقطة الربط البصري:** إيه اللي بيربط الفريمين؟ شكل، لون، حركة، خامة، عنصر معماري، ضوء، انعكاس.
2. **مسار الكاميرا:** حركة واحدة مستمرة من A لـ B. اتجاهها لازم يكون منطقي مع مكان B (لو B تفصيلة قريبة تحت، الكاميرا تكمّل نزول وقرب).
3. **طريقة الإخفاء:** فين اللحظة اللي المكان بيتغير فيها والعين مش شايفة؟ (حجب فورجراوند، Motion Blur، Match، انعكاس).
4. **الاستقرار:** إزاي الكاميرا تهدى وتقفل على تكوين الإند فريم بالظبط.

### Transition Brief (يتعرض على عبدالله مع التكلفة، قبل البرومبت)
| البند | المطلوب |
|---|---|
| نقطة الربط | العنصر الحقيقي في الفريمين |
| التقنية | واحدة من المكتبة تحت |
| النوع | Camera-Led أو VFX-Led |
| مسار الكاميرا | الحركة بالاتجاه والسرعة (مثلًا: dolly in + tilt up ← whip down) |
| لحظة الإخفاء | الثانية والعنصر اللي بيخبّي |
| المدة والتوقيت | 4 مراحل بالثواني |
| الأصول المقفولة | لوجو/كتابة/وش/منتج لازم يفضلوا زي ما هم |
| الموديل والتكلفة | من `simulate_cost` |
لو فيه كذا ترانزيشن في نفس الريل، حطهم في جدول واحد عشان يبان إن التقنيات **متنوعة** ومش مكررة.

### القواعد العشرة
1. **Camera Movement First:** حدّد المسار بالاسم: Dolly In/Out، Orbit، Crane Up/Down، Whip Pan، Tracking، Tilt. ممنوع `cinematic movement` من غير وصف.
2. **Motivated Transition:** كل انتقال له سبب بصري موجود فعلًا في الصور: موبايل، شعر، إيد، لوجو، انعكاس، زجاج، إضاءة، عنصر معماري.
3. **Continuous Camera Momentum:** الحركة تبدأ من الاستارت، وتكمل خلال الانتقال، وتكمل طبيعي في الإند. ممنوع حركة تقف وتبدأ حركة تانية من غير منطق. نفس الاتجاه ونفس الـ Motion Blur قبل وبعد الإخفاء.
4. **Intelligent Morphing:** لو فيه مورفينج، يبقى بين عناصر متشابهة في الشكل أو اللون أو الحركة. **أبدًا** بين وشوش ناس أو منتجات مختلفة.
5. **Natural Occlusion:** من أنضف الأساليب: جسم قريب يعدّي قدام العدسة ويغطيها لحظة (شعر، عمود، هدوم، جسم لمبة، باب)، والتغيير يحصل جوه الحجب ده.
6. **Controlled Speed Ramping:** Slow Start ← Fast Transition ← Smooth Deceleration. السرعة في النص بس، مش طول الفيديو.
7. **Photorealistic VFX:** أي مؤثر يتفاعل مع البيئة بعمق حقيقي: Parallax، Reflections، Motion Blur، Shadows، Depth of Field. مش Overlay فوق الفيديو.
8. **Brand & Identity Lock:** اللوجوهات والكتابة والمنتجات والوشوش والألوان والخامات تفضل زي ما هي. الموديل غيّر حروف اللوجو (مثال: 3 حروف بقت حروف تانية) ونوّر حروف غلط رغم وضوح البرومبت، فدي بتتراجع حرف حرف.
9. **No Repetitive Transitions:** مش كل مشهد محتاج خط أخضر أو Orbit. نوّع بين Match Action، Shape Match، Foreground Wipe، Whip Pan، Macro-to-Wide، Architectural Reveal. ما تكررش نفس التقنية في ترانزيشنين ورا بعض في نفس الريل.
10. **Exact End-Frame Convergence:** آخر جزء يهدى، والكاميرا تستقر على نفس تكوين الإند فريم، عشان المونتاج يكمل من غير قفزة.

### مكتبة التقنيات (اختار حسب اللي موجود في الفريمين)
| التقنية | امتى (الإشارة في الصور) | جملة الميكانيزم في البرومبت | النوع |
|---|---|---|---|
| **Foreground Occlusion** | مكانين مختلفين، وفيه جسم قريب الكاميرا تعدي جنبه أو تحته (لمبة، عمود، كتف، شعر، نبتة، باب) | `The camera passes extremely close to [object]; its [dark textured surface] sweeps across the lens, fully occluding the frame for a brief instant. Use this natural occlusion to conceal the location change.` | Camera |
| **Object Match** | عنصرين شبه بعض في الشكل (دايرة لمبة ↔ فنجان، عمود ↔ أنبوبة منتج) | `[A object] fills the frame; at the transition point its silhouette aligns in shape, position and scale with [B object], which is revealed as the camera continues.` | Camera |
| **Gesture Match** | إيد بتتحرك في الاتنين | `The hand motion in the START FRAME continues uninterrupted, same direction and speed, as [B's hand action].` | Camera |
| **Orbital Transition** | ضهر شخص في A ووش شخص في B | `The camera orbits around [subject]; their back passes close to the lens as a soft foreground, and the orbit continues to reveal [B subject] from the front.` | Camera |
| **Macro-to-Wide Reveal** | تفصيلة منتج/خامة ↔ مكان واسع (أو العكس) | `Begin on an extreme macro of [texture]; one continuous pull-back reveals it as part of [B environment].` | Camera |
| **Architectural Match** | أقواس، حيطان، أعمدة، فتحات | `The [arch/doorway] in the START FRAME aligns with the [arch] of the END FRAME; the camera dollies through the opening into the new space.` | Camera |
| **Whip Pan** | لقطتين مالهمش رابط شكلي | `A fast but controlled [left/right] whip pan with realistic shutter motion blur; the blur conceals the change, and the camera exits the whip in the same direction into [B].` | Camera |
| **Glass Reflection** | زجاج، مراية، واجهة، شاشة | `The camera pushes toward the [glass]; [B] appears in its reflection, and the camera passes through the reflection plane into [B].` | Camera/VFX |
| **Light-Guided** | ضوء أو حرف منوّر موجود في الصورة، أو براند ليه خط ضوء | `A thin [mint/white] light line travels along [existing edge or surface]; the camera follows it into [B]. Subtle, refined, no glow explosion.` | VFX |
| **3D Object Assembly** | بناء منتج أو حروف | `Pieces fly, rotate, align and snap into place in waves, each lock with a brief soft light pulse.` | VFX |

**عائلات VFX-Led القديمة** (للمناسب بس): **Glow Energy** (تريلات دهبي/نعناعي وجزيئات بتلف وتتجمّع، للوجو والافتتاح والتخرج والمناسبات)، **Timelapse** (سحاب، نهار ← Golden ← ليل، شبابيك بتنوّر، للمباني من برّه)، **Typography Detach** (حروف تنفصل 3D وتتجمّع لوجو تاني)، **Drone/FPV** (Orbit واسع أو FPV بـ Roll، للخارجي)، **Concept/Blueprint** (المشهد يتفك لخطوط بلوبرنت ويرجع يتبني).

### Camera-Led ولا VFX-Led؟
**أهم درس من الأخطاء:** كل ما طلبنا من الموديل يغيّر عناصر أكتر في نفس الوقت، فرص التشوه بتزيد. في حروف مشروع سابق طلبنا 3D Shuffle + إعادة ترتيب + الحفاظ على الكتابة + تغيير الإضاءة في 6 ثواني، فطلعت حروف غلط وإضاءة ناقصة.
- **Camera-Led (الافتراضي):** الكاميرا هي اللي تعمل الإبهار، والعناصر ثابتة. الأفضل للمشاهد الواقعية والناس والمؤتمرات والأماكن والمنتجات الحقيقية.
- **VFX-Led:** مسموح بحركة 3D ومورفينج وإضاءة، بس **عنصر واحد بس بيتغير**، وكل الأصول المهمة مقفولة. الأفضل للمشاهد المصممة واللوجوهات والمنتجات في فراغ.
- **لو الكتابة أو اللوجو لازم 100%:** الـ AI يعمل الحركة الأساسية بس، والـ Tracking والكتابة والـ Glow النهائي في After Effects (Thmanyah Sans + Corner Pin أو 3D Camera Tracker).

### التوقيت
| المرحلة | 3.5 ثانية | 4 ثواني | النسبة التقريبية |
|---|---|---|---|
| **Establish:** حركة دخول طبيعية وتأسيس اتجاه الكاميرا | 0–0.9 | 0–1 | 25% |
| **Accelerate:** تسارع محسوب ناحية عنصر الانتقال | 0.9–1.2 | 1–1.6 | 15% |
| **Transform:** الحجب أو الـ Match | 1.2–1.8 | 1.6–2.6 | 20–25% |
| **Reveal + Settle:** كشف الإند وتباطؤ واستقرار | 1.8–3.5 | 2.6–4 | 35–40% |
ده مرجع مش قاعدة. لو المسافة بين المنظورين كبيرة أو فيه حركة شخص طبيعية، طوّل لـ 5–6 ثواني. التوقيت يتكتب في البرومبت بالثواني دايمًا.

### الموديل
- **Seedance 2.5** (الأول): Start + End Frame، و4–30 ثانية، و1080p، وحركة كاميرا موجّهة، وصوت SFX. الأنسب للترانزيشن. لو عايز 3.5 ثانية، ولّد 4 واقطع في بريمير.
- **Kling 2.5:** الـ End Frame **ما بيشتغلش على 720p**، لازم **1080p**. أرخص، كويس للحركات الأبسط.
- الفريمين نفس المقاس (9:16 للريلز). لو المكانين مختلفين تمامًا، Foreground Occlusion أو Whip Pan هما الأضمن.
- قول لعبدالله التكلفة قبل التوليد (`simulate_cost`).

### هيكل البرومبت الجديد (مختصر ومخصص للمشهد)
1. **الافتتاح:** `Create a seamless, highly realistic [N]-second cinematic transition between the exact START FRAME and END FRAME.`
2. **START FRAME:** سطر واحد بالعناصر الحقيقية اللي هنستخدمها (مش وصف شامل).
3. **CAMERA CHOREOGRAPHY:** فقرتين قصيرين: الحركة الأولى بالاسم والاتجاه + الـ Parallax بين عناصر مسمّاة، وبعدين التسارع ناحية عنصر الانتقال.
4. **HIDDEN TRANSITION** (أو **MATCH POINT**): الميكانيزم من المكتبة، و `Maintain the same [direction] camera momentum and directional motion blur. No visible morphing, no light explosion, no artificial portal.`
5. **[SUBJECT] REVEAL:** الخروج للمشهد التاني بنفس الحركة، والعناصر اللي بتظهر بالترتيب، و Rack Focus محدد (من إيه لإيه وبيرجع فين). وآخرها: `Finish precisely on the provided END FRAME, preserving [العناصر بالاسم].`
6. **CAMERA FEEL:** نوع الرج (gimbal/dolly/crane)، و `realistic shutter motion blur`، و `natural exposure adaptation from [ضوء A] to [ضوء B]`، و `smooth speed ramping`.
7. **TIMING:** الـ 4 مراحل بالثواني.
8. **STRICT RULES:** `No ...` عامة + **مخصصة لعناصر المشهد** (`no changing the coffee machine, no disappearing cup`).
9. **الجملة الأخيرة:** `The transition must look like authentic professionally captured footage with one cleverly concealed camera edit.`
10. **إضافات VFX-Led بس:** بلوك PRESERVE صريح، وملخص بالكابيتال 4–6 سطور. **SOUND** لو Seedance: `SOUND EFFECTS ONLY` + أصوات و `NO MUSIC`.

**قواعد الكتابة:** كل اسم في البرومبت موجود فعلًا في الصور. تقنية واحدة بس. الاتجاه ثابت (لو نازلة تفضل نازلة). 250–400 كلمة. لا أوصاف سينمائية عامة من غير حركة قابلة للتخيل. ولو حاجة فشلت، **غيّر حاجة واحدة** (بسّط أو غيّر التقنية)، ما تزودش كلام.

### المثال المرجعي (المحل ← ماكينة الإسبريسو) — ده المستوى المطلوب
```
Create a seamless, highly realistic 3.5-second cinematic transition between the exact START FRAME and END FRAME.

START FRAME: The warm interior of a small shop with stocked shelves, a white countertop appliance and a large illuminated woven pendant lamp hanging overhead.

CAMERA CHOREOGRAPHY:
Begin with a smooth forward dolly into the shop while gently tilting upward toward the large warm pendant lamp. Build natural perspective and parallax between the lamp, shelves and counter.

Accelerate into a fast but controlled camera move, passing extremely close beneath the woven lampshade. Its dark textured underside sweeps across the lens, completely occluding the frame for a brief instant.

HIDDEN TRANSITION:
Use this natural foreground occlusion to conceal the location change. Maintain the same downward camera momentum and directional motion blur. No visible morphing, no light explosion, no artificial portal.

ESPRESSO REVEAL:
Emerge seamlessly from the dark foreground into a close-up of the black espresso machine. Continue the downward camera tilt combined with a subtle forward slide, revealing the machine's metallic portafilter, chrome reflections and the white bowl containing creamy coffee in the lower foreground.

Use a natural rack focus from the machine's metal details toward the cup, then gently return focus to the machine as the camera smoothly decelerates.

Finish precisely on the provided END FRAME, preserving the original coffee machine, cup position, lighting and realistic shallow depth of field.

CAMERA FEEL:
Professional handheld-gimbal cinematography, fast controlled whip movement, realistic shutter motion blur, natural exposure adaptation from warm shop lighting to moody coffee-machine lighting, authentic optical depth and smooth speed ramping.

TIMING:
0–0.9s: Forward dolly and upward camera tilt toward the pendant lamp.
0.9–1.5s: Fast whip beneath the lampshade, creating full-frame foreground occlusion.
1.5–2.8s: Reveal the espresso machine through continued camera motion.
2.8–3.5s: Smooth deceleration and precise final-frame alignment.

STRICT RULES:
No object morphing, no flying objects, no melting architecture, no artificial flashes, no excessive motion blur, no changing the coffee machine, no disappearing cup, no hard visible cuts.

The transition must look like authentic professionally captured footage with one cleverly concealed camera edit.
```
**ليه نجح (الـ 4 أسئلة):** الربط = اللمبة الكبيرة القريبة من السقف. المسار = Dolly In + Tilt Up ثم Whip تحت اللمبة ونزول للماكينة. الإخفاء = بطن اللمبة الغامق يغطي العدسة لحظة. الاستقرار = Slide خفيف + Rack Focus للفنجان ورجوع للماكينة وتباطؤ. وكل عنصر مذكور موجود فعلًا في الصورتين، والـ STRICT RULES فيها عناصر المشهد نفسه.

### Master Framework (هيكل احتياطي، مش برومبت نهائي)
لو الفريمين جداد ومش واضح لسه، ابدأ من ده، وبعدين **بدّل كل سطر عام بوصف حقيقي من الصورتين**:
```
Create a seamless, ultra-photorealistic cinematic transition between the provided START FRAME and END FRAME.
DURATION: 3–5 seconds, with a controlled cinematic speed ramp.
SCENE ANALYSIS: Identify the dominant foreground objects, visual anchors, perspective, lighting, and spatial relationships in both frames.
CAMERA CHOREOGRAPHY: Design one continuous, physically believable camera trajectory connecting the two compositions. Clearly define: initial camera direction and speed; dolly, tracking, orbit, crane or tilt movement; acceleration and speed-ramp timing; final deceleration and camera stabilization.
TRANSITION MECHANISM: Use a visually motivated transition based on existing scene elements. Prioritize natural foreground occlusion, object matching, motion matching, architectural continuity or optical reflections. Hide the spatial transformation during camera movement or foreground obstruction. Maintain continuous motion direction, realistic parallax, consistent camera inertia, natural motion blur and believable perspective.
FINAL REVEAL: Continue the camera movement naturally into the END FRAME. Progressively reveal the final subject and environment with accurate spatial depth. Smoothly decelerate and settle into the exact END FRAME composition.
VISUAL QUALITY: Premium commercial cinematography. Realistic lighting and material reflections. Natural depth of field. Professional stabilized camera physics. Subtle, carefully controlled VFX. Elegant cinematic pacing.
PRESERVATION: Preserve all existing logos, typography, product shapes, human identities, architecture, colors, and environmental details.
AVOID: Random morphing, distorted anatomy, warped branding, artificial dissolves, excessive glow, chaotic particles, unmotivated camera motion, sudden teleportation and visible hard cuts.
FINAL GOAL: The transition must look like a professionally executed continuous real-camera shot, not an artificial AI-generated scene change.
```

### قالب البراند Glow Transition (VFX-Led، للوجو والبراند والافتتاح بس)
```
Create a breathtaking yet completely photorealistic 6-second continuous cinematic VFX transition from the exact START FRAME to the exact END FRAME.
Begin exactly from the START FRAME: [A].
CAMERA CHOREOGRAPHY: The camera performs a slow physical push-in on a stabilized dolly, then a smooth 25-degree orbit to the right with elegant cinematic speed ramping and strong realistic parallax.
MID-SHOT GLOW: [the key object] gently lifts in true 3D space and breaks into refined [mint-green and warm-white] light trails and a few luminous particles. The trails orbit once in a soft spiral, then flow forward through the space; the camera follows them fluidly.
REVEAL: The trails travel into [B's space] and reassemble precisely into [B's key element], each piece locking into place with a brief soft light pulse. Realistic exposure adaptation from [A lighting] to [B lighting]. Rack focus from the glowing element to [the person / product].
FINAL: All particles fade naturally. The camera decelerates smoothly into the composition of the exact END FRAME.
PRESERVE: identity, hands, architecture, typography, colors and every physical object of both frames.
STYLE: luxury medical commercial cinematography, premium and technological — not fantasy, subtle bloom, natural motion blur, shallow depth of field.
STRICT RULES: No morphing faces, no warped hands, no melting objects, no hard cuts, no teleportation, no random new objects, no floating pieces remaining at the end.
ONE CONTINUOUS CAMERA MOVE. REFINED GLOW TRAILS. PIECES LOCK INTO PLACE. SMOOTH DECELERATION. EXACT END FRAME CONVERGENCE.
SOUND EFFECTS ONLY: soft whoosh, airy shimmer, gentle magnetic lock clicks, subtle room tone. NO MUSIC.
```
الجلو دايمًا `premium, technological, refined — not fantasy`: تريلات رفيعة، وجزيئات قليلة، و Bloom خفيف.

### الهوية البصرية لكل براند
- **براند عناية بالبشرة:** Premium Cinematic Medical Beauty: واقعية عالية، تفاصيل نضيفة، حركة كاميرا أنيقة، إضاءة مدروسة، و Sage/Mint Green رفيع عند الحاجة بس، من غير أخضر مشبع أو نيون.
- **أي براند تاني** (محل، قهوة، مؤتمر): نفس جودة الإخراج، بس بألوان وإضاءة وهوية البراند ده، مش ألوان البراند.
- اللوجو في البرومبت: `Preserve the exact logo "[NAME]" letter by letter; do not retype, relight or animate the letters.` ولو اتغيّر حرف، يتصلّح في AE مش بتوليد تاني.

### مراجعة الترانزيشن
- `video_view_frames` على 5 فريمات: البداية، والتسارع، ولحظة الإخفاء، والكشف، والآخر.
- **لحظة الإخفاء:** فيه Pop أو Morph أو ظهور مفاجئ؟ الحجب/البلر مغطي التغيير كله؟
- **الاتجاه:** الحركة قبل وبعد الإخفاء نفس الاتجاه والسرعة؟
- **الأصول:** اللوجو والكتابة والمنتج والوشوش زي الأصل حرف حرف.
- **التقارب:** آخر فريم قريب من الإند فريم؟ لو فيه فرق بسيط، Cross Dissolve 3–4 فريمات في بريمير على الإند فريم الأصلي. لو كبير، ولّد تاني بتغيير **حاجة واحدة**.
- **في بريمير:** الكليب بين اللقطتين الأصليتين، واقطع على أول وآخر فريم، وزوّد Whoosh و Riser.
