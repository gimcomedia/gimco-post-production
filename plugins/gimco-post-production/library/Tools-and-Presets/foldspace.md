# Foldspace (أسطح 3D منحنية: ورق بيتلف وبيتفرد، ريبون، صفحات، شاشات منحنية)

- **الاستخدام:** أي عنصر محتاج يتلف أو يتفرد أو يتطوي أو ينحني في 3D: لافتة بتتفرد، ورقة بتتقشّر، قلب صفحة، ريبون نصه بيلف، شاشة أو كارت منحني، علبة، نص ملفوف.
- **المكان:** متسطب على جهاز المونتير (AE، إفكت GPU). صفحة المنتج على aescripts بتكتب دعم لحد After Effects 2026، والمونتير شغال على 2027: لو الإفكت ما حمّلش أو ظهر غير مدعوم، اتأكد من إصدار البلاجن الأحدث.
- **المتطلبات:** Foldspace (الإصدار 1.4 فيه الظل وShadow Catcher) · كاميرا ونور AE
- **البديل Native:** CC Cylinder (لف) · CC Page Turn (قلب صفحة) · CC Bend It (انحناء) · كارت من أجزاء 3D بـ Anchor على خط الطي. لكل استخدام بديله في القسم 8
- **الفهرس:** [INDEX](../INDEX.md)

---

القيم **نقاط بداية** مقروءة من شاشة (AE 2026). اللي مش متحقق متعلّم «تقريبي». مدخل مختصر للأداة في [plugins-by-need](plugins-by-need.md) (طي وأسطح 3D)، والوصفة اللي بتستخدمه للورق: [recipe-3d-text-camera-paper-reel](../After-Effects/recipe-3d-text-camera-paper-reel.md) القسم 11.

## 1) النموذج الذهني
- إفكت Foldspace واحد على **Solid واحد** (سمّيه «Foldspace») هو الريندرر. جواه أسطح كتير في سين 3D واحد، ومجموعات Camera وLights وRender Settings.
- **السطح** = مستطيل بـ 16 نقطة تحكم (4×4) بينحني بنعومة بينهم. فيه: Size X/Y، Thickness، Divisions، Material، Origin، Position/Rotation/Scale، Roll، Attach to Layer(s).
- **أعلى Effect Controls:** Interaction Mode = Objects / Lines / Points، Gizmo = Position / Rotation / Scale، Gizmo Space = Local / Global. اضغط اسم الإفكت عشان تظهر المقابض على الكومب.
- **التكستشر:** Material > Source Type = Layer (أي لاير، غالبًا بري-كومب) أو Color. **Plane(s)** = Front and Back / Front / Back (خامة لكل وش). كمان: Image Size (Fill / Fit / Original)، Image Border (Repeat…)، Transform Image (Position X/Y، Rotation، Scale)، Time، Opacity، Diffuse، Specular، Shininess (الافتراضي 100/100/100/5.0؛ للورق مشهد استخدم 50%/50%/50%/2.5–3.0).
- الـ Rigs الجاهزة بتتسمى «[Foldspace] Attachment Layer N» (نلز) و«[Foldspace] Roll Control».

## 2) وصفة: لافتة بتتفرد (Unroll Banner)
اللوك: بيل بنفسجي على خلفية باستيل، بيتلف كأسطوانة وبيتفرد مسطح مع دفعة أوفرشوت في الآخر وبان كاميرا خفيف.
1. كومب «Texture-1» بمقاس **1400×200** (شيبات ونص). «Texture-2» نفس الشكل بلون واحد (ضهر اللافتة).
2. Solid «Foldspace» في الكومب الرئيسي + الإفكت، وامسح السطح الافتراضي (Surfaces > Delete Selected).
3. Surfaces > Create Surface > **Size 1400 × 200** (نفس التكستشر بالظبط وإلا اتمط) > Add. Material > Source Type Layer > Select > Texture-1.
4. كاميرا **20 mm** (عدسة واسعة تبالغ في الانحناء). لف حواليه: الضهر نفس التكستشر.
5. Material > Plane(s) = **Back** > Texture-2.
6. **تجهيز الـ Rig (4 نلز تمسك 16 نقطة):**
   - Points Mode، حدد 4 نقط أفقية في صف > Control Points > Attach to Layer(s) > **Create Parent** (بيعمل 4 نلز).
   - فورًا **Detach** (النلز تفضل والنقط تتحرر)، وحرّك النلز لنص السطح.
   - Lines Mode، اضغط أول خط رأسي (بيحدد نقطه الـ 4) > Attach to Layer(s) > **Select...** واضغط Null. كرّر للخطوط التلاتة الباقية.
