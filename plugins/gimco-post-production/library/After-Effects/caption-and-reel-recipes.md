# وصفات الكابشن والريل جوه افتر

- **الاستخدام:** كابشن لامع، كلمة جريديانت، شيبات، جلاس يدوي، نص ورا شخص، ترانزيشن فوكس، بارالاكس، تلوين.
- **المكان:** نصي
- **المتطلبات:** بعض الوصفات بتذكر بلاجنز (موضح جوه)
- **البديل Native:** الجلاس اليدوي والوصفات الأساسية Native
- **الفهرس:** [INDEX](../INDEX.md)

---

## وصفات ريلز داخل افتر (4 دروس ريلز على افتر، فولدر <فولدر الدروس>)
المصدر: 70 «مونتاج ريلز بـ40 دولار» (ستايل سينمائي أحمر)، lesson-captions «المونتاج ده هيغير شكل الريلز» (كابشن ذهبي/جلاس، ومعاه بروجيكتات 63 و64 و65 و4 مفتوحة .aep)، طبي 1 «فيديو طبي احترافي لعميل» (17 ثانية طبي كامل، أخضر/أزرق)، ملفات 25 «3 ستايلات» (هدية مينيمال/كلين، أسنان طبي، هاكر سينمائي). شغله كله يدوي جوه افتر، وبيقول إن الجراف إيديتور والكيفريمات والتكست أنيميشن لازم بإيدك.

### البروسيس الثابت عنده (بالترتيب)
1. **ماركرز الأول:** يسمع الفيديو ويحط ماركر عند بداية ونهاية كل جملة كابشن. المقاطع اللي فيها «مشهد» (صورة/فول سكرين) يلونها أصفر، والكابشن لون تاني. بكده يعرف قبل الشغل فين الكابشن وفين المشاهد، ولما العميل يطلب تعديل يلاقي مكانه بسرعة.
2. **قبلها نضّف الرو:** شيل السكوت وظبط البوزيشن. وفي الطبي ابحث عن المرض قبل ما تبدأ.
3. **باليت ثابت:** مربعين صغيرين فوق الكومب بلونين البراند (والأبيض أساسي) تاخد منهم بالقطارة. ما تستخدمش أكواد ألوان جديدة في كل كابشن. لو العميل ما عندوش هوية، خد لون من خلفية التصوير + جولد.
4. **جايد ومسطرة (Ctrl+R) والـ Align في النص** لكل كابشن، عشان الكلام يبقى في نفس المكان طول الفيديو.
5. **اعمل ستايل كابشن واحد كامل، وبعدين Ctrl+D وغيّر الكلام.** أقصى حاجة 2–3 أنواع كابشن وحركات في الفيديو. لما تكرر كابشن غيّر زاوية/Weights بتاع اللايت سويب حسب طول الكلمة.
6. **اقطع كل لاير على قد المقطع بتاعه** (Ctrl+Shift+D)، عشان الرندر والترتيب، ولوّن لايرات الكابشن بلون ولايرات المشاهد بلون.
7. **كمّل الكابشن كله وبعدين حرّكه مرة واحدة**، مش كلمة كلمة.
8. **حرّك اللاير الأساسي قبل ما تكرره.** ولو نسيت: Alt+كليك على Size واسحب Pick Whip لـ Size بتاع اللاير التاني.
9. **راجع بـ Quarter، وقبل التصدير شوف Full** (الديب جلو بيبان مختلف).
10. الكابشن 90% من الفيديو: ابعت للعميل 4–5 خطوط يختار منهم قبل الشغل. اختار خط فيه أوزان (Black/Bold/Medium/Light)، المهم بولد والباقي لايت. خطوطه: FilmFarsi_V5 Display و MadaniArabic-Black. وبيستخدم الكشيدة (اسـتـثـنـائي).

### 1) لوك الكلمة الهايلايت (اللمعة الحمرا/الذهبية/الخضرا)
على لاير النص بالترتيب:
1. **Fractal Noise:** Fractal Type Dynamic أو Smeary، Noise Soft Linear، Invert، Contrast 172–250، Brightness -10 لـ 3، Complexity 2–4. Alt على Evolution: `time*150` (أسرع `time*1000`). الإفكت لازم «يعيش» جوه الكلمة.
2. **Tritone:** Highlights/Midtones/Shadows: أسود أسود ولون البراند، أو الشادوز بس باللون.
3. **Bevel Alpha:** حرف بارز.
4. **CC Light Sweep:** Sweep Intensity 0، Edge Intensity وWidth عاليين = لمعة على الحرف بس.
5. **LightSweepPro (اختياري، مدفوع):** Surface Depth 20.
6. **Deep Glow 2** تحت السويب: قلل Radius وExposure، وInput Threshold حوالي 9% عشان الجلو يمسك أجزاء معينة.
7. **Drop Shadow** (Distance 6) أو **Shadow Studio 3** بأوباسيتي 25–40% = الكلام يبان على الخلفيات الفاتحة واللبس الأبيض.
- **لمعة ماشية على الكلمة:** CC Light Sweep تاني (Width 20، Weights 50) وكيفريمات على Center من الشمال لليمين في كام فريم.
- اللمعة من لون قريب للكلمة (أصفر فاتح على البرتقالي)، مش أبيض صريح.
- **لمعة دخول بلمعتين متعاكستين (من غير Fractal Noise ولا Bevel):** إفكتين CC Light Sweep على نفس الكلمة، مركز كل واحد متكيفرم في اتجاه عكس التاني وبإيز سريع جدًا في الأول، فاللمعة كلها بتخلص في 6–8 فريم من ظهور الكلمة. ومعاها اختياري نسخة تحت الكلمة عليها CC Radial Fast Blur = أشعة نور. القيم في [recipe-dark-ui-talking-head](recipe-dark-ui-talking-head.md) (4.5 و4.6)، والستاك الثابت (جريديانت أفقي + لمعة حواف + جلو + Radial Shadow) في [recipe-editorial-talking-head](recipe-editorial-talking-head.md) (4.3، نسخة «د»).
- البديل لو الجهاز ضعيف: بلاش Fractal Noise المتحرك، تقيل في الرندر.

