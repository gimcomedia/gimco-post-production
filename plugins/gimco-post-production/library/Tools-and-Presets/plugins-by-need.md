# البلاجنز حسب الاحتياج

- **الاستخدام:** اختيار بلاجن لتوهج، ظل، لمعة، جلاس، مورف، كاروسيل، هزة، بارتيكلز...
- **المكان:** متسطبة على الجهاز
- **المتطلبات:** البلاجن
- **البديل Native:** قسم «الموجود في AE من غير بلاجن» جوه الملف
- **الفهرس:** [INDEX](../INDEX.md)

---

## البلاجنز حسب الحاجة (اللي متسطب فعلًا، نوفمبر 2026)
القاعدة: اختار بالحاجة، مش بالاسم. كل حاجة هنا ليها نقطة بداية للقيم. ابدأ منها وظبّط بعينك على الكادر.

### توهج (Glow)
- **الأساسي: Deep Glow 2.** جلو فيزيائي (بيقل مع مربع المسافة)، بيشتغل على الـ GPU.
  - **Radius** (0–2000): حجم الهالة. نص/أيقونة 150–300، إضاءة خلفية 500–1000.
  - **Exposure:** قوة الجلو. بيتطبق بعد الـ Threshold، يعني رفعه مش بيزوّد المساحة اللي بتنوّر. مستويات بيتنا (قرار المونتير): همس 0.05–0.10، أكسنت 0.10–0.20، وقمة واحدة بس لحد 0.6 (قيمة 2 اللي اتشافت في الدرس للحظة الذروة بس، ومش مستوى شغل). أي حاجة فوق 0.2 لازم تبقى لحظة الذروة الواحدة.
  - **Threshold:** أقل سطوع يدخل في الجلو. ارفعه (9–50%) عشان الجلو يمسك الأجزاء المنوّرة بس، مش الشكل كله.
  - **Aspect Ratio:** 1 دايرة، 2 أفقي بس (ستريك)، 0 رأسي بس.
  - **Tint** (Standard / Overlay / Multicolor): لوّن الجلو بلون البراند. Overlay أقوى في التشبّع.
  - **Chromatic Aberration** جوه الإفكت: حواف ملونة على الجلو نفسه، أنضف من إنك تحطها بعد الإفكت.
  - **جديد في 2:** Tonemapping سينمائي (الهايلايت مايتحرقش أبيض)، و RGB Radius Multipliers (كل لون بنصف قطر مختلف = هالة قوس قزح)، و Lens Dirt (بقع العدسة بتنوّر مع الجلو)، و Image Based Glow (الجلو ياخد ألوانه من صورة).
  - **Dither:** شغّله لو ظهر Banding في الجلو الكبير على خلفية غامقة.
  - **Blend:** Screen إلا لو شغال Linear.
  - **مهم:** AE بيبلوك نسخ Deep Glow القديمة بعد كل أبديت. لو اختفى من مشروع، حدّث البلاجن.
- **بدايل عندنا:** S_Glow (Sapphire)، و Universe Glow و Glo Fi II و Chromatic Glow، و Optical Glow (VFX)، و Starglow (نجوم بأشعة)، و Shine (أشعة طالعة من نقطة).
- **قاعدة:** الجلو يدخل مع العنصر ويهدى، مايفضلش ثابت عالي طول المشهد.
- **هالة ثابتة وواطية لكلمة الكابشن الخاصة:** Radius 500، Exposure 0.05–0.10. على البارات والشيبات: Radius 1000 و Exposure 0.05.
- **الجلو على الجزء الفاتح من جريديانت بس (Input > Threshold Mode):** **Chrominance** بـ Threshold حوالي 50% و Threshold Smooth حوالي 39 لجريديانت لونينه قريبين. و **Luminance** بـ Threshold حوالي 66% و Exposure أعلى (0.39) لجريديانت بيروح لأبيض في الطرف: الجلو بيمسك الحافة البيضا بس. الوصفة في [recipe-editorial-talking-head](../After-Effects/recipe-editorial-talking-head.md) (4.3).
- **قيم لوك الكابشن التقيل على الست الغامق:** الكلمة الخاصة Radius 500 و Exposure 0.20، وتايتل الهوك 0.10، والنص الأبيض من غير جلو. الديفولت (Exposure 1.0) بيحرق النص. و Unmult متعلّم لما الكومب شفاف وراجع بريمير. والجلو على أيقونة PNG أو على لاير عليه Track Matte بيتقص: حطه على Adjustment Layer أو على بري-كومب ([general-principles](../After-Effects/general-principles.md)). الوصفة: [recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md).

### ظل وعمق وإضاءة الشكل (Shadow Studio 3)
بيعمل الظل من الـ Alpha بتاع اللاير، يعني ينفع على نص وشيبات و PNG من غير 3D.
- **Light Type:** Directional (شمس، ظل بنفس الاتجاه) أو Point (لمبة، الظل بيطلع من نقطة Light Origin).
- **Renderer:** Raytraced (ناعم وواقعي، أتقل) أو Standard (أسرع).
- **أهم القيم:** Light Direction (135° = نور من فوق شمال وظل تحت يمين)، و Shadow Length، و Light Softness، و Opacity Start → End (الظل بيبهت كل ما يبعد)، و Fill Mode (Solid أو Gradient)، و Inner (ظل جوه الشكل).
- **وصفات من بريستاته:**
  - **Drop نضيف:** Standard، Length 40، Softness 0، Opacity ثابت 100، لون رمادي غامق.
  - **Long Shadow:** Directional، Length 1000، Softness 0، Opacity 100 → 100.
  - **Ambient Occlusion:** Point، Light Radius 9999، Length 1000، Softness 100، Opacity 100 → 0، Quality Extreme = تغميق ناعم حوالين الشكل.
  - **Inner Lighting (شكل بارز):** Directional 135°، Length 96، Inner Blend Soft Light، Opacity 65 → 0.
  - **Fake 3D:** Directional، Raytraced، Length 300، Opacity 50 → 0 = سُمك للشكل.
  - **Pearl / Illuminate (نور مش ظل):** Point، Gradient Fill، Blend Linear Dodge، وفي Pearl شوية Noise.
- **في شغلنا:** Opacity 25–40% للكابشن على خلفية فاتحة. Length 106–250 وDirection 135 للكروت. على كومب السيلويت والجلاس بيدّي فصل عن الخلفية.

