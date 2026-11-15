# التحريك من صورة والفكرة البصرية (جملة = صورة)

- **الاستخدام:** تحريك صورة مولّدة، أو تحويل جملة لاستعارة بصرية.
- **المكان:** نصي
- **المتطلبات:** كونيكتور فيديو
- **البديل Native:** مش محتاج
- **الفهرس:** [INDEX](../INDEX.md)

---

## التحريك (Image → Video)
- **الموديل:**
  - **Kling 2.5 720p 5 ثواني:** الأساسي، أرخص، بيقبل Start Frame و Negative Prompt. أرخص اختيار للأيقونات والبي-رول.
  - **Seedance 2.5:** أعلى جودة وحركة كاميرا موجّهة و1080p، لما اللقطة مهمة جدًا (هيرو، افتتاح، ترانزيشن). أغلى، فقول لعبدالله الأول.
- **دايمًا من صورة (Start Frame)** اتراجعت واتوافق عليها، مش من نص بس.
- **برومبت الحركة للبي-رول والأيقونات قصير وهادي.** الحركة البطيئة بتبان فخمة ومش بتكسر الشكل:
  - أيقونة: `The glass icon floats and slowly rotates about 15 degrees, a soft light sweep glides across the glass edge, subtle glow pulses gently. Camera static. Smooth, slow, elegant. The symbol shape stays perfectly rigid and unchanged.`
  - Assembly: `The white symbol rises and settles onto the glass tile with a soft bounce, light sweep follows.` (ابدأ بصورة البلاطة من غير رمز، و End Frame بالرمز).
  - بي-رول: `Slow cinematic push-in, subtle parallax between foreground and background, gentle natural motion of [curtain / floating particles / petals], soft light shift. No morphing, no new objects.`
- **Negative Prompt (Kling):** `morphing, warping symbol, extra objects, text, letters, flicker, fast motion, camera shake, distortion, melting glass`.
- **الاختيار:** خد من الكليب الجزء اللي فيه الحركة المفيدة. الأيقونة غالبًا 1.5–2.5 ثانية كفاية، والباقي بالـ AE (Inertia وبريستس Trend 2026 زي Light Sweep و Deep Glow).

## الفكرة البصرية الذكية (Visual Metaphor Frame): الجملة تبقى صورة واحدة
عبدالله بيعتبرها أقوى حاجة: الدكتور يقول جملة، وإحنا نحوّلها لكادر واحد يحكي الفكرة من غير كلام. **المثال المرجعي** (الصورة في `<DOCS>\Gimco_Motion_Skill\abdallah-generate\ref_metaphor_surgical_vs_nonsurgical.png`): "واحدة محتارة بين التجميل الجراحي وغير الجراحي":
- ست واقفة **في النص** بين بابين، إيدها على دقنها (وضعية تفكير)، ولابسة بيج فخم محتشم.
- **الباب الشمال** عليه لافتة «تجميل جراحي / SURGICAL AESTHETICS»، ووراه أوضة عمليات بإضاءة **زرقا باردة** وجراحين.
- **الباب اليمين** عليه لافتة «تجميل غير جراحي / NON-SURGICAL AESTHETICS»، ووراه أوضة تجميل بإضاءة **كهرمانية دافية** وكرسي وأوركيد وجهاز.
- **ستارة Teal غامقة** في النص بتفصل العالمين، و**نبتة في الفورجراوند** عاملة عمق.
- **السر:** اللون نفسه بيحكي (البارد = جراحة/خوف/تقني، الدافي = راحة/ناعم)، وده نفس Teal & Orange بتاعنا بس بقى له معنى.

### الطريقة (4 خطوات)
1. **استخرج الفكرة الواحدة** من الجملة: اختيار؟ قبل/بعد؟ مشكلة خفية؟ خرافة/حقيقة؟ رحلة؟ توازن؟
2. **اختار أداة بصرية** من الجدول تحت.
3. **وزّع المعنى على الضوء والمكان:** كل اختيار ليه لون وإضاءة وعالم، والشخص هو المرساة في النص.
4. **ابني الكادر جاهز للحركة:** فورجراوند + الشخص + خلفيتين، ومساحة فاضية للكابشن (الكابشن عند حوالي 60–70% من ارتفاع الكادر، فما تحطش وش الشخص هناك).

| الفكرة | الأداة البصرية |
|---|---|
| اختيار بين حاجتين | بابين/طريقين/ممرين بإضاءتين مختلفتين والشخص في النص (Crossroads) |
| قبل وبعد | مراية فيها انعكاس مختلف، أو كادر مقسوم بخط ضوء |
| مشكلة خفية (هرمونات، إنسولين) | شباك/زجاج شفاف بيكشف اللي جوه، أو ضل مختلف عن الشخص |
| خرافة وحقيقة | لافتة أو كارتين، واحد مضلّم وواحد منوّر |
| توازن (أكل، نوم، هرمونات) | ميزان فخم بحاجتين في كفتينه |
| رحلة علاج ومراحل | ممر بأبواب متتالية أو سلّم بإضاءة بتزيد |
| وقت ومواعيد (الدورة، التبويض) | ساعة/نتيجة كبيرة معمارية، أو ضوء شمس بيتحرك على الحيطة |
| حاجز نفسي (الخوف من العملية) | ستارة أو باب نص مفتوح والضوء طالع منه |

### البرومبت
```
A single cinematic frame that visualizes the idea: "[الفكرة بالإنجليزي، e.g. a woman torn between surgical and non-surgical aesthetics]". A Gulf woman in elegant modest [beige] attire stands centered between [two doorways], [pose: hand on chin, thoughtful, looking toward one side]. LEFT: [world A] lit in cool clinical blue. RIGHT: [world B] lit in warm amber. A dark teal velvet curtain divides the two worlds; a plant in the soft-focus foreground adds depth. Above each doorway a dark teal sign with elegant text: "[عربي]" and "[ENGLISH]". Symmetrical, intentional composition, the color contrast itself tells the story. + بلوك البرومبت الثابت (من غير "No text").
```
- **الكتابة في الصورة:** Nano Banana 2.1 بيكتب عربي وإنجليزي كويس، بس **راجع كل حرف**. لو حرف واحد غلط، ولّد اللافتات فاضية وحط الكلام في AE بـ Thmanyah Sans مع Corner Pin. الطريقة دي كمان أنضف لو الكلام هيتحرك.
- **التحريك:** push-in بطيء ناحية الشخص، وراسها بتلف ببطء ناحية باب، وضوء خفيف بيتنفس في كل أوضة. ما تخليش الناس اللي ورا يتحركوا كتير عشان ما يتشوّهوش.