### 2) الكلمة البيضا الجريديانت + ستروك
1. Gradient Ramp: أبيض → رمادي (مش أسود عشان الكلمة ما تختفيش)، واعمل Swap.
2. Ctrl+D للنص. النسخة اللي تحت: شيل الجريديانت، فعّل Stroke وشيل الـ Fill، Stroke 6.
3. CC Light Sweep على الطرف بس (Light Reception: Cutout، Sweep 0، Weights عالي).

### 3) حركة النص (Text Animator)
- Animate > Opacity = 0، وAdd Property > Position: Y = 75 (طالع من تحت) أو X = -100 (جاي من الشمال).
- Range Selector > Advanced: Shape Ramp Up (أو Square للتنويع)، Based On **Words** (العربي مع بوزيشن لازم Words؛ أوباسيتي لوحده ممكن Characters)، Ease High 65 / Low 50.
- Offset: -100 → 100. للتنويع على نفس النص: 0 → 100.
- Expression Selector للباونس (Alt على Amount). انسخ الأنيميتور (Ctrl+C على Animator) والصقه على باقي اللايرات.
- **بريست باونس جاهز (Animator: Position + Opacity 0 مع Range Selector + Expression Selector):** المسافة اللي النص بيطلع منها هي قيمة Position في الأنيميتور (الافتراضي 0,128). نزّلها لـ 70 للسطر الصغير (نطّة أهدى)، وجوه Pill ضيقة حوالي 30–40. Native بالكامل، اعمله Save Animation Preset مرة واحدة.
- **تنويعة هادية ببلور (من غير باونس):** Animator فيه Position صغير + Blur 9–10 + Opacity 0 (وممكن Fill Color بلون جار الأكسنت كوميض دخول)، و Range Selector بـ Units: Index و Based On: Words و Shape: Ramp Up، و End على 0 و Start هو اللي متكيفرم. الكلمات بتحدّ واحدة ورا التانية وهي طالعة كام بكسل. الوصفة والقيم في [recipe-editorial-talking-head](recipe-editorial-talking-head.md) (4.4).

### 4) الشيبات والزينة حوالين الكابشن
- **معين:** Rectangle بـ Ctrl+Shift، لفّه 45°، لون البراند + Deep Glow، واحد يمين وواحد شمال الكلمة.
- **Pill:** Rounded Rect (UU يفتح Size، Roundness 50–250)، Fill Gradient Linear، ستوب منه Opacity 0. اتحكم في زاوية الجريديانت بالـ G tool من الفيوور. Deep Glow 500 وبعدين قلل Exposure.
- **حرف لامع للشيب:** Ctrl+D وشيل الإفكتات، CC Light Sweep Cutout، Sweep 0، Weights 100.
- **لمعة بتلف حوالين الشيب:** Alt على Direction بتاع CC Light Sweep: `time*150`، والـ Anchor في نص الشيب.
- **شيب فيه علامة:** Polystar 8 أوجه (Inner Radius وInner/Outer Roundness)، أو 4 أوجه = نجمة. علامة صح بالـ Pen Tool (Stroke 10، Fill none).
- **دوت/استروك داش:** Stroke + Dash، Blend Overlay.
- **كذا شيب في لاير واحد:** Ctrl+D على الـ Group مش اللاير. فك الـ Shape بـ Convert to Bezier Path وامسح نقط = قوس.
- الأيقونة مربوطة Parent بالشيب. Anchor على الطرف (Snapping) عشان يكبر من جنب.

### 5) حركة الشيبات
- **Scale باونس:** UU > Size (فك اللوك)، 0 → 100 في حوالي 15 فريم، Easy Ease + باونس خفيف (6 → 12). **عندنا: بريستات محمود بدل ده.**
- **ظهور فليكر:** Opacity 0 → 75 → 25 → 100 كل كام فريم (أو 0, 75, 25, 75, 0, 100).
- **ستاجر:** كل عنصر بعد 5–10 فريم من اللي قبله.
- **Trim Paths** على الاستروكات: End 0 → 100 في ثانية، وStart يتأخر 10 فريم.
- **4 مربعات في الأركان:** Overlay + فليكر، أو Parent لنل وScale من الأنكور اللي في الطرف = بتتفرد كأنها ماشية على باث.
- **عناصر بتلف في مسار دايري:** 4 معين حوالين الشيب، Parent لـ Null في النص بالظبط، Rotation على النل.
- **شيبات تظهر هارد كت** مع كل جملة (من غير أنيميشن).