### لمعة وبيفل على الحروف (LightSweepPro)
لاير واحد بيعمل بيفل حقيقي + لمعة بتعدّي + نويز سطح، من غير بري-كومب.
- **السويب:** Center و Direction (75 افتراضي) و Width و Intensity و Softness. حرّك Center أو Light Angle بكيز، أو سيبه بـ Spin Speed و Angle Jitter.
- **السطح:** Surface Source = Alpha للنص والشيبات، و Luminance للصور. Surface Depth = عمق البيفل، و Bevel Width و Bevel Curve (سالب = حافة حادة معدنية، موجب = منفوخ)، و Bevel Profile (Round / Flat / Sharp / Mesa).
- **Edge Width/Intensity:** خط النور على حافة الحرف. **CA Amount:** زغللة ألوان.
- **البريستات (نقطة بداية):**

| البريست | Depth | Bevel Width / Curve | Edge Intensity | CA | Profile | استخدامه |
| --- | --- | --- | --- | --- | --- | --- |
| Basic | 100 | 20 / 30 | 100 | 2 | Round | لمعة عامة |
| Chrome | 180 | 25 / −20 | 150 | 4 | Flat | كروم لامع |
| Metal | 200 | 15 / −50 | 200 | 1 | Sharp | معدن حاد (أيقونات 3D) |
| Prism | 120 | 20 / 20 | 120 | 15 | Round | لمعة بألوان |
| Halation | 80 | 30 / 60 | 80 | 8 | Mesa | توهج دافي |
| Flat | 0 | 1 / 0 | 25 | 0 | Flat | سويب من غير بيفل |
| Studio (Photo) | 108 | 5 / −70 | 200 | 0 | Round | على صور (Luminance) |

- **البديل المجاني:** CC Light Sweep (Cutout للمعة جوه الحرف بس) + Bevel Alpha.
- **CC Light Sweep بـ Light Reception: Add على كلمة كابشن** بيدّي لمعة حواف وشريط نور في إفكت واحد، ثابت أو كلمعة دخول بإفكتين متعاكسين: القيم في [recipe-editorial-talking-head](../After-Effects/recipe-editorial-talking-head.md) (4.3، نسخة «د») و [recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md) (4.5). LightSweepPro (بريست Flat) ممكن يبدّلهم؛ ما اتجربش على اللوك ده.

### جلاس
- **AE Glass** (SphereLab)، و **MB Liquid Glass**، وسكريبت **LiquidGlass** (gd_LiquidGlass). قيم الجلاس الحقيقي فوق المتكلم في قسمها تحت (Refraction / Glass Body / Specular + Noise 2%).
- **بدون بلاجن:** الجلاس اليدوي (CC Glass + Displacement + Transform Scale 115).
- **Glassary:** كان مذكور إنه عندنا، بس مش لاقيينه في فولدرات البلاجنز. لحد ما يتأكد، استخدم واحد من التلاتة اللي فوق.

### كتابة وظهور وخطوط
- **AutoFill 2:** بيملا حدود الشكل كأنه مية بتجري وبتتفادى الشفاف. حدد نقطة البداية (Growth Origin) وشغّل. بيشتغل على أي حاجة ليها Alpha (شيب، نص، PNG)، مش JPG. فيه Speed Map للتحكم في السرعة، و Style Builder لطبقات ملا كتير فوق بعض. مثالي للخطوط والرسومات والخرايط والأيقونات الخطية.
- **CenterLine:** بيطلّع خط واحد من نص الرسمة (Skeleton) من أي صورة أو نص. اضغط Create Shape Layer وبعدين Trim Paths = كتابة بخط اليد من لوجو أو توقيع أو سكيتش.
- **Highlighter 2.0 (متسطب):** بوكس متظبط على أي كلمة أو صورة + كيرسر شبه تحديد الموبايل، وأيقونات مربوطة بالأركان (Choose Box)، ويتصدّر موجرت بضغطة (Shift + Control). الشرح الكامل والطريقة: [highlighter](highlighter.md). **عندك نسختين في ScriptUI Panels، شيل واحدة.**
- **Trapcode 3D Stroke:** ستروك 3D على ماسك بيتحرك مع الكاميرا.

### ارتداد ونص بضغطة (BOUNCr، Presetify)
- **BOUNCr 1.1 (بانل):** حدد الكيفريمين (أو اللاير)، اختار Property = Selected (أو Position / Scale / Rotation)، و Expression = Overshoot+، واضغط Bounce It. بيحط سودو إفكت «BOUNCr overSHOOT+»: Amplitude 50، Frequency 2، Decay 4، Floor (للنطة اللي ماتنزلش تحت الأرض). نفس القيم اللي في كروت المنتج و VOLT.
  - **إمتى:** نص أو كارت عليه كيفريمات جاهزة وعايز رجّة بسرعة. لدخول الأيقونات والتيتلز: بريستات محمود أولًا (icon-bounce-presets).
  - **القاعدة:** الارتداد بيتحسب من سرعة آخر كي، فقرّب الكيفريمين من بعض وإلا الرجّة مش هتبان.
  - **Native:** إكسبريشن Inertia/Overshoot في rhythm-easing-expressions بنفس الأرقام (amp 50، freq 2، decay 4 كبداية).
- **Presetify (بانل أزرار):** بيبني Text Animator بـ Range Selector (Offset متكيفرم) بضغطة على لاير النص: زرار 1-1 = كلمة كلمة، وأزرار C (حرف حرف) و W (كلمة كلمة) باتجاهات دخول مختلفة. بعدها U وقرّب أو بعّد الكيين عشان السرعة.
  - **إمتى:** السطر الصغير اللي فوق أو تحت الكلمة الضخمة، وأي نص ثانوي محتاج دخول سريع من غير ما تبني أنيميتور.
  - **Native:** Animate → Scale/Position/Opacity، و Range Selector Offset من 0 لـ 100 (Based On: Characters أو Words)، أو إكسبريشن النطّة في trend-2026-presets.

