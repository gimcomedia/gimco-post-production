# عناصر بتتفاعل بالقرب (ProximityPro)

- **الاستخدام:** عناصر بتكبر أو تنوّر لما حاجة تعدّي جنبها.
- **المكان:** اسكربت
- **المتطلبات:** ProximityPro
- **البديل Native:** الفكرة اليدوية مكتوبة في الملف
- **الفهرس:** [INDEX](../INDEX.md)

---

## التفاعل بالقرب: عناصر بتتفاعل مع حاجة بتعدّي جنبها (ProximityPro v2.0)
السكربت: `ProximityPro.jsxbin` (Panel، من Window). نسخة عبدالله في `H:\montage\After Effects Assets\Tools by Function\Expressions & Automation\ProximityPro v2.0 Win + Mac`. الكود اتفك واتقرا كله، والكلام ده من الكود نفسه مش من الشرح بس.

### إمتى تستخدمه
- عندك **صف أو شبكة عناصر** (أيقونات، كروت، حروف، نقط، أعراض، أسنان) و**حاجة واحدة بتتحرك** وسطهم (كيرسر، صباع، خط سكان، عدسة مكبّرة، نقطة ضوء، بوينت متتبّع على إيد الدكتور)، وعايز كل عنصر يتفاعل لوحده على حسب قربه منها.
- البديل اليدوي إنك تعمل كيز لكل عنصر بستاجر، وده بيبوظ لو غيّرت مسار الحركة. هنا بتحرّك نل واحد بس، وكل حاجة بتمشي معاه.
- **مش محتاجه** لو العناصر بتظهر ورا بعض بترتيب ثابت، فاستخدم Text Animator أو ستاجر عادي. استخدمه لما **مسار حاجة بيتحرك** هو اللي بيقرر مين يتفاعل.

### إزاي بيشتغل (الفكرة اللي ينفع تعملها بإيدك من غير السكربت)
- بيعمل نل اسمه **Effector 1** (لونه أحمر، في نص الكومب)، وعليه سلايدر **Proximity Radius = 200px** وسلايدرات القوة لكل إفكت.
- على كل لاير بيحط إكسبريشن بيحسب المسافة بين الـ Anchor Point بتاع اللاير والـ Anchor Point بتاع النل، زي ما هم ظاهرين في الكومب:
```
var ctrl = thisComp.layer("Effector 1");
var ctrlPos = ctrl.toComp(ctrl.transform.anchorPoint);
var thisPos = thisLayer.toComp(thisLayer.transform.anchorPoint);
var dist = length(ctrlPos - thisPos);
var maxDist = ctrl.effect("Proximity Radius")("Slider");
var influence = linear(dist, 0, maxDist, 1, 0);   // 1 لازق فيه، 0 برا الدايرة
// مثال Scale Up: value * (1 + influence * amt)
```
- **الـ Anchor Point هو المهم:** المسافة بتتحسب منه. اعمل **Center Anchor** للشيبات والنصوص الأول (بيستخدم sourceRectAtTime)، وإلا العنصر هيتفاعل من ركنه.
- النزول **Linear** (من غير إيزينج): الحافة بتبان ناشفة. لو عايز نزول أنعم، غيّر في الإكسبريشن `linear(dist, 0, maxDist, 1, 0)` لـ `ease(...)` أو `easeOut(...)` (ده تعديل مننا، مش في السكربت). Color Shift وLook At فيهم سلايدر Falloff/Spread بيعمل منحنى بـ `Math.pow`.

### الإفكتات وقيمها الافتراضية (السلايدرات على الإفكتور)
| المجموعة | الإفكت | بيشتغل على | الافتراضي |
|---|---|---|---|
| Transform | Scale Up / Scale Down | Scale (بيضرب في القيمة) | 50% / 30% |
| | Push Away / Pull Toward | Position (يبعد عنه / يقرّب منه) | 100 / 50 px |
| | Position X / Y / Z | Position (بيزوّد على القيمة) | 50 px |
| | Rotation X / Y / Z | Rotation (بيزوّد) | 45° |
| | Skew | إفكت Transform (Skew + Skew Axis) | 30 / 0 |
| Effects | Fade Opacity / Reveal Opacity | Opacity | Intensity 100 |
| | Glow | Glow (Intensity بيتغيّر، والـ Threshold والـ Radius ثابتين) | 50 / 60 / 100 |
| | Drop Shadow | Opacity وDistance وSoftness بيتغيّروا، واللون والاتجاه ثابتين | 75 / 10 / 20 / 135° |
| | Exposure | Exposure | 2 |
| | Vibrance | Vibrance + Saturation | 50 / 0 |
| | Color Shift | لون Fill/Stroke **في الشيبات بس** (من Start لـ End) | أزرق ← أحمر وردي، Spread 50 |
| Look At | 2D | Rotation (يبص ناحية الإفكتور) | Strength 100، Falloff 1000 |
| | 3D | X/Y Rotation، وفيه Lock لكل محور | Strength 100، Falloff 50 |
| Time Remap | Play Forward / Reverse | Time Remap (القرب = الوقت) | Max = **1 ثانية** |