### 6) الجلاس اليدوي (من غير بلاجن)
1. Rectangle، Roundness عالي (50–100). حوّله **Adjustment Layer** (Toggle Switches/Modes).
2. **Fast Box Blur** 15–20 (يخفي المايك والخلفية اللي ورا).
3. **Transform** Scale 115–120 = الانكسار. حرّك Position بتاع الـ Transform عشان تختار المنطقة اللي تبان جوه. دي أهم خطوة.
4. **Tint** أسود 20% يغمّق، أو أبيض 5–12% يفتّح (الفروستد).
5. **الحرف:** Ctrl+D، شيل Adjustment والإفكتات، Stroke بس (5–20) واخفيه. على الأصلي **Displacement Map** (Map = لاير الاستروك، Effects & Masks، Max H/V 70–150، في درس 64 حوالي 70–90).
6. **اللمعة:** نسخة Fill أبيض + CC Light Sweep Cutout، بدون الإضاءة العرضية، Weights وEdge عاليين، وغيّر Direction. نسخة تانية بزاوية تانية = إضاءتين.
7. اربط كل اللايرز باللاير الأساسي عشان تتحرك معاه.
- البلاجنز البديلة: **Glassary** (أحسن) و **Liquid Glass** (gd_LiquidGlassKey). جلاس CapCut ضعيف.

### 7) شيب ورا الشخص (Roto Brush)
1. Roto Brush على الجزء اللي هيظهر وراه الشيب بس (الراس والكتاف). من غير Refine Edge (تقيل في الرندر). Freeze.
2. اقطع اللاير عند الماركر قبل الـ Freeze عشان الرندر.
3. Ctrl+D للفيديو. شيل الصوت والروتو من النسخة اللي تحت. الشيب بين الاتنين.
4. الشيب: دايرة Gradient أحمر (ستوب Opacity 0)، Deep Glow 500، والحرف بنسخة Light Sweep Cutout.
5. جوه الدايرة دايرة تانية: **Fractal Noise** (Complexity 2، Evolution `time*300`) + **Tritone** (أسود، أسود، أحمر) = بديل البلاجن المدفوع اللي بيعمل الحركة.

### 8) ترانزيشن الفوكس جوه المشهد (كلمة «فشل»)
1. Ctrl+D للمشهد. النسخة اللي فوق: Rounded Rect كـ Alpha Matte على الجزء اللي هيفضل واضح.
2. اللي تحت: **Levels + Fast Box Blur** بكيفريمات: من صفر لتغميق وبلور 20 في حوالي 30 فريم، Easy Ease.
3. نسخة من الشيب Fill أبيض: Opacity 0 → 70 → 25 → 0 = فلاش وهو داخل.
4. الكلام تحته بنفس ستايل الكابشن (Ctrl+D وغيّر الكلمة).

### 9) دخول المشهد (صورة بعد كابشن)
- Adjustment Layer عليه **Fast Box Blur + Levels**: كي عند البداية = 0، وبعدها بلور 20 والخلفية أغمق، Easy Ease. بعدين الصورة تدخل في النص.
- **ريفيل بالماسك:** شيب Fill فوق الصورة، Position من تحت لحد ما يغطيها (ثانية، Easy Ease)، والصورة Alpha Matte عليه. على الشيب **Turbulent Displace** (Complexity 1، Amount 85–100، Size 100) = حرف متموج.
- **Colorama** على نسخة تانية (Output Cycle Gold) + Glow، وبعدين Weights 0 عشان الإضاءة ورا الأشخاص ما تفضلش.
- الشخص Position بطيء لحد آخر المشهد (ما يخرجش برة الكادر)، جراف تقيل سينمائي.

### ريفيل بمسح مايل + نسخ لونية متأخرة (Color Echo Wipe)
للرقم الضخم أو الكلمة الضخمة اللي عايزها تدخل بإحساس «ضربة لون» من غير Scale ولا Blur. الإحساس: لمعة لون بتعدي، وراها لون تاني، وبعدين الرقم الأصلي بيستقر.
1. الرقم Pre-compose لوحده (Anchor في النص). على لاير البري-كومب: Mask مستطيل، دبل كليك عليه ولفّه حوالي 30–45° (المسح يبقى مايل).
2. **Mask Path:** عند فريم النهاية كل النقط برا الرقم (مكشوف بالكامل). ارجع حوالي 30 فريم (لحد 60 لو عايزها أهدى) ودخّل نقطتين الضلع الأمامي جوه لحد ما الرقم يختفي. **Mask Feather 100** (حرف ناعم مش خط حاد). Easy Ease والجراف سريع في الأول.
3. **Ctrl+D مرتين:**
   - **النسخة 2 (اللون التاني):** شيل كل الإفكتات، وحط Fill بلون قريب (أحمر لرقم أصفر، أزرق غامق لرقم أبيض) + Deep Glow 2 (Radius 1000، Exposure 0.02).
   - **النسخة 3 (اللمعة):** Fill مش موجود، وعليها **CC Light Sweep** (Light Reception **Cutout**، Shape Sharp، Direction −30، Width ≈100، Sweep Intensity ≈14، Edge Intensity ≈50–195، Edge Thickness ≈4–5، Light Color لون البراند) + Deep Glow 2 (Radius 1000، Exposure 1).