### جريديانت متحرك بعمق على النص أو الشيب (Cosmic)
- **Cosmic (Loophouse، AE + Premiere):** إفكت واحد على لاير النص أو الشيب بيدّيه جريديانت 5 ألوان بيتحرك، وبعمق كأنه منفوخ، وتوهج وجرين وفوكس في نفس الإفكت. **لسه مش متأكدين إنه متسطب على الجهاز.**
  - **إمتى:** كلمة ضخمة أو لوجو أو رقم محتاج لون حي بيتحرك (هوك، كشف براند، تايتل كارت)، أو خلفية جريديانت متحركة لو اتحط على Solid. وفي بريمير على الكابشن نفسه بنفس الكنترولز.
  - **Palette:** Colors = باليتات جاهزة (Deep Space، Retro Pop، Electric، Sunset…) أو Color 1–5 بلون البراند. Angle اتجاه الجريديانت، Cycles عدد تكرار الألوان (1 = ناعم، 2.5+ = مخطط)، Offset نقطة البداية. **Phase هو اللي بيحرّك** (كيفريمين أو إكسبريشن `time*30`). Saturation / Brightness.
  - **Depth:** **Bulge** = العمق (0 = جريديانت فلات، ~20–25% بداية كويسة)، و Angle و Contrast و Rounding للشكل، و Turbulence للعيوب الطبيعية، و Softness (~40).
  - **Look:** Glow (Radius ~330، Intensity ~160%، Falloff 20%، Threshold 0)، Grain (Amount ~20%، Animate)، Optical Diffusion (Blur ~50، Center، Focus = نص قطر الدايرة اللي بتفضل حادة، Feather لنعومة حرفها).
  - **حيلة سينمائية:** اربط Optical Diffusion › Center بـ Null (Pick Whip) وحرّك النل على مسار، فالجزء الحاد بيمشي على الكلمة.
  - **على ذوقنا:** باليتة البراند مش الباليتات النيون، والـ Glow والجرين أقل من الافتراضي، والـ Phase بطيء. الهدف لون فاخر بيتنفس مش نيون.
  - **Native:** 4-Color Gradient أو Gradient Ramp متحرك + Bevel Alpha أو CC Glass خفيف للعمق + Glow + Noise، و Camera Lens Blur بماسك دايري للفوكس.

### مورف وتحويل شكل لشكل
- **Super Morphings:** وصفته في قسمها تحت (SM_Transform، والكروت في بري-كومب بنفس الـ Anchor).
- **SDFlow و Morph Studio:** شرحهم كامل في قسم «المورفينج» تحت.

### طي وأسطح 3D
- **Foldspace:** أسطح Bezier 3D منحنية جوه إفكت واحد. كل سطح فيه 16 Control Point بتتحرك في 3D، وأي لاير في الكومب ينفع يبقى Texture على أي وش فيه. أقوى من FoldCraft لما الطي محتاج تحكم حر (أكتر من طية، لف، شاشة منحنية)، بس أتقل في الإعداد.
  - **امتى في الريلز والإعلانات:**
    - كارت أو منيو أو فلاير بيتفتح طية طية: أسطح جنب بعض، ونقطها مربوطة بـ Nulls.
    - Page Flip بين مشهدين: وش السطح المشهد الأولاني، وضهره التاني.
    - بوستر أو ورقة أو ريبون بيتلف أو بيتفرد، أو اسم البراند على شريط ملفوف: بالـ Roll.
    - شاشة موبايل أو UI منحنية في 3D، والفيديو أو الكارت هو الـ Texture.
    - علبة منتج (Cube) من 6 أسطح فيها Squash & Stretch: إكسبريشن على Position الـ Nulls.
  - **الإعداد:**
    1. Solid بحجم الكومب، وعليه Effect > Foldspace > Foldspace. إفكت واحد بيرندر كل الأسطح في سين واحد.
    2. اعمل Camera عشان تشوف إن اللاير بقى سطح 3D.
    3. الـ UI والـ Gizmos بيظهروا بس لما اسم Foldspace يبقى متعلّم في Effect Controls. لو مش ظاهر، اضغط على اسم الإفكت وبعدين على أي سطح.
    4. Surfaces > Create Surface **Add...** (فيه كمان Duplicate و Delete). حط المقاس في Size X / Size Y.
    5. Material: اختار **Plane(s)** الأول (All / Front and Back / Sides / أي وش من الستة لوحده). بعدين Source Type = Layer، واضغط Select واختار البري-كومب.
  - **الكنترولز ونقط البداية:**
    - **Interaction Mode:** Points / Lines (بتختار كل نقط الخط) / Objects (السطح كله). **Gizmo:** Position / Rotation / Scale. **Gizmo Space:** Local (بيلف مع السطح) أو Global.
    - **اختيار النقط:** Shift+Click تزوّد، Ctrl+Click تشيل، Ctrl+Drag تحديد بالبوكس، Ctrl+Shift+Drag تزوّد بالبوكس (Cmd على الماك).
    - **Surfaces** (Size / Thickness / Divisions / Origin / Position / Rotation / Scale): **بتأثر على آخر سطح اتعلّم بس.** Thickness = 0 افتراضي. لكارت أو ورقة تخينة جرّب 20–40.
    - **Material:** Image Size = **Fit** عشان الصورة ماتتمطّش (الافتراضي Fill بيمطّ). Image Border = Repeat. Opacity / Diffuse / Specular = 100%، و Shininess = 5 افتراضي. قلّل Specular لورق مطفي.
    - **Roll:** Angle / Tilt / Radius / **Radius Expand Per Turn**. خلّيه **= Thickness** عشان الحلزون يطلع مظبوط. لو أكبر، هيبقى فيه فراغ بين اللفات.
    - **Render Settings:** Anti-aliasing = Supersampling (أنضف وأتقل)، أو MSAA لو الرام قليلة. **Samples = 4x** أحسن توازن. **Use Composition Space** = On عشان تحريك الـ Solid مايحرّكش السين، واللاير يبقى شباك بس.
  - **التحريك (الأهم):**
    - علّم كل النقط (Ctrl+Drag)، وبعدين Control Points > Attach to Layer(s) > **Create Parent**. كل نقطة هيبقى ليها Null، وبتحرّك وتعمل كي فريم على الـ Nulls مش على الإفكت. فيه كمان Time Offset (s) في نفس الجروب.
    - ينفع تربط السطح كله بلاير بنفس الطريقة. بس **لو النقط مربوطة، ربط النقط بيكسب** وتحريك Null السطح مش هيعمل حاجة.
    - باراميترات الـ Roll مالهاش ستوب ووتش، لأنها بتتغير لما تبدّل بين الأسطح. اضغط **Create Control Layer** هيطلع Null فيه Angle / Tilt / Radius / Radius Expand Per Turn، وده اللي تعمل عليه كي فريم. لكل سطح Null لوحده. **Unlink** بيرجّع التحكم للـ UI.
  - **كاميرا ونور:** بيستخدم كاميرا ونور الكومب أوتوماتيك (Ambient + Parallel كفاية كبداية). لو شلت الصح من جروب Camera / Lights، هتشتغل بكاميرا ونور جوه الإفكت.
  - **أداء:** بيرندر على الـ GPU (Vulkan / Metal) وبيدعم 32-bit و Multi-Frame Rendering. Supersampling هو أتقل حاجة فيه. من 1.2.0 فيه Render Passes (Depth / Normals / UV).
  - **Native لو مش موجود:** CC Page Turn (قلب صفحة)، و CC Cylinder (لف)، و CC Bend It (انحناء). الكارت اللي بيتفتح: كل جزء في بري-كومب 3D لوحده، الـ Anchor على خط الطي، و Rotation Y بالـ Parent على الجزء اللي قبله.
  - **متسطب (قرار المونتير):** Foldspace عند المونتير. صفحة المنتج بتكتب دعم لحد AE 2026 وهو شغال على 2027: اتأكد من الإصدار لو ما حمّلش. الوصفات بقيمها (لافتة بتتفرد، ريبون، ورقة بتتقشّر، ظل 1.4 وShadow Catcher، Time Offset): [foldspace](foldspace.md).