7. **Roll** (Surfaces > Roll): Angle، Tilt، Radius، Radius Expand Per Turn. مش بيتحرك بكي مباشر: **Create Control Layer** بيعمل «[Foldspace] Roll Control». القيم: للاختبار Angle 0x+90 وTilt 0x+60؛ وفي الحالة الملفوفة Angle **1x+333°، Tilt 0x+99°، Radius 100، Radius Expand Per Turn 1.00**. كي على Angle (لفات) وTilt من الملفوف لـ 0 عشان تتفرد، Easy Ease.
8. **نور:** ضيف الأول عشان الشكل يتقري. بعدين Ambient + Parallel الاتنين **50%** (المشهد كان منوّر زيادة).
9. **الدفعة الأخيرة بالنلز:** كي Position في الأول، وحرّك النل البعيد **+650 px على Z** والتاني **+330 px**، وارجع في الاتجاه العكسي لحد Z = 0 (باونس في آخر الفرد). Easy Ease، وزحزح كيز النل التاني كام فريم.
10. **الكاميرا:** امسح الأولى وعمل جديدة افتراضي Parent لـ Null 3D، وحرّك X من شمال لـ يمين.
- **تنويع:** غيّر Angle/Tilt/Radius، وغيّر النلز اللي بتاخد دفعة Z، وخلّي Radius Expand Per Turn أكبر من 1 للفة حلزونية (لفيفة سكرول) بدل أسطوانة ضيقة.

## 3) وصفة: ريبون متسلسل ملفوف (Chained Ribbon)
اللوك: شريط طويل عليه نص بيلف زي رقم 8، ظل ناعم على الأرض. إفكت واحد وشرايط كتير.
1. كومب «Texture-1» **7680 × 2500** (طويل جدًا ونص متحرك). Solid + الإفكت وامسح الافتراضي.
2. أول شريط: **Size 1920 × 250** (ربع عرض التكستشر). Material Source = التكستشر، **Image Size = Original** (Fit نفس النتيجة بس لأن الارتفاعات متطابقة)، Image Border = Repeat.
3. ضيف كاميرا. اربط الشريط بنفس خطوات (Create Parent → Detach → Lines → Select) **بس علّم Move to Layer** في الـ Select: النقط بتتحرك لمركز اللاير فالنل يبقى في نص النقط بالظبط.
4. الشريط التاني: Add بنفس 1920 × 250 ونفس التكستشر. سمّي النلز: Link 1 وTangent 1 وTangent 2 وLink 2، ولوّن التانجنتس أصفر.
5. كرّر التانجنتين ولينك واحد (النلز اللي هتتحكم في شريط 2) وزوّد X بـ **+1920** (اكتب «+1920» في Position X). الـ 7 نلز متساوية البعد.
6. أول خط في السطح 2 > Control Points > Select، **Move to Layer** مفعّل، واختار «Link 2»، فحافتا الشريطين يتربطوا بنفس اللاير (دي «السلسلة»). اربط الخطوط الباقية بباقي النلز.
7. كل **Tangent Parent للينك** اللي جنبه. لما تدوّر لينك الشريط بينحني بنعومة.
8. **درز التكستشر:** فعّل Foldspace UI، حدد السطح 2 > Material > Transform Image > **Position X** (اتقرأ -107.00 بعد الضبط، Y 0، Rotation 0، Scale 100%) لحد ما النص يتظبط. الرقم بالعين مش معادلة (**تقريبي**).
9. لكل شريط زيادة: +1920 X للنلز، لينك جديد، تانجنتين، وإزاحة Transform Image. وبعدين لف اللينكات (وآبائها) عشان الشريط يتلوي.
- **قاعدة:** كل لينك بيتحكم في نقط على **سطحين** مرة واحدة، فبيضمن الاستمرارية. التانجنت بيتحكم في ميل المنحنى عند الوصلة.