4. **الترتيب في الوقت:** اللمعة تبدأ الأول، وبعدها اللون التاني، وبعدها الأصل، وكل واحدة بعد اللي قبلها بـ 2–3 فريم. **الترتيب في اللايرز:** نسخة اللون التاني تحت خالص.
5. ظبط Mask Path كل نسخة لوحدها: في النسخ اللي قدام، النقطتين الأماميتين أعرض وأنزل شوية، فالحرف الملوّن يبان حزام قبل الأصل. بعد ما تنسخ الماسك من لاير للتاني، **اتأكد إن الـ Feather رجع 100**، وامسح الماسك القديم لو اتكرر.
6. لعنصر تاني في نفس المشهد: انسخ الإفكتات والماسك (Ctrl+C على Mask Path) من الأول وغيّر اللون بس.
- **الألوان:** اللمعة واللون التاني من باليتة البراند أو مكمّلين للأصل. والجلو على اللون التاني ضعيف جدًا (0.02)، عشان يبان هالة مش نيون.
- **مع Text Animator:** نفس الفكرة بتمشي على السطر الصغير، بس الأحسن بريست باونس (تحت) عشان ما يتكررش نفس الإحساس.

### 10) الترانزيشن الطبي المميز
صورة جوه Rounded Rect (Roundness 50)، والاتنين التانيين ورا (Scale -1 للمرايا، Rotation).
1. Pre-compose الصورة مع الألفا مات بتاعها (اسمه photo).
2. شيب فوقها Position طالع من تحت (ثانية، Easy Ease)، والصورة Alpha Matte عليه.
3. على الشيب: **Turbulent Displace** Amount 85، Size 100، Complexity 1 → **Roughen Edges** Border 500، Edge Sharpness عالي → **Mosaic** Horizontal 50، Vertical 25–35 = حرف مكسّر جليتش.
4. Ctrl+D للصورة والماتّ، Pre-compose، **Fill أبيض**. Ctrl+D تاني، وخلّي النسخة اللي فوق Blend Mode **Silhouette Alpha** وقدّمها 2–3 فريم = يفضل بس شريط الحرف اللي ماشي. Pre-compose.
5. على الشريط: **CC Glass** (Softness قليل، Displacement 50، Light Intensity 100) → **Displacement Map** Max H 150، V -300 → **Colorama** (اقفل Modify Alpha، Output Cycle من البريست، خلّي الأخضر هو الغالب) → **Deep Glow**.
- النتيجة: الصورة بتظهر وحرفها شريط منوّر ملوّن مكسّر. تقيل؛ اشتغل Quarter وشوف Full قبل التصدير.

### 11) موجة الشيك على الكلام (Ripple)
1. كومب جديد بنفس المقاس (4K: الأبعاد ×2). Solid، ماسك دايرة (Alt+Shift من النص)، Feather 100.
2. Mask Expansion: كي، وبعد 20 فريم بالسالب لحد ما تختفي. ماسك تاني Subtract بكيفريمات متقدمة 2–3 فريم = حلقة. Opacity للآخر 0.
3. في الكومب الرئيسي، الكومب ده تحت الكلام (اخفيه). Adjustment Layer فوق الكلام عليه **Displacement Map** = الكومب ده. زوّد Max H/V = رجة دايرية في الكلام وهو داخل.

### 12) بارالاكس 3D
- الخلفية والشخص (مقصوص) 3D. الشخص يرجع لورا في Z. New Camera + Null 3D والكاميرا Parent عليه.
- Position النل بطيء طول المشهد (زوم مستمر)، جراف سلس. **Motion Blur على كل لاير 3D.**
- الخلفية Fast Box Blur 2–4 عشان الفوكس على الشخص.
- إضاءة حرف على الشخص: Layer Style > **Inner Shadow** (أو Inner Glow) أبيض، Overlay، Distance وSize عاليين. Pre-compose قبل 3D لأن الستايل بيضيع.