- **FoldCraft:** طي ورق (Paper Fold) لنص أو صورة أو فيديو بالاتجاه والتوقيت. ينفع ترانزيشن أو ظهور كارت.
- **مجانًا:** CC Cylinder (Fold Angle) لطي بسيط.

### ترتيب دايري وكاروسيل (Circle Rig Pro)
بيوزّع اللايرز على دايرة أو حلزون (2D أو 3D)، وفيه Effector و Wiggle بيلف و Time Delay. محتاج Expressions Engine = JavaScript. ينفع لحلقة أيقونات الخدمات (مكان الـ Orbit اليدوي)، أو كاروسيل صور، أو Radial Array.

### هزّة وضربة
- **S_Shake (Sapphire):** Style = Normal (هزة مستمرة) أو Twitchy (سكون وبعده دفعات سريعة، و Stillness افتراضي 0.7) أو Jumpy (نطات). Amplitude 1 و Frequency 8 افتراضي. فيه X/Y/Z/Tilt منفصلين (Z = زوم مع الهزة). Wrap = Reflect عشان الأطراف ماتبانش. Motion Blur شغّال و Mo Blur Length 1. Red/Green/Blue Amplitude مختلفين = فصل ألوان مع الهزة.
- **الضربة عندنا:** 3–6 فريم بس على الكلمة المهمة، مش هزة طول المشهد.
- **بدايل:** Universe Camera Shake Pro، و BCC Jitter، و Turbulent Impact من باك BLADE.
- **Twitch مش عندنا،** والتلاتة دول بيغطّوه.

### ترانزيشنز جاهزة
- **Sapphire:** S_WipePixelate (بكسل)، و S_Swish3D و S_SwishPan (ويب)، و S_FilmBurnTransition، و S_DissolveGlow و S_DissolveLensFlare (فلاش)، و S_MochaWhip (يعزل الشخص ويرميه للكادر الجاي).
- **Universe:** Swish Pan Premium، و Glitch / VHS، و Exposure Blur، و Shape Wipe، و Dolly Fade، و Stretch.
- **BCC:** Ripple Dissolve (موجة كشف)، و Crash Zoom، و Lens Flare Dissolve، و Light Leaks Dissolve، و Blur Dissolve.
  - **Ripple Dissolve (مفضّل، يتشاور عليه أول لما الترانزيشن يكون هادي/ناعم):** المشهد الجديد بيظهر كأنه موجة مية بتتمد من نقطة.
    - **إمتى:** ذكرى أو فلاش باك أو حلم، "تخيّل لو..."، انتقال هادي بين قسمين، كشف منتج أو لوجو من نقطة، أو لحظة لمس/ضغطة على حاجة (الـ Center على نقطة اللمس).
    - **التطبيق:** في بريمير كترانزيشن بين كليبين. في افتر كإفكت على اللير اللي فوق واختار التانية في Layer to Reveal.
    - **أهم الكنترولز:** Center (مصدر الموجة، حطه على حاجة ليها معنى: الإيد، المنتج، العين)، و Height (قوة الموجة، خليها هادية عشان تفضل فاخرة)، و Wave Width و Speed (أعرض وأبطأ = أنعم)، و Animation: Auto أو Percent Done لو عايز تتحكم بالكيفريمات وتعمل إيز. وجروب Light بيدّي لمعة على قمم الموجة، فقلله أو اقفله لو الكادر نضيف.
    - **المدة:** حوالي 15–25 فريم كبداية، وأطول شوية لو المعنى ذكرى أو حلم.
    - **Native بديل:** Wave Warp أو CC Ripple Pulse على كومب الانتقال + Linear/Radial Wipe بـ Feather، أو Displacement Map من دواير بتتمد.
- **Fathy Transition (Seamless left/right):** Motion Tile (Output 500، Mirror Edges) + Transform بيزحلق مع Shutter Angle 200 = زحلقة سلسة من غير حواف. ده نفس منطق الـ Seamless اليدوي.
- **Filmit Transitions + Filmit FX:** من بانل Filmit Studio.
- **قاعدة:** ترانزيشن واحد عامل لكل قسم، مش مجموعة ستايلات في نفس الريل.

### إضاءة على الفوتيدج والعمق (Red Giant 2027)
- **Scene Light (جديد):** نور 3D على فيديو 2D. بيعمل Depth و Normal بالـ AI على جهازك، والنور بيضرب الجنب اللي قصاده بس.
  - طبّقه على اللاير، وظبط My Footage Is = Video، واضغط Place Point Light أو Spot Light، وبعدين اضغط في الكومب.
  - Highlight Rolloff، و Falloff، و Radius، و Depth Range (Far أعلى = النور يوصل للخلفية)، و Depth Isolation Curve، و Normal Influence (0 = حسب العمق بس).
  - Depth Quality: اشتغل بـ DA2 Medium، وارندر بـ VDA (أثبت بس أبطأ).
  - **مهم:** اقفل Depth Lines قبل الريندر، وغلط في My Footage Is بيحرق الصورة.
  - **في شغلنا:** نور لون البراند على وش الدكتور، أو Rim من ورا وقت الكلمة المهمة.
- **Depth Generator:** Depth Map حي من الفيديو (أبيض قريب، أسود بعيد). استخدمه مع Bokeh لفوكس بالعمق، ومع Colorista للتلوين بالعمق، ومع Particular و Form.
- **Real Lens Flares:** فلير واقعي بالـ Designer. أنضف من Lens Flare الأصلي، وينفع مع Maxon Noise كبقع على العدسة.