## 4) ميزات زيادة
- **تحريك نقطة مربوطة:** تقدر تحركها بالـ UI وتبقى نسبية للاير (زي الـ Parenting).
- **Attach to Layer(s) > Time Offset (sec.)** (اتشاف 0.5): العنصر بيمشي ورا حركة اللاير متأخر بالوقت ده. Offset مختلف لكل نقطة في خط واحد مربوط بلاير = حركة قماش/علم عضوية.
- **Material > Time** (لما Source Type = Layer): Time Mode وTime Offset (sec.). مع تكستشر فيديو، أسطح مختلفة بنفس اللاير تعرض لحظات مختلفة (التلات كروت اتشافوا بأوقات مختلفة).
  - **Still Frame:** فريم واحد دايمًا، تختاره بالـ Time Offset.
  - **Current Layer Time:** الفيديو يبدأ من In-point لاير الريندرر؛ تحريك الريندرر يحرّك الفيديو.
  - **Image Source Time:** يبدأ من بداية لاير التكستشر نفسه؛ تحريك الريندرر ما يغيّرش الفريم، وتحريك التكستشر هو اللي يغيّر.
- مشاهد عرض: ورقة بتتقشّر (وش أسود وضهر أبيض بظل)، وكتاب بصفحات بتتقلب.

## 5) النسخة 1.4: الظل وShadow Catcher
- **تلات مفاتيح لازم يتفعّلوا:** (1) Render Settings > Shadows > **Enable Shadows** (وفيه Quality افتراضي 50)، (2) على لايت AE: Light Options > **Casts Shadows = On** (Spot أو Parallel، والـ Point اشتغل في مشهد الكتاب)، (3) على السطح: **Casts / Accepts Shadows**.
- لايت AE فيه كمان **Shadow Darkness** (100%) و**Shadow Diffusion** (بكسل، افتراضي 0): الـ Diffusion بيطرّي الظل (لو اللايت بيدعمه).
- **Material لكل سطح:** Accepts Lights، Accept Shadows، Casts Shadows، **Shadow Catcher** (كلها شغالة افتراضيًا إلا الأخير). Shadow Catcher = السطح بيختفي وظله اللي بيستقبله يفضل ظاهر (ورقة حمرا مطوية على خلفية زرقا بتحتفظ بظلها على الزرقا). Casts Shadows Off يشيل ظل السطح.
- **الأداء:** الظل الناعم تقيل (مشهد الكتاب 157–173 ms للفريم). Render Settings > Anti-aliasing من Super Sampling (SSAA) لـ **Multi Sampling (MSAA)** نزّل لـ 79–104 ms من غير فرق ملحوظ. القاعدة: ظل ناعم تقيل = MSAA. (Anti-aliasing Sample 4X في المشهد؛ و«Use Composition Space» checkbox موجود في Render Settings.)
- **Surface List** (Surfaces > Surface List): كل الأسطح في قايمة، كليك لتحديد، العين تخفي، سحب لإعادة الترتيب، قلم أو دبل كليك لإعادة التسمية، وتحتها Create Surface Add... وDuplicate Selected وDelete Selected.

## 6) الكاميرا والنور والـ Render Pass
- **الكاميرا:** كاميرا AE (20 mm في اللافتة) و«Use Composition Camera» موجودة. **النور:** لايتات AE (Ambient وParallel وSpot وPoint) بتتقري، والمجموعة Lights في الإفكت. Ambient + Parallel 50% في اللافتة.
- **Render Pass** (Final Render ظاهر) موجود؛ الـ Depth/Normals/UV ما اتجرّبوش (**غير متحقق**).

## 7) حدود وأخطاء
- السطح الافتراضي مش مطلوب: امسحه الأول.
- مقاس السطح **= مقاس التكستشر** وإلا اتمط.
- باراميترات الـ Roll ما بتتحركش بكي مباشر: Control Layer.
- درز بين الشرايط: Transform Image Position X دايمًا.
- الظل محتاج التلات مفاتيح (5). الظل الناعم بطيء: MSAA.
- **غير متحقق:** Divisions وThickness وOrigin وسلوكهم، والـ Render Pass Depth/Normals/UV، ومنحنيات الـ Graph (اتشافت بـ 1 fps بس). تعليق 1.4 بيقول «أقل من 800 ms» والعداد على الشاشة بيقول 79–104 ms.
- **ضهر السطح بيعرض النص مقلوب لو استخدمت نفس التكستشر:** اضبط الـ Back بتكستشر لوحده.
- إصدار AE: شوف السطر الأول (المكان).