### 13) التلوين جوه افتر (للصور والعناصر)
- **Curves:** نقطة في الهايلايت والميدتون والشادو: الهايلايت فوق، والشادو تحت سنة بس.
- **Lumetri:** Contrast 50، Exposure سنة، وميلة أصفر خفيفة لو الفيديو دافي.
- **Color Balance:** Shadow Red يزيد سنة، Midtone Red حوالي 5. الزيادة بتقلب اللون.
- **صورة من النت:** دايمًا كونتراست (هايلايت فوق، شادو تحت)، لأنها بتيجي فلات.
- **Extract + Deep Glow (إضاءة جاية من فوق):** Ctrl+D للخلفية، **Extract** وحرّك سلايدر الأسود يمين = الهايلايت بس، وبعدين Deep Glow بـ Softness وRadius وExposure قليلين. نفس الإفكتين على الصورة = لمعة على أجزائها. ونفس الحركة على الشخص = يبقى الهايلايت في المشهد.
- **لمعة جانبية على الأشخاص:** CC Light Sweep Cutout، Sweep 0، Weights وEdge عاليين، واحدة يمين وواحدة شمال، بلون من الخلفية (أزرق في مشهد أزرق أحسن من الأبيض).
- **فوق المشهد:** Vignette (أو CC Vignette) + Adjustment Layer عليه **Radial Blur** (Zoom 3–5) بماسك دايري Inverted وFeather 150 = الأطراف بس مبلورة. **VR Chromatic Aberration** (مجاني) خفيف. **Halftone** تكستشر Overlay 20% (من Freepik)، ممكن بماسك على منطقة.
- **زوم مستمر للمشهد:** Adjustment Layer + Transform Scale 125 → 100 طول المشهد، Easy Ease.
- **زوم على الشخص** بدل كابشن مش مهم (مزوم ويرجع). بلاش لو الفيديو جودته ضعيفة.
- **ستاك بوست كامل بنفس المنطق** (نزع لون، تغميق، Gaussian Blur للأطراف بماسك Inverted، CC Lens، هاف تون Multiply على الأركان، Noise، Posterize Time 12، وزوم دخول بـ Transform + Blur + CC Lens): القيم والترتيب في [recipe-editorial-talking-head](recipe-editorial-talking-head.md) (7.1 و8.1).

### 14) عناصر تانية
- **ظل تحت عنصر:** Ctrl+D للاير، Pre-compose، Fill أسود، CC Radial Fast Blur، وحرّك المركز في اتجاه الظل، وقلل Opacity.
- **ظل مرمي بإفكت واحد (لكابشن فيه لايرات كتير):** Effect > Perspective > **Radial Shadow** على لاير النص نفسه بدل نسخة سودا لكل كلمة: Opacity 60%، Light Source فوق شمال برا الكادر، Projection Distance 1.3–1.4، Softness حوالي 20، Render: Regular. بيتنسخ ويتلصق على كل اللايرات، ويفضل آخر إفكت في الستاك. النسخة السودا بـ CC Radial Fast Blur أنضف وتفضل للتايتل الواحد. [recipe-dark-ui-talking-head](recipe-dark-ui-talking-head.md) (4.2).
- **CC Radial Fast Blur على PNG أو أيقونة بيتقص عند حدود اللاير:** Pre-compose (مع Adjustment Layer أو بحجم الكومب) والإفكت على البري-كومب من برا. ونفس الإفكت على نسخة **من غير تسويد** تحت الأصل = أشعة نور طالعة من العنصر، والنسخة النضيفة تفضل فوق.
- **نص أو تايتل بيتكسر زجاج (Shatter):** Adjustment Layer عليه Shatter جوه بري-كومب فيه النص بس. القيم ونسختين (شروخ في المكان، وضربة من نقطة) في [recipe-dark-ui-talking-head](recipe-dark-ui-talking-head.md) (4.7 و5.4).
- **شريط صور بيتحرك:** صورة جوه شيب كـ Alpha Matte، Pre-compose، **Motion Tile** (Mirror Edges، Output Width/Height 200) وكيفريمات على Tile Center = بتتحرك يمين كأنها منسوخة كتير.
- **خلفيات:** 4-Color Gradient على Solid. أو Gradient Ramp Radial (كورة في النص) بدل Linear. أو خلفية جاهزة وتغيّر لونها بـ Hue/Saturation (Colorize).
- **شيب تحت الكابشن:** Gradient من فوق للون غامق، Multiply 75% = تحت الكادر أغمق عشان الكابشن.
- **صور المريض:** AI بأشكال متنوعة (بيلعب، في المدرسة) لما العميل ما يبعتش.

### 15) قواعد الستايلات
- **مينيمال:** عنصر واحد معبّر في النص وكلام فوق وتحت. بس.
- **كلين:** إضاءة خفيفة ورا، Shadow Overlay، إفكت على الكلام، شيبات بسيطة بألوان البراند.
- **طبي:** هادي ومنظم. ألوان أزرق وأخضر ولبني وجولد، **ممنوع البنفسجي**، **ممنوع الكلام الأسود**. مشاهد بسيطة ومعبرة، اسم المرض بالإنجليزي، وشادو على الكلام لو الدكتور لابس أبيض. ما تكتبش 4 كلمات فوق و4 تحت؛ 3 كلمات وتحتها كلمة هايلايت. حتى مشهد أو اتنين في الفيديو كله كفاية، المهم ما يبقاش كابشن بس ولا مشاهد بس. (القواعد الطبية كلها وبموافقة مكتوبة لأي قبل/بعد: [medical](../Specialized/medical.md).)
- **سينمائي:** أغلى وأصعب، 10–14 لاير للمشهد. 3 حاجات: إضاءة، لون، حركة. الفرق كله في الجراف إيديتور.
- التزم بهوية البراند في الخلفية والكلام والشيبات. لون من برة الهوية بس في تفصيلة صغيرة.

### من جوه الدروس (.aep اتحللت بالسكربت: 64 و63 و65 و4)
الكلام ده من القيم الحقيقية في الملفات، مش من الشرح.
- **الكومب:** 1080×1920، 60fps، Shutter 180 / Phase -90. Motion Blur شغال على كل حاجة بتتحرك.
- **الماركرز:** ماركرز مرقّمة على الكومب، واحد لكل مقطع. كل كابشن أو مشهد واخد Label لون مختلف بالتتابع.
- **MotionStack (بلاجن):** بيحفظ مجموعة الكابشن الجاهزة (الكلمة والشيبات واللمعة) في كومب `MotionStack.internal` عشان يرجّعها تاني بضغطة.