### بارتيكلز (Trapcode)
- **Particular:** غبار ذهبي خفيف ورا الكلام، أو شرار، أو تفتيت كلمة (Emitter = Layer أو Text/Mask). ابدأ من الـ Designer ببريست وقلّل الكمية. في ستايلنا البارتيكلز همسة مش عاصفة.
- **Form:** شبكة نقط أو خطوط بتتموج (خلفيات تقنية، DNA، داتا).
- **Mir / Tao / Geo:** أسطح وأشكال 3D إجرائية، للخلفيات المجردة.

### موشن بلر
- **RSMB Pro 6.4.5:** موشن بلر على فوتيدج أو بري-كومب ماعليهوش بلر أصلي (زوم سريع، Whip، سكرين ريكورد). ابدأ بـ Blur Amount 0.5.
- **شيبات افتر:** Motion Blur الأصلي (Shutter 180، و360 للويب) أخف وأدق.

### ألوان وجلد ونضافة
- **Magic Bullet:** Looks (لوك كامل)، و Colorista V (تصحيح + عجلات)، و Cosmo II (تنعيم الجلد)، و Denoiser III، و Film و Renoiser (جرين فيلم).
- **Portraiture 5:** تنعيم جلد قوي، ولقطات الدكتور الكلوز. خليه خفيف عشان الوش مايبقاش بلاستيك.
- **Mercalli 6:** تثبيت لقطات الموبايل والهاند هيلد.
- **CineDream:** Base Correction + Final Grading.
- **Blace / Corridor Key:** كي AI للجرين سكرين.

### Animation Composer 4 (Mister Horse)
(متسطب بقرار المونتير 2026-11-10: اتأكد إن إصداره 3.8.7 أو أحدث؛ رقم «4» في العنوان من تسجيل الدرس مش مؤكد على جهازه.)
بريستات دخول وخروج (Transition In/Out) وترانزيشنز بالسحب. بيتحدث من Mister Horse Product Manager، والنسخ القديمة بتوقف عن الشغل لحد ما تتحدث.

### من Figma لافتر (Overlord، AEUX، Copy Pasta)
- **Overlord (مدفوع، الأشهر):** بيبعت فريم أو جروب من Figma لافتر كلايرز (شيبات Vector قابلة للتعديل، ونص، وصور). محتاج البلاجن في Figma + الإكستنشن في افتر + تطبيق Overlord مفتوح. البانل في افتر فيه Precomp / Decomp / Toggle / Delete للجروبات. الوصفة في [figma-to-ae](../After-Effects/figma-to-ae.md).
- **AEUX (مجاني):** بديل Overlord بنفس الفكرة (Figma ← لايرز في افتر).
- **Copy Pasta (بانل):** Copy/Paste لصورة من الكليبورد لافتر مباشرة. مع Copy as PNG في Figma للجرافيك الثابت.
- **Native:** Copy as PNG من Figma ← Import في افتر، أو بناء الجرافيك بـ Shape Layers.

### لوحة إلهام وتخطيط ولقطة فريم (Figma، Pinterest، Behance، Snipping Tool)
مش بلاجنز، بس جمع الريفرنسات وتخطيط المشاهد واقفين عليها ([reference-analysis](../Editorial/reference-analysis.md): «بنك الإلهام»). الحالة في [LOCATIONS](LOCATIONS.md).
- **أدوّر بكلمة:** Pinterest (بحث بالكلمات، و See more like this، وسلسلة البينز المرتبطة) و Behance (بورتفوليوهات أنيميترز ومصممين 3D).
- **أحفظ بسرعة:** Collection في إنستجرام، وفولدر Bookmarks في X، وبورد في Pinterest.
- **ألقط فريم:** على Windows: Win+Shift+S (Snipping Tool) لأي حاجة على الشاشة. فيديو شغال في Chrome: كليك يمين على الفيديو > Copy video frame. صورة من Pinterest: Copy image مش Copy image address (العنوان بيلصق لينك مش صورة).
- **أجمّع وأخطط:** Figma (المجاني كفاية) أو أي لوحة حرة. الحركات العملية في [figma-to-ae](../After-Effects/figma-to-ae.md) («Figma كلوحة إلهام وتخطيط»).
- **Native لو مفيش:** فولدر صور على الجهاز متقسم بالستايل والعميل، والاسكتش ورقة وقلم متصورة جنب السكريبت.

### فك البري-كومبات وأزرار السرعة (Un-PreCompose، بانل أزرار)
- **Un-PreCompose (بلاجن مجاني بسعر اختياري، متسطب، تحديث المونتير 2026-11-11):** بيطلّع لايرات كل البري-كومبات المحددة للكومب الرئيسي مرة واحدة (كابشن بريمير Upgrade Caption to Graphic لما بيتنقل لافتر). التسطيب: الملف في فولدر Plug-ins بتاع افتر وإعادة تشغيل. صفحته على aescripts بسعر مكتوب وخانة «اختار سعرك» (ينفع صفر).
  - **الطريقة الأساسية والروتين الكامل (دايالوج، رص، Anchor، Shy):** [whole-reel-in-ae](../After-Effects/whole-reel-in-ae.md) («كابشن جاي من بريمير كلمة كلمة»). Native: نسخ لاير النص يدوي، أو Un-precompose في Motion Tools Pro ([rhythm-easing-expressions](../After-Effects/rhythm-easing-expressions.md)).
- **بانل أزرار سريعة (EZ Tools في المصدر):** أزرار لإنشاء Solid و Shape و Null و Adjustment Layer، و Easy Ease، ونقل اللاير ±5 و10 و15 فريم، وإفكتات بضغطة (Fill، Tint، Blur، Glow، Ramp، Curves). ظاهر في الشغل ومش مشروح، و**غير متحقق عندنا**. اللي بيغطيه عندنا: Motion Tools Pro و Polite After Pro.
  - فيه كمان شبكة 3×3 لنقل الـ Anchor (اتستخدمت لتوسيط أنكور لايرات الكابشن بعد الفك)، وأزرار Duplicate و Split و Pre-compose. ظهرت صفحة تنزيله عند AEJuice كبانل مجاني، والمصدر نفسه مش متأكد من صاحبه. Native لتوسيط الأنكور: Ctrl+Alt+Home، أو شبكة الأنكور في Motion Tools Pro.

