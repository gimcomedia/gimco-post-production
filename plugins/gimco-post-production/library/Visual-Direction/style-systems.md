# أنظمة الستايل (visual grammar)

- **الاستخدام:** اختيار ستايل واحد للفيديو حسب وظيفة المحتوى، ووصفتين مجربتين.
- **المكان:** نصي
- **المتطلبات:** مش محتاج
- **البديل Native:** مش محتاج
- **الفهرس:** [INDEX](../INDEX.md)

---

## قواعد البيت (House rules)
المرجع الوحيد لذوق المونتير وقراراته. كل وصفة بتحتفظ بالفروق بتاعتها بس (بدل ما تكرر القاعدة). دي **قيم البداية** مش لوك إجباري لكل فيديو: الاتجاه اللي المونتير بيختاره للمشروع من [direction-menu](direction-menu.md) بيكسب في الإحساس واللون والنص والإيقاع، والثابت بس هو التسليم والأمانة وقواعد العربي.
- **الإحساس:** فاخر، سينمائي، مينيمال. عنصر واحد في اللحظة، ولون أكسنت واحد (من المشهد أو البراند) + محايدات.
- **الجلو، تلات درجات (Deep Glow 2 هو الأساسي حتى لو بيظهر غير مرخص):** همس **0.05–0.10**، أكسنت **0.10–0.20**، وقمة واحدة بس لحد **0.6**. Glow الأساسي بديل لو المشروع اتنقل لجهاز تاني ([plugins-by-need](../Tools-and-Presets/plugins-by-need.md)).
- **الباونس (إلزامي):** قوي وواضح على كل عنصر بيدخل أو بيتغير: طلعة 10–11 فريم، أوفرشوت ~10% من المشوار (104–106% للكروت، 112–120% للعناصر الصغيرة)، وهزتين باينين بديل طوله ~18 فريم؛ الكاميرا والعجلة الدوارة وانزلاق الكت-أوت من غير أوفرشوت ([rhythm-easing-expressions](../After-Effects/rhythm-easing-expressions.md)).
  - **في الاتجاهات الهادية كمان** (إيديتوريال هادي، مينيمال، وثائقي، فاخر، طبي): نفس الباونس على كل عنصر بيدخل. الهدوء بيتعمل من الإيقاع وكمية النص وبطء الكاميرا والمساحة الفاضية، مش من إلغاء الباونس. أي وصفة أو ريفرنس بيقول «من غير موشن» أو «دخول ناعم» يتقري: عناصر أقل، والباونس زي ما هو.
- **العربي المتحرك (القاعدة الواحدة):** الأساس **كلمة كلمة** (لاير لكل كلمة، أو Range Selector Based On: Words)، والـ Ligatures شغالة دايمًا. استثناءين بس: (1) **كتابة بالـ Opacity حرف حرف** (Based On: Characters، أو Source Text حرف حرف) لبار بحث أو كومنت، لأن الحرف بيظهر بشكله الموصول؛ (2) **حرف حرف بحركة** (Position أو Scale أو Blur) في الكود بس، بالتقسيم اللي بيحافظ على الوصل ([arabic-typography](arabic-typography.md) «العربي متحرك كلمة كلمة أو حرف حرف»). في افتر مفيش Animator حرف حرف بحركة على العربي، حتى لو الوصفة أو الريفرنس بيعمله على اللاتيني.
- **وزن الخط:** تقيل وعريض وكبير وواضح دايمًا: أخف وزن مسموح SemiBold (للسطر المساعد)، والكلمة الخاصة Bold أو Black. أي «Light» أو «Thin» أو «نص رفيع» في وصفة أو ريفرنس يتقري SemiBold، والفرق بين المستويين يبقى من الحجم واللون والجلو.
- **الكابشن:** عند الصدر 52–61% من فوق في ريلز المتكلم؛ البدايل بشروطها في [structure-hook-safezone-pacing](../Editorial/structure-hook-safezone-pacing.md).
- **الخط العربي:** Amira Typo للكلمة الخاصة؛ باقي الأدوار من خطوطه المفضلة الأول، والبديل Thmanyah Sans ([arabic-typography](arabic-typography.md)).
- **المزيكا:** اختبار تحت الفويس على **−15 dB** (−20 لتراك عالي) ([sound-design](../Premiere/sound-design.md) «مستويات المزيكا»).
- **الترانزيشن:** عيلة ترانزيشن واحدة في الفيديو ([transition-families-and-prompt-structure](../Generation/transition-families-and-prompt-structure.md)).
- **الإيقاع طبيعي:** مش سريع بالعافية؛ الجدول في [structure-hook-safezone-pacing](../Editorial/structure-hook-safezone-pacing.md) (§6).
- **التسليم:** كومب لكل قسم بـ Dynamic Link، والنهاية (قطع، ساوند، جريد) في بريمير ([whole-reel-in-ae](../After-Effects/whole-reel-in-ae.md)).
- **مفيش حاجة متألفة:** لا أرقام ولا نتايج ولا شهادات ولا قبل/بعد من خيالنا. في الطبي: موافقة مكتوبة لأي قبل/بعد، ومن غير ادّعاء نتيجة ([medical](../Specialized/medical.md)).