- الإفكتات اللي بتتحط: Transform = `ADBE Geometry2`، Glow = `ADBE Glo2`، Drop Shadow، Exposure = `ADBE Exposure2`، Vibrance.
- **Apply Proximity:** بيستخدم أول Effector موجود، أو بيعمل Effector 1 لو مفيش. **New Effector:** بيعمل Effector 2، 3... لمجموعة لايرز تانية. أي إفكت جديد بيزوّد السلايدرات بتاعته على نفس النل.
- لو اخترت Z أو Rotation X/Y أو Look At 3D، الإفكتور واللايرز بيتحولوا 3D لوحدهم.

### المطبات (من الكود، ومش مكتوبة في الشرح)
1. **إفكتين على نفس الخاصية = واحد بس اللي بيفضل.** كل إفكت بيكتب إكسبريشن جديد مكان القديم. وعلى نفس اللاير، اللي بيفوز هو اللي بيتطبّق آخر في ترتيب السكربت:
   - Scale Up + Scale Down ← **Scale Up** بس.
   - Position X/Y/Z + Pull + Push ← **Push Away** يغلب الكل (الترتيب: X ثم Y ثم Z ثم Pull ثم Push).
   - Fade + Reveal ← **Reveal**.
   - Look At 2D + Rotation Z ← **Rotation Z** يمسح الـ Look At. ونفس الكلام في Look At 3D مع Rotation X/Y.
   - Effector تاني على نفس اللاير ونفس الخاصية بيمسح الأول. يعني New Effector معمول **لمجموعات لايرز مختلفة**، مش عشان تجمع تأثيرين على نفس العنصر.
   - لو عايز تأثيرين على نفس الخاصية (مثلا يكبر ويقرّب)، اكتب إكسبريشن واحد يجمعهم بإيدك.
2. **الأسماء معكوسة في الأوباسيتي:** Fade Opacity = العنصر **بيظهر لما الإفكتور يقرّب** وبيختفي خالص لما يبعد (0% برا الدايرة). Reveal Opacity = **بيختفي لما يقرّب**. والاتنين **بيلغوا كيز الأوباسيتي** بتاعتك (مابيستخدموش value).
3. Glow وShadow وExposure وVibrance بيتحكم فيهم القرب بس. لو كان عندك قيمة ليهم قبل كده بتضيع. أما الـ Transform (Scale وPosition وRotation) فبيتزوّد على كيزك، **فالكيز بتاعتك بتفضل شغالة**.
4. **Color Shift:** للشيبات بس، وبيحوّل أي **Gradient Fill لـ Solid Fill** (والجريديانت مش بيرجع حتى لو عملت Remove).
5. **Time Remap:** بيعمل Precompose لوحده لأي شيب أو نص أو سوليد (اسمه `<الاسم>_TimeRemap`). لازم تغيّر **Time Remap Max** لطول الأنيميشن الحقيقي، لأنه افتراضيًا ثانية واحدة. وFar = فريم 0.
6. **Remove All خطير:** بيمسح **أي** إكسبريشن على Scale وOpacity وPosition وRotation (حتى إكسبريشنز الارتداد بتاعتنا)، وبيحذف أي Glow أو Exposure أو Vibrance أو Transform أو Fill أو Drop Shadow على اللاير، حتى لو انت اللي حاطه. استخدم **Remove Selected** (بيشيل الإفكتات المعلّمة بس) أو امسح بإيدك.
7. الربط **بالاسم**: لو غيّرت اسم «Effector 1» الإكسبريشنز هتضرب. وأي لاير اسمه بيبدأ بـ «Effector » السكربت بيعتبره إفكتور.
8. لو مش شغال: خلّي AE إنجليزي، وفعّل «Allow Scripts to Write Files» من Preferences > Scripting & Expressions. والتجريبي محدود بـ 3 لايرز وإفكتين.
9. مئات اللايرز = إكسبريشن على كل واحد، فالبريفيو بيتقل. لو العناصر كتير، قلّل عدد الإفكتات أو اعمل Pre-render.