### تكستشرز وأصول صفحة (هاف تون، ورق، سحاب PNG)
مش بلاجنز، بس اللوك الإيديتوريال ([recipe-editorial-talking-head](../After-Effects/recipe-editorial-talking-head.md)) واقف عليها. الحالة والمكان في [LOCATIONS](LOCATIONS.md).
- **هاف تون (نقط، أو خطوط مايلة):** صورة تكستشر كبيرة (2500px وأكتر) بتتحط Multiply بـ Opacity من 5% لـ 15%، وعليها ماسك بيضاوي Inverted بـ Feather كبير، فتبان على أطراف الكادر بس. النقط فوق اللقطات، والخطوط المايلة على الصفحات البيضا وفوق فوتيدج البوستر. شبكة الخطوط المتقاطعة مش المطلوبة.
- **ورق خشن وكرتون:** Multiply بـ Opacity 30–35%، و Scale حوالي 40% عشان الحبيبات تبان.
- **سحاب PNG:** لازم ألفا حقيقي (مش JPEG أو WebP متسمّي PNG) وحواف ناعمة مش كليب آرت، و3–4 أشكال مختلفة.
- **المصدر:** موقع ستوك (زي Envato Elements) أو بحث صور. راجع الرخصة والامتداد الحقيقي قبل ما تحفظ في المكتبة.
- **كت-أوت شخص وصورة مكان:** المصدر استخدم موقع إزالة خلفية مجاني (removal.ai، بيطلّع PNG صغير حوالي 500×600) وصورة مكان من بحث الصور. عندنا: إزالة الخلفية من الكونيكتور ([icons-and-transparency](../Generation/icons-and-transparency.md))، والصورة من العميل أو ستوك مرخّص أو توليد بموافقة. الكت-أوت الواطي الجودة يفضل صغير في الكادر.
- **Native لو مفيش ملفات:**
  - هاف تون نقط: كومب نقطة صغيرة مكرر بـ CC RepeTile ([recipe-click-effects](../After-Effects/recipe-click-effects.md)، Click 1) وبعدين Multiply والماسك.
  - ورق: تكستشرز Paper في باك المونتاج ([editing-pack-sfx-elements](editing-pack-sfx-elements.md))، أو Noise خفيف على Solid فاتح.
  - سحاب: صورة سحاب حقيقية عليها Extract و Curves ([recipe-clean-apple-style](../After-Effects/recipe-clean-apple-style.md)، «سحاب بعمق»)، أو توليد على خلفية سادة وإزالة خلفية ([icons-and-transparency](../Generation/icons-and-transparency.md)) بعد موافقة.

### أيقونات PNG جاهزة (لهوك التايتل وكروت الـ UI)
مش بلاجن، بس لوك الـ UI على الست الغامق ([recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md)) واقف عليها.
- **Flaticon:** موقع أيقونات، وتنزيل الـ PNG مجاني **بشرط ذكر المصدر** (Attribution). لشغل عميل: اشتراك أو رخصة من غير Attribution، أو أيقونة من عندنا.
- **Filled ولا Outline:** الأيقونة اللي هتاخد جريديانت لازم Filled. والأوتلاين للّوك النيون الرفيع. واتأكد إن الـ PNG مقصوص نضيف على الأيقونة.
- **تلوين PNG أسود:** Tint (Map Black To: اللون) للون سادة، و Gradient Ramp أو 4-Color Gradient على اللاير للتدرج.
- **الجلو والظل والبلور على PNG بيتقصّوا عند حدود اللاير:** Adjustment Layer فوقها ثم Pre-compose، أو الإفكت على البري-كومب من برا.
- **عندنا:** أيقونة جلاس مولّدة ([icons-and-transparency](../Generation/icons-and-transparency.md)، بموافقة التوليد)، أو أيقونة مرسومة Shape Layers ([layout-principles](../Visual-Direction/layout-principles.md) 6). ولوجو تطبيق حقيقي يتاخد من صفحة البراند الرسمية وبألوانه.
- ملفات أيقونات جاهزة مع مشروع الهوكات: [LOCATIONS](LOCATIONS.md).

### ستوك وخطوط وإفكتس Native للّوك البي-رول السينمائي ([recipe-cinematic-broll-short](../Premiere/recipe-cinematic-broll-short.md))
- **ستوك فيديو بالاشتراك (للشغل المحترف):** Envato Elements، Storyblocks، Motion Array، Artgrid، Pond5. **مجاني:** Pexels، Pixabay، Mixkit، Videezy، Mazwai. كله **غير متحقق إن عندنا اشتراك**، والترخيص التجاري بيتراجع قبل أي استخدام لعميل. كلمات البحث ونصايح الاختيار في الوصفة (6.3).
- **خطوط:** Coolvetica (Sans) وEdwardian Script ITC (Script) لاتيني، **غير متحقق**؛ المقابل العربي وخانة Script (Amira Typo بقرار المونتير 2026-11-10) في [arabic-typography](../Visual-Direction/arabic-typography.md).
- **Native في بريمير بيعمل الشغل كله:** Nest، Video Effects → Perspective → Basic 3D (Swivel وTilt وDistance to Image)، Opacity → Blend Mode (Overlay وDifference)، Transform وGaussian Blur كـ Preset (Anchor to In Point)، Upgrade Caption to Graphic. من غير بلاجنز؛ التتبع الحقيقي بنقطة واحدة في افتر (Tracker + Null).

### عداد أرقام وظل طويل وأدوات مساعدة لقطعة المنتج البرمجي ([recipe-product-ui-motion-piece](../After-Effects/recipe-product-ui-motion-piece.md))
كلها **غير متحقق إنها متسطبة** (جاية من درس، روابطها مش مؤكدة). البدائل Native في الوصفة.
- **Odometer (مجاني):** عداد بجليفات بتلف (Create Odometer Texture)، بيدّي «300+». Native: إكسبريشن Source Text بمنحنى بطيء في الآخر ([recipe-offer-two-worlds](../After-Effects/recipe-offer-two-worlds.md)).
- **Crates Long Shadow (مجاني):** ظل طويل لعنوان. Native: نسخة سوداء + Radial Shadow أو Directional Blur.
- **Easy Tools (مجاني، سكربت):** Anchor Point في المركز بضغطة. Native: شبكة Anchor في Motion Tools Pro أو يدوي.
- **Motion Tools (النسخة الكلاسيك المجانية):** Offset بـ Step وفريمات (2 فريم) للتتابع. Native: [rhythm-easing-expressions](../After-Effects/rhythm-easing-expressions.md) (Motion Tools Pro).
- **Text Exploder:** تقسيم جملة لكلمات آليًا. مش عندنا؛ لاير لكل كلمة يدوي.
- **Flow:** منحنى إيزينج بضغطة (مذكور في rhythm-easing). Native: F9 + Graph Editor.
- **موقع باليتات ألوان (حد ست ألوان، تنزيل PNG):** لبناء باليتة. Native: Hex من أي أداة ألوان.
- **BOUNCr (متسطب):** الدروس بتستخدم Amplitude 25–30 مش 50 للأزرار والأيقونات. على أيقونة/تايتل: بريستات محمود أولًا.
- **ElevenLabs Text to Speech:** إعدادات الصوت في الوصفة (القسم 4). أي توليد مدفوع بعد موافقة على النطاق والتكلفة. صوت عربي بفحص سمع.