#### 1) سيستم حركة الكابشن (بريست «Texto»، سودو إفكت TextoInBounce_v2)
كل لاير نص فيه أنيميتورين:
- **TX_in:**
  - Expression Selector، Based On: Words. الـ Amount فيه الإكسبريشن ده:
```
delay = effect("Texto_in")("Delay"); myDelay = delay*textIndex;
t = (time - inPoint) - myDelay;
if (t >= 0){ freq = effect("Texto_in")("freq"); amplitude = effect("Texto_in")("amplitude"); decay = effect("Texto_in")("decay");
  s = amplitude*Math.cos(freq*t*2*Math.PI)/Math.exp(decay*t); [s, s]; } else { value; }
```
  - Properties: Position مربوط بالسودو إفكت، وOpacity 0.
  - Position = [0,75] يعني الكلام طالع من تحت. [±75,0] يعني جاي من الجنب، والدروس بيبدّل الاتجاه بين كابشن والتاني.
  - القيم: Delay من 0.02 لـ 0.05 (0.01 لو كلمة واحدة)، freq من 1 لـ 2، amplitude من 30 لـ 70، decay 6.
- **TX_out:**
  - Range Selector، Offset من 100 لـ -100 في 0.33 ثانية، وبيخلص قبل نهاية الكابشن بحوالي 0.1 ثانية.
  - Based On: Words، Shape: Ramp، والـ Ease 20 / 0.1.
- **حجم النص:** الخط بيتكتب بحجم 35–99، واللاير نفسه Scale من 173 لـ 378.
- **Anchor Point Grouping:** Line، و Grouping Alignment = [0,-50].
- **الخطوط:** FilmFarsi_V5-Display، MadaniArabic Regular وBlack، GraphikArabic-Super.
- **Leading:** 75–110. والكشيدة طويلة جدًا.
- **مشروع 4 (من غير البريست):** نفس منطق الباونس، بس `delay .1 / freq 3 / amplitude 200 / decay 10`، وPosition 74.

#### 2) طبقات الكلمة (كل كابشن من 2 لـ 3 لايرز بنفس النص)
- **ستايل 64 (لمعة + نص زجاج):**
  1. **النص العادي:** عليه CC Light Sweep:
     - Light Reception: Cutout، Sweep 0، Edge 57–111، Width 265، Direction 43.
     - Center عليه 3 كيز في 1.1 ثانية (492 → 808 → 93)، فاللمعة بتروح وترجع.
     - وبعده Deep Glow 2.
  2. **نسخة من نفس النص متحوّلة Adjustment Layer:** عليها Fast Box Blur 16 وTransform (Scale Height 123، والـ Position مزاح). النص نفسه بيبقى زجاج بيكسر الفيديو اللي تحته.
- **ستايل 63 (3 نسخ):**
  1. **النص الأساسي:** CC Light Sweep 2 بـ Cutout (Width 110، Edge 50، Direction 95)، والـ Center عليه 3 كيز في 1.8 ثانية. وبعده Deep Glow 2 (Radius 600، Exposure 1، ولون الجلو أحمر برتقالي).
  2. **نسخة تانية:**
     - CC Light Sweep: Light Reception Add، Direction -30، Width 567، Sweep 69، Edge 232.
     - Gradient Ramp: من أبيض لرمادي 0.42.
  3. **نسخة Stroke أبيض بس** (2–3px) من غير Fill.
  - الكلمة الملوّنة (أخضر فاتح [0.6,0.98,0.6] أو أصفر [0.98,0.75,0.18]) عاملة Parent على نسخة ADJ بيضا. والفليكر بتاعها Opacity 0 → 48 → 23 → 100 Linear في 0.25 ثانية.
- **ستايل 65 (حديد / معدني):**
  - **الكلمة:**
    - Tritone: Shadows برتقالي [1,0.33,0]، Blend With Original 24.
    - Bevel Alpha: Edge 1، Light -60، Intensity 0.98.
    - Noise Alpha: Amount 10.
  - **التيتل الكبير** (Scale 336):
    1. Fractal Noise: Contrast 160، Brightness -19، Scale W 141 / H 372، Complexity 6.3، Evolution `time*300`، والـ Offset ماشي من اليمين للشمال في ثانيتين.
    2. Tint: Black → برتقالي، White → شفاف.
    3. Bevel Alpha.
    4. CC Light Sweep (Edge 110).
    5. Noise Alpha.
    6. Deep Glow 2: Radius 300، Exposure 0.63، Threshold 50.
    7. Shadow Studio 3: Direction 135، Length 106، Opacity 81 → 0، Distance 80، Softness 100.
  - **عدّاد:** Point Control بيتحرك x من 0 لـ 80 في 0.53 ثانية. والـ Source Text عليه:
```
var val = effect('Flex Control NUMBERS')('Point')[0];
Math.round(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
```