## اختيار اللوك لريل متكلم: جدول واحد
المرجع الوحيد للاختيار بين التلات لوكات. الوصفات بتلينك هنا. اللوكات دي ما بتتخلطش في ريل واحد (الكابشن والنص ليهم قواعد مختلفة)، والإيديتوريال والدارك-UI بنفس مسار الكابشن (بريمير ← لاير لكل كلمة).

| | إيديتوريال | ست غامق + UI | سينمائي بي-رول |
|---|---|---|---|
| الوصفة | [recipe-editorial-talking-head](../After-Effects/recipe-editorial-talking-head.md) | [recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md) | [recipe-cinematic-broll-short](../Premiere/recipe-cinematic-broll-short.md) (بريمير بس) |
| الخامة | إضاءة طبيعية ولون واضح في الست | ست غامق ونور ملوّن ورا المتكلم | متكلم + بي-رول (تصوير أو ستوك سينمائي) |
| الكلام | حكاية، رأي، نصيحة | شرح أداة أو خطوات أو أرقام | مشاعر، رحلة، نصيحة تتصوّر |
| النص | رفيع وصغير ومن غير ظل | تقيل وكبير وبظل حاد | Sans + Script بيتحط جوه اللقطة |
| الكلمة الخاصة | لون من المشهد + جلو همسة | لون نور المقطع + لمعة حواف + جلو | كلمة Script (Amira Typo بالعربي) |
| اللي شايل الريل | بي-رول وصفحات ومشاهد بوستر | كروت وموكابات UI | البي-رول نفسه |
| الإيقاع (الجدول في structure-hook §6) | فكرة كل 3–5 ثواني | حدث كل ثانية في الأجزاء الـ hard بس | لقطة كل 0.75–1.5 ثانية، مش أقل من ~ثانية |
| دكتور / عيلة / عيادة | الأنسب للهدوء؛ لو بيحكي قصة | بس لو الست غامق فعلًا والجلو همسة وTeal مطفي (شوف look-by-shooting) | لو القصة محتاجة بي-رول؛ بدون قبل/بعد |

للشغل الطبي قواعد [medical](../Specialized/medical.md) تكسب (Teal مطفي مش نيون، موافقة مكتوبة لأي قبل/بعد). ولو الخامة هي اللي بتحدد: [look-by-shooting-conditions](look-by-shooting-conditions.md).

## 4. Styles (visual grammar to build in AE)

Pick one per video from what the content does, and say why in one line. A style is a decision system, not a quota of effects.