### الموجود في AE 2026 من غير بلاجن (ماتنساهوش)
Object Selection للعزل بضغطة، و Unmult، و Camera Lens Blur (فوكس)، و Variable Font Axes (تحريك وزن الخط)، و CC Light Sweep، و Turbulent Displace، و Motion Tile.
- وكمان للّوك الإيديتوريال: CC Lens (انحناء عدسة للأطراف وسبايك الترانزيشن)، و Posterize Time (حركة متقطعة)، و Noise بـ Use Color Noise (جرين خفيف)، و Layer Styles > Inner Glow (دمج كت-أوت في الخلفية)، و Brightness & Contrast مع Gaussian Blur بماسك Inverted (فينيت تركيز)، و Colorama من بريست Ramp Red (تحويل صورة للونين من الباليتة)، و CC Radial Fast Blur + Gaussian Blur (ظل مرمي من أي شكل أو حرف)، و CC Vignette بقيمة سالبة (فينيت أبيض)، و 4-Color Gradient (صفحة مش فلات).
- وكمان لقراءة أي ريفرنس وإعادة بنائه: Layer Styles > Bevel and Emboss (حافة منوّرة وحافة غامقة)، و Gradient Fill على الشيب، و CC Light Sweep (شريط نور)، و Venetian Blinds (خطوط اسكان)، و Trim Paths (خط بيترسم)، و Proportional Grid 3×3 (قاعدة التلت). الجدول الكامل في [reference-analysis](../Editorial/reference-analysis.md) («تفكيك مشهد واحد»).
- وللّوك الغامق بكابشن تقيل و UI ([recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md)): Radial Shadow من Perspective (ظل حاد قصير بإفكت واحد على لاير النص)، و Shatter من Simulation (تكسير زجاج لنص أو تايتل)، و CC Radial Fast Blur من غير تسويد (أشعة نور من كلمة أو أيقونة)، و CC Particle Systems II (نقط نور صغيرة من كارت)، و Layer Styles > Inner Glow أبيض (حافة كارت UI زجاجي)، و 4-Color Gradient على شيب أو أيقونة، و Tint لتلوين أيقونة سودا، و CC Vignette بقيمة موجبة واطية، و Separate Dimensions لمسار بلفّة.

### أدوات إضافية لقطعة المنتج البرمجي الكاملة ([recipe-product-ui-motion-piece](../After-Effects/recipe-product-ui-motion-piece.md) الأقسام 15–29)
كلها **غير متحقق إنها متسطبة** إلا BOUNCr (متسطب)، و Presetify (متسطب، 2026-11-11). البدائل Native في الوصفة.
- **Loopy (بانل):** Cycle على أنيميشن إيموجي. Native: `loopOut("cycle")`.
- **Presetify وEZ Tools (بانلات):** حفظ Presets وأزرار سريعة. Native: حفظ Animation Preset يدوي.
- **باك Memoji وEmojipedia:** ستيكرز وإيموجي PNG. على ذوقنا: أيقونات خط من الباليتة.
- **HDR استوديو (`studio_small_03_2k.hdr` وأشباهه):** Environment Light لأي جسم 3D. أي HDR مرخّص.
- **Typewriter Blinking Cursor (Animation Presets، جاهز في افتر):** Cursor Blink Speed 0 وVertical Bar. Native: البناء اليدوي (القسم 6.3).
- **Smart Bounce 1.0 (بانل ارتداد، ملف التسطيب موجود، متسطب: مش متأكد):** ملف `.jsxbin` واحد يتحط في `<AE>\Scripts\ScriptUI Panels` ويتفتح من Window. أزراره: تشغيل، ونوعين ارتداد، ومسح، ومساعدة. حدد كيفريمز Position وScale (وRotation) مع بعض ودوس زرار الارتداد. الكود مقفول، فقيمه مش مقروءة: ظبّط التوقيت بالكيفريمز نفسها. اتشرح في [recipe-tracked-hook-title-and-chip](../After-Effects/recipe-tracked-hook-title-and-chip.md) (القسم 5). Native: BOUNCr (متسطب)، أو بريستات محمود ([icon-bounce-presets](icon-bounce-presets.md))، أو إكسبريشن Inertia.
- **Motion Tools CLASSIC و Flow و AEUX في مشروع SaaS حقيقي:** نفس استخداماتهم فوق؛ الجديد: AEUX بيجيب Pre-comps فاستخدم Unprecompose وامسح اللايرات الزيادة، و Flow منحنى مقروء 0.90, 0.00, 0.10, 1.00 ([recipe-product-ui-motion-piece](../After-Effects/recipe-product-ui-motion-piece.md) القسم 36).
- **Native في قسم 32 و35:** CC Light Sweep (Sweep Intensity 0 وCutout)، Quick Chromatic Aberration، Optics Compensation، CC Light Burst، Displacement Map، Grid، Turbulent Displace: كلها إفكتات أساسية.
- **Artlist و Epidemic Sound (اشتراكات صوت):** مكتبات SFX ومزيكا لشغل SaaS الاحترافي (غير متحقق). Native: المكتبة المحلية ([sound-design](../Premiere/sound-design.md)).

### أدوات مشهد 3D ديناميك ([recipe-dynamic-3d-ui-scene](../After-Effects/recipe-dynamic-3d-ui-scene.md))
كلها **غير متحقق إنها متسطبة** إلا اللي متسطب بقرار المونتير 2026-11-10 (BOUNCr وAnimation Composer وDeep Glow 2 وBoris BCC وSapphire). Optical Flares لسه غير متحقق. البدايل Native في الوصفة (القسم 11).
- **BCC Halftone وBCC Prism (Boris Continuum):** هاف تون لكروت، وبريزم يضوّي الوسط. Native: Color Halftone، وQuick Chromatic Aberration.
- **Optical Flares (Video Copilot):** فلير على الشباك بـ 3D. Native: Lens Flare أو PNG بـ Screen.
- **Canva:** PNG بخلفية شفافة (ظل شباك، إطار، كلاب بورد) وقص الخلفية. Native: Solid + Masks.
- **ChatGPT وPinterest:** أفكار أوبجكتات للكلمة المفهومية.
- **Sapphire (S_QuadTone وS_Rays وS_Vignette وS_HalfTone) وKeylight:** ظاهرين في مشاريع الإعلان المرجعي؛ ما اتحققش من الاستخدام.
- **خطوط (Roboto وShadows Into Light):** Google Fonts؛ الثاني لاتيني بس.