#### 3) زينة الكابشن
- **المعين:**
  - Polystar: Type Polygon، 4 Points، Outer Roundness 39–42، Gradient Fill.
  - الحركة: Scale من 0 لـ 43–65، ومعاه Rotation من 360 لـ 0، في 0.82 ثانية. الإيزينج Out 33 / In 100.
  - نسخة Child من نفس المعين عليها:
    - CC Light Sweep: Cutout، Width 118، Edge 239، Light Color سالمون [1,0.45,0.42].
    - Deep Glow 2: Radius 500، Exposure 2.
- **نجمة بريق صغيرة:** Polystar 4، Inner Radius 0.4، Outer 39. شكلها بريق رفيع.
- **إطار متقطع:**
  - Rect حوالي 700–775 × 197، Stroke 5، Dash 51–78، Blend Overlay.
  - فليكر Opacity 0 → 66 → 33 → 100 Linear في 0.22 ثانية.
  - النجوم في أركانه عاملة Parent عليه، وعليها نفس الفليكر.
- **خطوط:**
  - Stroke أحمر 10، Blend Overlay، Trim End من 0 لـ 100 Linear في 0.87 ثانية.
  - أو Dash 12 / Stroke 4، Trim في 1.37 ثانية (Out 33 / In 75).
- **دايرة الكابشن:**
  - Ellipse 1080، Gradient + Fill بلون البراند، Deep Glow (Radius 500، Exposure 0.9).
  - Scale من 0 لـ 28 Linear في 0.22 ثانية، وعليه إكسبريشن Flex للارتداد (Amp 20 / Freq 40 / Decay 60، نفس الـ Inertia عندنا).
- **دايرة 58px منوّرة:** Deep Glow 500، بتتزحلق Position في 0.53 ثانية.

#### 4) الجلاس (3 طرق في نفس البروجيكت)
- **gd_LiquidGlass (سكربت Liquid Glass):**
  - **لاير الكنترول:** Size (Point متحرك: -29 → 734 → 600 في 0.35 ثانية، فالـ Pill بيكبر بأوفرشوت)، Corner Round 173، Fill Opacity -3، Blur 10، Distortion (-72 → -266)، Bevel 121، Bevel Size 5، Glow 20، Light Angle 140، Shadow 39.
  - **الـ Layer Styles** مربوطة بالكنترول: Drop Shadow، Inner Glow أبيض 20، Bevel & Emboss.
  - **`gd_LiquidGlass_Adjust`:** Solid ADJ، عليه Alpha Matte من كومب الشكل. الإفكتات بالترتيب:
    1. Chromabba: Strength من 0 لـ 500 في 0.13 ثانية ساعة الخروج.
    2. Fast Box Blur.
    3. Turbulent Displace: Size 88، Offset بـ `time*100`.
    4. Transform: Scale Height 115.
  - **الخروج:** Scale 141 → 111 → 141، ومعاه Rotation 0 → 17 → 0، في 0.27 ثانية (كأنها اتداست).
- **Glassary:**
  - الشيب لازم يبقى فيه «Glass Fill»، والبلاجن بيحط ماسك «Glassary Geometry Bridge» لوحده.
  - **الـ Pill:** Rect، Roundness 100، Size من 0 لـ 982 Linear في 0.28 ثانية مع Flex. وقيم Glassary: Refraction 100، Frost 80، Splay 80، Glass Color أخضر فاتح، Light Angle 97، Light Length 62.
  - **أيقونة سهم:** Refraction 80، Frost 14، Splay 56.
  - **الخروج:** Scale 89 → 72 → 89، ومعاه Rotation 0 → 12 → 0.
- **Glaze:**
  - على دايرة 212.
  - القيم: Refraction 1.4، Smoothness 90، Frosted 50، Glass Blur 50، Tint 56، Specular 200، Env Reflection 55، Drop Shadow 79، Edge Refraction 100 / 30، Curved Edge 80.
  - Blend ADD. بتتزحلق في 0.85 ثانية (Ease 45/45) وبعدين Scale من 100 لـ 0.
- **النص الـ ADJ:** شوف ستايل 64 فوق.

#### 5) الانتقالات (كلها Adjustment Layers)
- **فلاش:** Exposure 0 → 1.99 → 0.44 → 1 → 0.55 → 0، Linear، في 0.2–0.42 ثانية، بين الكابشنز.
- **Whip «Wiggle Clean»:**
  - Directional Blur 90°: Length من 300 لـ 0 في 0.25 ثانية.
  - Exposure: 0 → 1 → 0.28 → 1.45 → 0 في 0.32 ثانية.
- **Push كاميرا:**
  - Transform: Position y من 960 لـ 1228، وScale Height من 100 لـ 131، في 0.67 ثانية (Out 19 / In 78).
  - ومعاه Posterize Time 12، فالحركة تبان Stop-motion.
- **Shake (مشروع 4):**
  - Transform: Position بـ `wiggle(10, Slider)`، والسلايدر 0 → 100 → 0. Scale 100 → 110 → 100. والاتنين في 0.4 ثانية.
  - Directional Blur: 0 → 90 → 0.
  - Exposure فليكر، وفريم واحد Invert.
- **زوم بطيء طول المشهد:** Transform Scale Height من 100 لـ 115–132.
- **لوك المشهد:**
  - ToneCraft: Cell 5، Mix 15–20 (هاف تون خفيف).
  - Chromabba: Strength 36، Separation 32–92.
  - بيدخل بـ Opacity من 0 لـ 100 في 0.33 ثانية.