## 8) أفكار استخدام لشغل المونتير (خطوات + Native)
| الفكرة | البناء | البديل Native |
|---|---|---|
| **ورقة بتتفرد/بتتلف (لوك الورق في ريل نص 3D)** | سطح واحد بمقاس الورقة، Front وBack تكستشرين مختلفين، Roll بـ Control Layer بكي على Angle وTilt وRadius، وظل 1.4 على الفيديو بـ Shadow Catcher | **CC Cylinder** بـ Rotation `time*50` ([الوصفة](../After-Effects/recipe-3d-text-camera-paper-reel.md) القسم 7)، أو Radius بكي |
| **قلب صفحة / ورقة بتتقشّر** | أسطح طويلة (واحد لكل صفحة)، Front = صفحة أ وBack = صفحة ب، Null لكل عمود، لف نلز الحافة وادفع اللي في النص على Z، والظل يثبّتها. للقشرة: سطح واحد وش أبيض وضهر أسود، اربط عمود الركن بـ Null وحرّكه ودوّره، وShadow Catcher لأرضية | **CC Page Turn** (قلب)، أو لايرين 3D بـ Rotation Y على Anchor عند الحافة |
| **لافتة بتتفرد (Lower Third، سكرول)** | القسم 2؛ Radius Expand Per Turn > 1 للفة حلزونية | **Linear Wipe** + Scale X من Anchor، أو CC Cylinder على بري-كومب |
| **ريبون / شريط نص بيلف (اسم براند)** | القسم 3؛ كومب التكستشر نفسه بنص متحرك يتلف للّوب ← شريط لانهائي | CC Bend It على بري-كومب طويل، أو لايرات 3D بتتصل ببعض |
| **شاشة أو كارت UI منحني** | سطح بتكستشر فيديو أو كارت، Thickness 20–40 للحواف، وTime Mode = Still Frame أو Image Source Time لو كذا كارت من فيديو واحد | **CC Bend It** على بري-كومب أو لاير 3D بميل |
| **كارت/علبة بتتطوي أو بتتفتح** | أسطح جنب بعض (واحد لكل جزء) ونقطها بنلز، لف نلز الحواف | كل جزء بري-كومب 3D بـ Anchor على خط الطي + Rotation Y ([plugins-by-need](plugins-by-need.md) FoldCraft للأسرع) |
| **نص ملفوف على سطح (دوامة كلمات)** | كومب نص (بالعربي مبني ومخبوز جوه الكومب) كـ Texture على سطح منحني؛ كاميرا ودوف Native | لايرات نص 3D لكل كلمة بميل ([الوصفة](../After-Effects/recipe-3d-text-camera-paper-reel.md) القسم 2) |
| **علم / قماش** | نقط خط مربوطة بـ Null واحد، وTime Offset مختلف لكل نقطة | Wave Warp أو Turbulent Displace على لاير |
| **ظل بس فوق لقطة حقيقية** | سطح Shadow Catcher تحت عنصر فوق الفيديو، ريندرر بخلفية شفافة | Drop Shadow على لاير بـ Matte أو Shadow Catcher من 3D |

## 9) عربي وتسليم
- **التكستشر عبارة عن كومب عادي:** النص العربي واتجاه RTL شغالين لما يتبني ويتحرك جوه الكومب (الوصلات مخبوزة) وبعدين يدخل Foldspace. ما تعملش per-character animators جوه كومب التكستشر.
- **الضهر مقلوب:** الوش الخلفي بيعرض النص معكوس؛ ظبط الـ Back بتكستشر لوحده.
- **لبريمير:** كومب Foldspace لوحده بخلفية شفافة (من غير BG Solid) بـ Dynamic Link. وShadow Catcher بيطلّع الظل فوق اللقطة مع ريندرر شفاف.

## 10) على ذوقنا
- الأداة بتغري بلف كتير؛ لفة واحدة بحركة بطيئة وإضاءة هادية (Ambient + Parallel 50%) وظل ناعم، وتكستشر بسيط. ما تخلطش كذا سطح بيلف مع بعض لو الريل هادي.
- أكسنت واحد في التكستشر، وجلو همسة لو فيه.
- الباونس في دفعة Z: باونس البيت (أوفرشوت صغير) مش مطاطي.