### أدوات تسجيلات الشغل الحقيقي ([recipe-minimal-ui-and-realtime-builds](../After-Effects/recipe-minimal-ui-and-realtime-builds.md))
- **تحذير كراش Animation Composer 3 (Mister Horse):** افتر بيفتح System Compatibility Report «may cause After Effects to crash» لو الإصدار أقدم من **3.8.7**؛ التحديث من Mister Horse Product Manager. الحالة: **غير متحقق** (إيه الإصدار عندنا). Native: بريستات الحركة ([icon-bounce-presets](icon-bounce-presets.md)) بدل البلجن.
- **Deep Glow 2 وBOUNCr 1.1 وEZ Tools:** مستخدمين بنفس القيم في كل التسجيلات (Exponential/Screen، Radius 250–500، Exposure 0.10–0.30). غير متحقق التسطيب ما عدا اللي مكتوب فوق. Native: Glow الأساسي وInertia.
- **بريستات بريمير (pop up):** «Modern pop up for YT» و«cinematic text pop up» و«pop up modern»: بريستات مش مدمجة (Transform + Gaussian Blur بكيفريمات). **غير متحقق إنها عندنا.** Native: ابنيها بإيدك واحفظ Preset (Type: Anchor to In Point).
- **بريستات افتر الأساسية:** Animation Presets ← Text ← Fill and Stroke: **Chill Hue Shift** و**Cycle Fill Hue** (تغيير لون بارات)، و**Posterize Time** و**CC Light Sweep** و**4-Color Gradient** (بريمير: Generate): كلها Native.
- **خطوط لاتينية:** Metropolis (Light/Medium/Bold)، SF UI Display، Montserrat Black، Edwardian Script ITC: غير متحقق؛ مقابل عربي في [arabic-typography](../Visual-Direction/arabic-typography.md).
- **مواقع إزالة خلفية:** بعضها بيحط Watermark على النتيجة المجانية؛ راجع الرخصة. Native: Roto Brush / Remove Background في Photoshop.

## قرار المونتير: إحساس الباونس (2026-11-10)
- **BOUNCr وأي باونس عمومًا: باونس وسط، واضح وملحوظ وسموز.** مش خفيف لدرجة إنه ما يبانش، ومش مطاطي مبالغ. قيم الكورس (Amplitude 25–30) وقيمة المكتبة (50) نقط بداية: اختار اللي يدّي الإحساس ده على الكومب وظبّطه بالعين.

## قرار المونتير: المتسطب عنده (2026-11-10)
- **متسطب: BOUNCr و Animation Composer و Boris BCC و Sapphire و Deep Glow 2.** أي وصفة بتقول عنهم «غير متحقق» تتقري «متسطب». Animation Composer: اتأكد إن النسخة 3.8.7 أو أحدث (النسخ الأقدم عليها تحذير كراش في افتر).
- **Un-PreCompose متسطب (تحديث المونتير 2026-11-11).** البديل لو اتعطل: نسخ لاير النص من البري-كومب، أو Un-precompose في Motion Tools Pro.
- **غالبًا متسطبين (كلام المونتير 2026-11-11، مش متشافين):** Motion Tools (كلاسيك/Pro)، Flow، AEUX، Overlord، Copy Pasta، EZ Tools، Loopy، Smart Bounce، Morpho، Optical Flares، Trapcode (Particular/Form/Shine/Starglow)، Universe، Twitch، RSMB، Mocha، Magic Bullet، Topaz، Odometer، Crates Long Shadow، Captioneer، Whisper. استخدمهم على طول، ولو واحد ما ظهرش كمّل بالبديل Native المكتوب جنبه وقول في سطر.
- **Presetify متسطب (مجاني، تحديث المونتير 2026-11-11):** تفاصيله وطريقة استخدامه في «Presetify: الاستخدام» تحت.

## Presetify: الاستخدام (متسطب، مجاني)
بانل ScriptUI بـ 7 أزرار، كل زرار بيطبّق بريست `.ffx` على اللاير المختار (اتقرت من ملفات البريست نفسها):
| الزرار | البريست | بيعمل إيه | العربي |
|---|---|---|---|
| 1by1 | `1by1.ffx` | Text Animator بـ Range Selector: النص بيظهر وحدة وحدة | جرّبه على جملة: لو الوحدة حرف هيكسر الوصل؛ لو كلمة ينفع |
| Word Down | `word down.ffx` | الكلمات بتنزل لمكانها واحدة ورا التانية | ينفع للعربي (حركة بالكلمة) |
| Word Right | `word right.ffx` | الكلمات بتدخل من الجنب | اتأكد من الاتجاه: العربي بيتقري من اليمين، فلو الدخول بيبدأ بآخر كلمة اعكس الـ Range (Offset أو Direction) |
| Character Down / Right | `character down/right.ffx` | نفس الفكرة حرف حرف | **ما تستخدمهوش على عربي متصل** (بيكسر الوصل)؛ للأرقام واللاتيني بس |
| Bounce | `bounce text.ffx` | إفكت Transform عليه إكسبريشن Inertia بيتخمد (`amp/freq/decay` و`easeOut` على الآخر) على الكيفريمات اللي انت عاملها | ينفع على أي لاير؛ عدّل `amp` لحد ما يدّي الباونس بتاعنا (وسط وواضح وسموز) |
| Flicker | `text flicker.ffx` | Opacity بإكسبريشن `random(value,100)`: وميض عشوائي | لحظة واحدة بس (هوك أو كلمة)؛ صاخب على ذوقنا لو طوّل |

- **الطريقة:** اختار لاير النص ← دوس الزرار ← البريست بيتحط عند الـ CTI؛ حرّك أو مط كيفريمات الـ Offset عشان تظبط السرعة. انسخ الحركة لباقي اللايرات بنسخ الأنيميتر (Copy/Paste) بدل ما تدوس على كل لاير.
- **التسطيب:** محتويات الفولدر كلها (`Presetify.jsxbin` + فولدر `icons` + فولدر `presets`) جوه `<AE>\Scripts\ScriptUI Panels\` (الـ jsxbin بيدوّر على الفولدرين جنبه)، وبعدين Edit > Preferences > Scripting & Expressions > Allow Scripts to Write Files and Access Network، وافتحه من قايمة Window.
- **Native:** نفس البريستات ينفع تتطبق من غير البانل: Animation > Apply Animation Preset على ملف الـ `.ffx`.