| Style | Look | Best for | Direction |
| --- | --- | --- | --- |
| split-canvas | Product-UI canvas above a continuous presenter window, rounded cards, caption pills | explainer, tutorial | Demonstrate while the speaker explains |
| section-deck | Dark sections, kicker + accent headline, semantic chips, held clause captions | explainer, tutorial, comparison | Make the chapter structure visible |
| kinetic-paper | Heavy poster type, ink frames, staggered reveals | explainer, comparison | Make one statement land |
| calligraphic-receipts | Naskh claims paired with evidence receipts, brush rules, boxless captions | case study, story, opinion | Connect the claim to its proof |
| paper-collage | Taped paper cards, tabs, restrained depth | story, comparison | Show how the pieces connect |
| judgment-board | Two-column verdict board, serif verdict type | comparison, opinion | Compare on fair criteria |
| stepped-editorial | Editorial spreads, offset plates, marker highlights | opinion, case study | Develop a thesis through details |
| liquid-glass | Dark aurora, translucent cards, bright rims, detail lens | explainer, tutorial | Inspect a selected part of a system |
| campaign-tickets | Warm gold/coral perforated tickets | offers, events | Explain the invitation and its conditions (no fake countdown or scarcity) |
| magazine-interview | Navy page, gold rules, clean quotes, speaker ID | doctor interviews, opinion | Preserve the speaker's authority and wording |
| scrapbook-route | Warm paper, taped cards, connected route | patient journey, tutorial | Carry a journey through connected stops |
| grid-glide | Light grey canvas, one ink colour, small lead-in words + one bold hero phrase | explainer with real captures | Words and cards glide in with each clause |
| one-shot | Cream home page, dark/lime worlds, cursor that clicks | software/how-to | A how-to that never cuts |
| editorial-talking-head | Thin sans captions with one glowing special word coloured from the set, B-roll on flat white or paper pages, small poster-like designed scenes, halftone and grain | story, opinion, expert or personal-brand talking head | The speaker leads; design only the value points. Recipe: [recipe-editorial-talking-head](../After-Effects/recipe-editorial-talking-head.md) |
| dark-ui-talking-head | Dark set with one coloured backlight, heavy white captions with one light-swept glowing word in the light's colour, a designed first-frame title with an animated app icon or a small reacting UI card, dark-glass cards and app mock-ups on the chest or full screen | tool, app or platform how-to, steps inside an app, numbers and results | Show every claim as a UI action (type, tap, count, toggle); one focal element at a time. Recipe: [recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md) |

For doctor content, `magazine-interview`, `section-deck` and `split-canvas` are the safest starting points.

Talking-head looks (editorial, dark-UI, cinematic) are not mixed in one video; the choice table is the one above ("اختيار اللوك لريل متكلم").

Section-deck recipe (proven): 8-13 sections for a 36-60 s reel, each one idea of about 2.5-5 s. Arc: hook -> proof -> mechanism or surprise -> framework or numbered list -> payoff -> CTA -> end card. One static caption pill of 4-9 words per clause, held for the clause (no karaoke). Hero set-piece by artifact: number -> rolling counter or ring gauge (always real and animated); process -> rows filling with checks; contrast -> without/with cards; verdict -> stamped badge. Whole-canvas swaps only, the voice carries across. 2-4 animated events per 3 s inside a section; no 5 s window without an event.

