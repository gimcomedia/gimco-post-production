# عائلات الترانزيشن المولّد وهيكل البرومبت المفصّل (12 خطوة)

- **الاستخدام:** لما تحتاج تختار عيلة ترانزيشن (Glow، كاميرا حقيقية، تايم لابس، تجميع، حروف، درون، Match Cut، بلوبرنت) أو تكتب برومبت ترانزيشن طويل ومفصّل.
- **المكان:** نصي (من النسخة المتسطبة السابقة من سكيل التوليد)
- **المتطلبات:** موديل فيديو يدعم Start/End Frame
- **البديل Native:** ترانزيشنز افتر (Visual-Direction/framing-and-cut-transitions)
- **الفهرس:** [INDEX](../INDEX.md) · النسخة المختصرة الأحدث: [start-end-transitions](start-end-transitions.md)

---

## ترانزيشن Start Frame → End Frame (أقوى حاجة عند عبدالله: جلو + حركة كاميرا)
لما يطلب ترانزيشن/مورفينج من فريم لفريم، **ما تعملش Morph**. اعمله **لقطة كاميرا واحدة حقيقية** بتعدّي من مكان لمكان، وجواها حدث واحد مدروس (جلو، تايم لابس، تجميع). اتعلّمناها من برومبتات مشاريعه (مشاريع سابقة). البرومبتات الأصلية كاملة في `<DOCS>\Gimco_Motion_Skill\abdallah-generate\transition-prompts-library.txt`، ارجعلها لما تحتاج مثال قريب.

### الموديل
- **Seedance 2.5** (الأول): Start + End Frame، و4–30 ثانية، و1080p، وحركة كاميرا موجّهة، وصوت SFX. الأنسب للترانزيشن.
- **Kling 2.5:** الـ End Frame **ما بيشتغلش على 720p**، لازم **1080p**. أرخص، كويس للحركات الأبسط.
- الفريمين لازم نفس المقاس (9:16 للريلز) ونفس العالم تقريبًا (نفس الشخص/المكان) عشان التقارب يبقى طبيعي.
- قول لعبدالله التكلفة قبل التوليد (`simulate_cost`).

### عائلات الترانزيشن اللي بيحبها
| العيلة | فيها إيه | امتى |
|---|---|---|
| **Glow Energy** (المفضلة) | تريلات ضوء دهبي/نعناعي، جزيئات بتلف (Orbit) وبتعمل Vortex، الحاجة بتتفك لضوء وتتجمّع في المشهد التاني، والكاميرا ماشية ورا الضوء | اللوجو والبراند والافتتاح والتخرج والمناسبات |
| **Real Camera** | Dolly/Crane/Orbit بدرجات، Speed Ramp، Rack Focus، Exposure Adaptation، من غير أي VFX | البوثات والمؤتمرات وأي حاجة لازم تبان حقيقية  |
| **Timelapse** | سحاب سريع بطبقات، نهار ← Golden ← Blue ← ليل، الشبابيك بتنوّر دور دور | المباني والعيادات من برّه |
| **Assembly** | مئات القطع بتطير وتلف وتقفل في مكانها بموجات، ونبضة ضوء مع كل قفلة | بناء مبنى أو منتج أو جهاز |
| **Typography Detach** | الحروف بتنفصل من الحيطة 3D، وتطير، وتتحول تريلات، وتتجمّع لوجو تاني | لوجو ← لوجو، اسم ← اسم |
| **Drone / FPV** | Orbit واسع ونزول منحني، أو FPV سريع بـ Roll | خارجي، وافتتاح المكان |
| **Match Cut** | نفس حركة الإيد/الشيء تكمل في المشهد التاني | لقطات قريبة لإيدين وأدوات |
| **Concept / Blueprint** | المشهد بيتفك لخطوط بلوبرنت ويرجع يتبني | فكرة ← واقع |

### هيكل البرومبت (ثابت، بالترتيب ده)
1. **الجملة الأولى:** `Create a breathtaking yet completely photorealistic [N]-second continuous cinematic [camera transition / VFX transition] from the exact START FRAME to the exact END FRAME.`
2. **البداية:** `Begin exactly from the START FRAME: [وصف دقيق للي في الفريم الأول].`
3. **CAMERA CHOREOGRAPHY:** حركة جسمانية بأرقام: `slow physical dolly backward on a motorized crane, 30-degree clockwise orbit, tilt up from overhead to three-quarter view`. حركة واحدة أساسية بس.
4. **MID-SHOT EVENT:** الحدث الواحد: Speed Ramp أو Glow أو Timelapse أو Assembly، وإزاي شكله بالظبط.
5. **REVEAL:** إيه اللي بيظهر بالترتيب، مع Parallax و Rack Focus (فورجراوند ← إيد ← وش).
6. **الضوء:** `realistic exposure adaptation` من إضاءة الأول لإضاءة الآخر، من غير Fade صناعي.
7. **FINAL:** `Smoothly decelerate into [composition] matching the exact END FRAME.`
8. **PRESERVE:** الهوية والإيدين والمعمار والكتابة والأشياء.
9. **STYLE:** سطر واحد (high-end congress / luxury medical commercial cinematography…).
10. **STRICT RULES:** `No ...` على حسب العيلة.
11. **ملخص بالكابيتال** (5–8 سطور): الأفعال الأهم تتكرر عشان الموديل يمسكها.
12. **SOUND** (لو Seedance): `SOUND EFFECTS ONLY` + أصوات (whoosh، رياح، شيمر، قفلات مغناطيسية)، و `NO MUSIC`.

### قواعد اتعلمناها
- **اختار عيلة واحدة** وما تخلطش: لو Real Camera اكتب صراحة `no particles, no portals, no light tunnels, no dissolves`. لو Glow اكتب `no morphing faces, no melting objects, no warped hands`.
- **الجلو بيبقى "premium, technological, refined — not fantasy"**: تريلات رفيعة، وجزيئات قليلة، و Bloom خفيف، ونبضة ضوء لحظة القفل. ألوانه من البراند: نعناعي/أبيض لبراند العناية بالبشرة، ودهبي للمناسبات.
- **الأشياء ما تظهرش فجأة ولا تكبر عادي:** `pieces fly, rotate, align and snap into place` أو `rises physically from the floor`.
- **No hard cuts, no teleportation:** `one continuous physical camera move through the same space`.
- **التقارب للآخر:** آخر ثانية دايمًا Deceleration هادي، وكل الـ VFX تختفي `naturally`، و `no floating pieces remaining at the end`.
- **الوجوه والإيدين:** اطلب `preserve identity, realistic hand movements`. ولو فيه أطفال: `no distorted children, no morphing faces`.
- **في بريمير:** حط الكليب بين اللقطتين الأصليتين، واقطع على أول وآخر فريم، وزوّد Whoosh و Riser في الصوت.

### قالب Glow Transition (جاهز)
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