#### 6) بناء المشاهد
- **خلفية:** Solid، Gradient Ramp بلونين من البراند (كريمي → برتقالي، أو أحمر 0.7 → 0.2)، وفوقه CC Vignette 100–164.
- **تكستشر:** صورة جدار ظل بـ Multiply، أو صورة بـ Camera Lens Blur 7.
- **أشعة:** Crate's Godrays (Length 250، Amount 30، Exposure 4).
- **العنصر الرئيسي:**
  - Curves.
  - Position طالع من برة لمكانه في 1.2–2.6 ثانية. الإيزينج **Out 0.01–4% / In 100%** (بداية فورية وفرملة طويلة جدًا). ده توقيع الدروس.
  - نسخة Child فوقه عليها CC Light Sweep (Cutout، Width 270–625، Edge 160–190) وDeep Glow (Radius 1000) = ريم لايت.
  - Edge Controller (Edge Blur 7–10، Inner Feather 10) بينعّم حرف القص.
  - Shadow Studio 3 (Length 250، Opacity 25).
- **ورا العنصر:**
  - نجمة Polystar 4 (Inner Roundness 281) أو شكل Fill أبيض + Glow 129، Blend ADD، Rotation `time*150`، ومعاها Deep Glow 1000 = وردة نور بتلف.
  - أو Circle Overlay بيتزحلق عكس العنصر.
- **عمق:** عناصر في المقدمة عليها Fast Box Blur 30 وMotion Blur.
- **تغميق الكادر:** Rect 1080، Gradient + Fill أسود، Multiply 70%، Scale 187 (بيغمّق تحت). ونسخة منه Overlay.
- **أيقونات معدنية 3D:** Polystar 8، وعليه Tritone + Bevel Alpha + Noise Alpha + LightSweepPro (Direction 74، Intensity 72، Edge 150).
- **شاشة TV (مشروع 4):**
  - PNG التلفزيون، ونسخة منه ADD عليها Tint (أبيض → شفاف) + Light Sweep كبير + Deep Glow 1000.
  - الفيديو جوه الشاشة: كومب بماسك، عامل Parent على التلفزيون.
  - المواضع عليها BOUNCr overSHOOT.
- **رقم 3D «95»:** Scale من 0 لـ 229، Y Rotation من 0 لـ 360، Z Rotation من -54 لـ 0، في 0.37 ثانية، وعليه Overshoot على كل خاصية.
- **Zoom-out reveal:** الفيديو بـ Alpha Matte من Rounded Rect، والـ Scale من 288 لـ 84 في 0.42 ثانية.
- **شريط لاصق (Tapeify):** Stroke 35 على Path بكيز HOLD، وTrim بيتقدم خطوات (Stepped) + Posterize 12. Tapeify مش عند عبدالله، فالبديل: Stroke بحرف Roughen Edges + Fractal Noise خفيف.
- **ترانزيشن الصورة الطبي (اتأكد من البروجيكت):**
  - Rect كـ Matte عليه Turbulent Displace 82 (Complexity 10) + Mosaic 100×50، وPosition من 2962 لـ 960 في 0.93 ثانية.
  - نسخة عليها Colorama + Deep Glow 250، وOpacity بتاعها من 100 لـ 0 بعد الظهور.

#### 7) بصمة الإيزينج الدروس
- **الزحلقة والحركات الكبيرة:** Out 0.01–4 / In 100.
- **السكيل:** Out 33 / In 93–100.
- **الفليكر والفلاش:** Linear.
- **المعين:** Rotation من 360 لـ 0 مع السكيل.
- **عند عبدالله:** الدخول ببريستات محمود، والإيزينج ده يتطبّق على المشاهد والزحلقات.

#### البلاجنز
- **عند عبدالله (اتأكدنا من الجهاز):** Shadow Studio 3، LightSweepPro، Deep Glow 2. استخدامهم بالتفصيل في «البلاجنز حسب الحاجة».
- **مش لاقيينهم في فولدرات البلاجنز:** ToneCraft، Glassary، Chromabba، Glaze، Edge Controller، Crate's Godrays. لحد ما يتأكدوا، ماتبنيش وصفة عليهم.
- **مش عنده:** Tapeify.
- **أداة التحليل:** `<فولدر الدروس>\<سكربت تحليل بروجيكتات الدروس>.jsx` (قراءة فقط، المسارات جواه ثابتة). بيكتب `_analysis.txt` جنب كل بروجيكت.

## لمعة على الشيبس/الكروت بس (CC Light Sweep → Cutout)
- على شكل الشيب (Rounded Rectangle): **CC Light Sweep** ← **Light Reception: Cutout** (اللمعة بتظهر جوه الشكل بس من غير ما تفتّح الخلفية) ← Width ~302، Intensity ~45، Edge Intensity ~50، Thickness ~4 (نقط بداية).
- كل الشيبس بنفس الارتفاع، ولونها من الكادر نفسه.
- على ذوقنا: اللمعة تعدّي مرة واحدة وقت الدخول، وبـ Intensity أقل لو الخلفية فاتحة.