Split-canvas recipe (proven): decide layout per sentence: demonstrable claim -> split with its visual above the seam; detailed diagram/number -> takeover; hook, personal line, CTA -> presenter. Frame 0 already moving (no title card, no fade-in). About one spoken phrase = one new element. Caption every word: on the seam in split, low-centre in takeover, chest level on presenter (house default for talking-head: chest at 52-61% from the top, per the editor's decision 2026-11-10). Dress every boundary and vary it.

Arabic type: animate word by word (letter-by-letter only as an opacity typing reveal); no letter-spacing or italic on Arabic; ligatures on; weights SemiBold or heavier. Max 2 fonts, 1 dominant + 1 accent colour + neutrals, text contrast at least 4.5:1, every readable line on screen at least 1.5 s, end card held 3-7 s. Entrances 300-600 ms, transitions 300-800 ms, stagger 60-150 ms, easing never linear.

## كتالوج عائلات الستايل (قصير وطويل) واختيار الستايل من المجال
الجدول اللي فوق لوكّات محددة بتتبني. ده مستوى أعلى: عائلات الستايل الشايعة، وكل عيلة بسماتها. **الستايل بيتحدد قبل جمع الريفرنسات**، لأن الريفرنس بيتدوّر عليه بفلترين: نفس نوع القيمة، ونفس الستايل ([idea-and-scene-plan](../Editorial/idea-and-scene-plan.md): «خطة مشهد من ريفرنسات»).

**الاختيار**
1. العميل عنده ستايل (براند، أو فيديوهات منشورة بشكل ثابت)؟ استخدمه زي ما هو، والريفرنسات تتاخد من فيديوهاته نفسها.
2. مفيش: المجال والموضوع بيحددوا العيلة من الجداول تحت. الستايل لازم يمشي مع الموضوع مش ضده: موضوع حساس (مرض خطير مثلًا) ما يتعملش بـ UI مرح، والأقرب له الصفحة الهادية بباليتة مطفية. وجمهور أكبر سنًا أو أعلى دخلًا ← الأبسط.

**قصير (9:16)**

| العيلة | إمتى | سماتها | عندنا |
|---|---|---|---|
| سينمائي | فيلم قصير، تحفيزي | أغلبه بي-رول ولقطات أفلام، من غير أنيميشن، SFX قوي جدًا، مزيكا حماسية، حكي عاطفي، بسيط جدًا | [cutting-and-selects](../Editorial/cutting-and-selects.md) (البي-رول)، [sound-design](../Premiere/sound-design.md) |
| Minimal | محتوى نضيف شبه خام، القيمة هي البطل، جمهور راقي | من غير أنيميشن، نص أبيض بسيط (Sans + كلمة Script)، Zoom-out وبلور بسيط، بي-رول بسيط | مقاطع الوش في [recipe-editorial-talking-head](../After-Effects/recipe-editorial-talking-head.md)، [timeline-principles](../Premiere/timeline-principles.md) |
| أنيميشن بسيط على صفحة | تعليمي راقي | خلفيات بيضا، خامة ورق، لونين (أبيض + لون)، عنصر واحد في المشهد، مساحة فاضية، Sans + Script، ألوان مطفية للـ 60% | مشاهد الصفحة في recipe-editorial-talking-head (8)، `kinetic-paper` و `grid-glide` |
| 3D بصري | براندات بصرية، محتوى تقيل الإنتاج | حركة كتير، مشاهد وعناصر 3D، ألوان زاهية، خامات كتير، ترانزيشن بحركة كاميرا | [camera-3d](../After-Effects/camera-3d.md)، [recipe-shape-world-hologram](../After-Effects/recipe-shape-world-hologram.md)، [start-end-transitions](../Generation/start-end-transitions.md) |
| متكلم تريندي | ريلز فايرال لمتكلم بيبيع أونلاين | نص منوّر، ألوان وأنيميشن زاهيين، UI متحرك، جرافيك نص على الشاشة، أيقونات ملوّنة | [recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md)، [recipe-glass-ui-over-speaker](../After-Effects/recipe-glass-ui-over-speaker.md)، `liquid-glass`، [caption-and-reel-recipes](../After-Effects/caption-and-reel-recipes.md) |

**طويل (16:9)**

| العيلة | إمتى | سماتها | عندنا |
|---|---|---|---|
| Minimal نضيف | تعليمي كلاسيك أو راقي، القيمة هي البطل | نفس سمات «أنيميشن بسيط على صفحة»: أبيض، ورق، لونين، عنصر واحد، مساحة فاضية | نفس مشاهد الصفحة على كومب عرضي |
| UI Design | بيزنس، تعليمي مسلّي، راقي | أشكال بأركان مدوّرة، واجهات، 3 ألوان، أنيميشن ومشاهد بسيطة بشيبات، شكل موقع | [saveobjects-library](../Tools-and-Presets/saveobjects-library.md)، [vahid-graph-library](../Tools-and-Presets/vahid-graph-library.md)، [figma-to-ae](../After-Effects/figma-to-ae.md)، `split-canvas` |
| بصري عالي (حكي) | حكي متحرك، وثائقي | لقطات مولّدة بالـ AI، ألوان زاهية كتير، مشاهد بتحكي، UI جوه المشاهد | [cinematic-style-block](../Generation/cinematic-style-block.md)، وبموافقة ([generation-approval-brief](../Templates-and-Checklists/generation-approval-brief.md)) |
| Motion Design | تعليمي مودرن، أنيميشن SaaS | شيبات وأيقونات بسيطة، 3 ألوان، مشاهد نضيفة، أنيميشن قليل، إحساس Minimal | [motion-without-speaker](motion-without-speaker.md)، [recipe-clean-apple-style](../After-Effects/recipe-clean-apple-style.md) |

**من المجال للعيلة (نقطة بداية)**

| المجال | العيلة |
|---|---|
| تحفيزي | سينمائي |
| تعليمي راقي | Minimal |
| تعليمي مسلّي | أنيميشن بسيط على صفحة |
| مؤثرين وبراندات بصرية | 3D بصري |
| رواد أعمال بيبيعوا أونلاين | متكلم تريندي |
| تعليمي كلاسيك | Minimal نضيف |
| بيزنس وتعليم | UI Design |
| محتوى بصري ووثائقي | بصري عالي |
| تعليمي مودرن | Motion Design |

- أول خمسة للقصير وآخر أربعة للطويل. والسمات هي اللي بتتنقل بين المقاسين، مش الاسم.
- **السمات هي تشييك الخطة:** بعد ما تسكتش المشهد اسأل: فيه سمات العيلة؟ (صفحة بيضا؟ عنصر واحد؟ لونين؟)
- **النسخة العربي من السينمائي التحفيزي:** أبيض وأسود صريح، وجملة من كلمتين بخط خطاطي متسنترة على فوتيدج بحبيبات أو صور قديمة هاف تون. من غير حركة حرف حرف.
- **على ذوقنا:** الأقرب لنا Minimal، وأنيميشن الصفحة، و UI Design و Motion Design بباليتة متجانسة ([color-system](color-system.md)). العيلات الأعلى صوتًا بتتاخد بتقنياتها وبتتهدّى: «متكلم تريندي» = جلاس وأكسنت واحد ونور لحظة الدخول، بدل ألوان زاهية وأيقونات ملوّنة. «3D بصري» و«بصري عالي» = باليتة مضبوطة وإضاءة سينمائية بدل ألوان زاهية كتير. «سينمائي» = SFX في مكانه مش ضربة على كل كت، ولقطات مرخّصة أو من العميل بدل لقطات أفلام.
- **اقتراح للمجال الجاد عندنا (دكتور وعيادة، استشارات مالية وعقار):** Minimal أو صفحة هادية للقصير، و UI Design أو Minimal نضيف للطويل. القرار للمونتير حسب العميل.

## الثيم الواحد للفيديو (Theme Set)
معظم المونتيرين بيفكروا في كل جملة لوحدها. الثيم معناه إنك تبص على السكريبت كله **قبل** ما تختار التنفيذ، وتحدد اتجاه بصري واحد يربط معظم المشاهد، زي الفيلم: كل مشهد مختلف لكن الجريد والنور والكادر ماشيين في نفس الاتجاه. ده اللي بيخلّي الفيديو يبان «حد فكر فيه كله». المشاهد مش هيعرف يقول ليه هو فاخر، بس هيحس بده.

- **3 مستويات (اختار اللي يناسب):**
  1. **الجرافيكس:** نفس عيلة الكروت والخط والزوايا والظل والألوان في كل المشاهد (شوف graphic-families، 2–3 عائلات). ومعاها **لون أو نور لكل قسم**، زي إن نفس الست ينوّر أحمر في قسم المشاكل وأزرق في قسم الحل (Tint أو Lumetri على Adjustment، شوف color-system).
  2. **خريطة النقاط (اللي بتقول للمشاهد الفيديو فيه كام نقطة):** شكلها جاي من نفس اتجاه الفيديو، مش عنصر غريب اتحط. ونفس «الحاوية» بتتكرر لكل بند، زي قطاع من عجلة بيلف لكل نقطة من 6–7، أو نفس الكارت المرقّم بنفس الحركة.
  3. **استعارة الفكرة الأساسية:** عالم واحد بيشيل الفكرة الرئيسية على كذا مشهد، زي «حفرتين في منجم دهب» بيكمّلوا من أول المثال لحد الدرس، أو «عالمين» (صاحب البيزنس قصاد المونتير) بتقسيم شاشة ثابت.
- **العنصر اللي بيرجع بيتقدّم في الهوك:** في لوك الـ UI على الست الغامق خريطة النقاط (عجلة بنود، ليستة صفوف) بتبان في الهوك نفسه كمعاينة، وبترجع مع كل بند والبند بينوّر، وبين الرجعات أنيميشنز أخف والمتكلم باين. [recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md) (2.1).
- **على معظم الفيديو مش كله:** لو بند أو اتنين بيتشرحوا أحسن بطريقة تانية، سيبهم. ولو الفيديو مالوش اتجاه طبيعي، **ما تجبرش ثيم**، لأن الفيديو من غير ثيم ممكن يبقى عالي الجودة لو كل مشهد معمول كويس لوحده.
- **في شغلنا:** الثيم الأقرب للبراند غالبًا جاي من المنتج أو الخدمة نفسها، زي خامة المنتج أو لونه أو شكل العبوة، أو أداة المهنة (أداة الدكتور، ورقة العقد). استخرجه من الـbrief، واكتبه في أول سطر في EDITORIAL_PLAN قبل جدول المشاهد.

## مستوى الجودة: صعب النسخ
أوضح تعريف للجودة إنها **قد إيه صعب حد يعمل زيها**. لو أي حد عنده تطبيق مونتاج على الموبايل يعملها في 10 دقايق، تبقى شغل عادي. الجودة طيف مش نعم أو لا:

| سهل (رخيص) | متوسط | صعب (فاخر) |
|---|---|---|
| بريستات افتراضية وتمبليت زي ما هو | ستوك وأصول كويسة | عناصر متصممة مخصوص للفيديو ده، وحركة صعب تتنسخ، وستايل خاص |

- **السؤال قبل التسليم:** «أنا عملته نضيف، ولا عملته بتاعي؟» السهل بيتنسي.
- **الستايل اللي بيتنسخ كتير بيبطّل يبان فاخر:** أي ستايل كابشن أو ترانزيشن أول ما يبقى ليه شروحات والكل يستخدمه، بيتحول لتمبليت. وده بيسري على البريستات التريند اللي عندنا: خدها نقطة بداية وغيّر فيها (الخط، الإيقاع، الباليتة)، ما تسلّمهاش زي ما هي. والستاندرد بيتحرك: الحاجة اللي كانت فاخرة من 3 سنين بقت متوسطة النهارده، ونفس الفكرة بتصميم وتفاصيل أحسن بتطلع أعلى بكتير.
- **كل عنصر = حوالي 10 قرارات:**
  - **الكابشن:** الخط، والحجم، والوزن، والمسافة بين الحروف (في الإنجليزي بس، العربي ممنوع)، والمسافة بين السطور، واللون، والظل، والجلو.
  - **النوتيفيكيشن أو الكارت:** لون الخلفية، والخط، والحجم، والصورة، والمسافات بين العناصر، والبوردر، والـCorner radius.
  - المونتير العادي بيشوف «عنصر واحد». اعمل زوم على كل عنصر وراجع كل قرار جواه.
- **الفيديو = تصميم متحرك:** كل فريم صورة وكومبوزيشن، فعينك في التصميم هي عينك في المونتاج. درّبها على البراندات الفاخرة نفسها (بساطتها، وتايبوجرافيها، ومسافاتها، وواجهات الألعاب والمنيوهات)، مش على الريلز بس. حلّل، وفكّك، وكرّر.
- **الجودة هي آخر طبقة:** فيديو شكله تحفة من غير قيمة واضحة بيفشل. الترتيب: الفهم، وبعده الجذب، وبعدهم التلميع.
- **مع ذوقنا:** الأمثلة الشائعة للستايل ده (كابشن Bold كابيتال بجلو نيون بنفسجي/أحمر) **مش** هي المطلوبة. خد المبدأ (صعوبة النسخ، والاتساق، والتفاصيل) وطبّقه بالفخامة الهادية: مساحة فاضية، وأكسنت واحد، ونور لحظة الدخول بس.