### قرارات سريعة في ريلز المتكلم
- **Dock ماك (مثال الشرح):** صف أيقونات + Scale Up + Position Y (سالب، عشان يطلع لفوق) + Exposure خفيف، والإفكتور مربوط بالكيرسر (Parent أو Position من الكيرسر). Radius قد عرض أيقونتين لتلاتة.
- **سكان/أشعة بتعدّي:** خط ضوء بيمشي على شبكة (أسنان، أعراض، نقط) + Fade Opacity أو Glow + Color Shift (رمادي ← لون البراند). الإفكتور مربوط بالخط.
- **صباع الدكتور بيشاور:** Track Point على الصباع ← الإفكتور ياخد Position منه ← العناصر جنبه تكبر أو تنوّر. تفاعل حقيقي مع المتكلم من غير كيز.
- **عدسة مكبّرة على نص أو صورة:** حروف متفصّلة + Scale Up + Push Away خفيف (ماتحطش Position X/Y معاه لأنه هيمسحهم).
- **أيقونات بتبص للحاجة:** Look At 2D (الشيب لازم يكون **باصص لفوق** في الأصل، والـ Anchor في النص).
- **إيقاع عبدالله:** حرّك **الإفكتور** بإيزينج عبدالله (Out 33 / In 93) أو بإكسبريشن Inertia، والعناصر هتورث الإحساس ده. خلّي الـ Radius صغير عشان التفاعل يبقى مركّز، وماتكبّرش الـ Scale فوق 30–50%.

### نسخة إكسبريشن يدوية بإيزينج: نل CTRL يكبّر العناصر القريبة (من غير سكربت)
- **الاستخدام:** عناصر قليلة (3–10) وعايز تكبير بسيط بقرب نل واحد، من غير ما تثبّت ProximityPro. ملخّص: الوصفة في [recipe-product-ui-motion-piece](../After-Effects/recipe-product-ui-motion-piece.md) (القسم 33).
- **البناء:** Null اسمه **CTRL**، وعلى **Scale** كل عنصر (Alt+click على الستوب واتش، والاسم لازم يطابق بالظبط):
```
ctrl = thisComp.layer("CTRL");
d = length(position, ctrl.position);

maxDist = 400;
minScale = 100;
maxScale = 130;

s = ease(d, 0, maxDist, maxScale, minScale);

[s, s]
```
  (مقروء على الشاشة؛ ولّدها المدرّس من مساعد AI ببرومبت «proximity scale expression where a null controls the scale of a shape layer based on distance».) المنطق: المسافة بين العنصر والنل من 0 لـ 400px بتحوّل الـ Scale من **130%** (قريب) لـ **100%** (بعيد) بـ **ease** (حافة ناعمة). الصق نفس الإكسبريشن على باقي اللايرات (**E** مرتين لإظهاره).
- **الفرق عن ProximityPro:** (1) `ease` بدل Linear (النزول الناعم اللي الملف بيقترحه فوق)، (2) بيقارن `position` مباشرة: العنصر والنل لازم يكونوا في نفس الـ Parent/الفراغ وإلا استخدم `toComp` زي الكود فوق، (3) كل خاصية محتاجة إكسبريشن لوحدها (Position وRotation مش معمولين)، (4) مفيش Effects جاهزة ولا Remove، بس كمان مفيش مطب «إفكتين على نفس الخاصية»: الإكسبريشن واحد وبإيدك.
- **مطبّات:** تغيير اسم CTRL = خطأ إكسبريشن. القيم 400/100/130 نقط بداية: خلّي maxScale تحت 130–150% (المبدأ هنا: Scale 30–50% كحد أقصى).
- **عربي:** مفيش نص هنا. لو العناصر كلمات عربية، كل كلمة لاير بـ Anchor في النص (تفضل الوصلات سليمة) والنل ماشي في اتجاه القراءة (يمين لشمال).
