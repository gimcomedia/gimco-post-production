# طرق البناء: سكربت ذكي، دفعات، يدوي بالـUI

- **الاستخدام:** اختيار طريقة البناء حسب المتاح.
- **المكان:** نصي
- **المتطلبات:** السكربتات المذكورة (غير متاحة في المصدر، شوف LOCATIONS)
- **البديل Native:** الوصفة اليدوية بالـUI (~15 دقيقة)
- **الفهرس:** [INDEX](../INDEX.md)

---

## البيلد الذكي (الأساسي للكومبيزشنز) — `scripts\abdallah_build.jsx`
### الخطوات
1. **افحص:** اختار الكومبيزشنز في Project panel (أو مفيش اختيار = كله) → شغّل `scripts\abdallah_inspect.jsx` → اقرا `reports\inspect.txt` (stage). فيه لكل ليير: نوع، parent، ترانسفورم + كيفريمز، النص (فونت/حجم/leading/rect)، الإفكتات، محتوى الشيب (Rect/Star/Ellipse/Trim/ألوان)، و**LAYOUT HINT**.
2. **اكتب `<root>\jobs.json`** (المثال `scripts\jobs.example.json`):
```
{ "intro": 0.9, "hold": 2.5, "export": false, "overwrite": false, "saveAs": "work/<اسم>/<اسم> Mogrts.aep",
  "jobs": [ {"src": "Pre-comp 2", "key": "PC2", "name": "Dot Glow Word", "text": "عبـــدالله", "size": 50,
             "layout": "corner-dot", "layers": {"dot": "Circle"}} , ... ] }
```
   layouts:
   | layout | layers | الكنترولز اللي بتتعمل |
   |---|---|---|
   | `corner-dot` | dot | Circle Color · Circle Offset · Circle Scale (الدايرة لازقة في ركن النص فوق يمين) |
   | `side-stars` | right, left, rightGlow, leftGlow | Stars Color · Stars Distance · Right/Left Star Offset · Right/Left Star Scale |
   | `frame` | frame (المستطيل؛ الأركان = عياله parented) | Frame Color · Frame Padding X/Y · Corner Color · Corner Scale |
   | `line-stars` | line, right, left, rightGlow, leftGlow | Line Color · **Line Width** · **Line Thickness** · Line Extend · Line Offset Y · Stars… |
   | (من غير layout) | — | نص + جلو بس |
   ودايمًا: Title Text · Text Position · Line Spacing · Text Color · Accent Color · Glow Color · Glow Size · Glow Intensity · Sweep Speed (لو فيه لايت سويب متحرك) · Spin Speed (لو فيه روتيشن).
   - `"overwrite": false` → لو الماستر موجود (وفيه شغل يدوي) بيتعدّى. خليها true بس لو عايز تعيد البيلد من الصفر (هيمسح الجروبات اليدوية).
3. **انسخ jobs.json للفولدر بالـcommit، وشغّل `abdallah_build.jsx`.** اقرا `reports\batch\build_report.txt`: لازم `expression errors ... : 0` لكل جوب.
4. **بص بالعين:** `scripts\abdallah_snap.jsx` → `reports\snap\<KEY>_0/1/2.png` (نص الدخول/الهولد/نص الخروج) + `<KEY>_recolor.png` (الألوان متغيرة لأزرق/أخضر — إثبات إن الكنترول شغال). اعمل contact sheet بـPIL وبص مرة واحدة.
5. **الجروبات في البانل يدوي** (تحت) + كومنت.
6. **التصدير لما عبدالله يقول:** من البانل (Export Motion Graphics Template) أو `"export": true`. بعدها `abdallah_postprocess.py` لو محتاج thumbnail/رقم تعريف جديد.

### إزاي البيلد بيشتغل (عشان تصلّحه لو اتكسر)
- **Duplicate** للكومب → الماستر اسمه `Abdallah Mogrts <KEY>` (الإكسبريشنز بتستخدم thisComp فمش مربوطة بالاسم).
- **ليير "Controls"** Null (disabled + guide) عليه كل الكنترولز كـExpression Controls. **الكنترولز لازم تتضاف قبل أي إكسبريشن بيستخدمها** — إكسبريشن لإفكت مش موجود بيتقفل (disabled) في صمت.
- **"Title Text"** ليير نص مخفي (Opacity 0) هو اللي بيتعرض في EGP؛ كل ليرز النص المرئية Source Text بتاعها إكسبريشن منه:
  `style.setText(s.value+"").setFont(st.font).setFontSize(fs).setFauxBold(st.isFauxBold).setFauxItalic(st.isFauxItalic).setAutoLeading(false).setLeading(fs*LS/100)` → الفونت/الحجم/البولد من بريمير بيوصل لكل الطبقات + Line Spacing. Text Position = position الليير المخفي، والمرئية بتتحرك بالفرق.
- أول ليير نص مرئي يتسمى **"Main Text"** وهو اللي بنقيس منه الصندوق.
- **خريطة الوقت T_** (بدل time remap): كل خاصية عليها كيفريمز → `valueAtTime(T_)`، وكل إكسبريشن فيه `time` → يتبدّل بـ`T_`:
```
var I_=0.9, O_=0.9, oS_=thisComp.duration-O_;
var T_ = time < I_ ? time : (time < oS_ ? I_ : Math.max(0, I_*(thisComp.duration-time)/O_));
```
  الدخول بيلعب، الهولد واقف على آخر فريم دخول، الخروج = الدخول بالعكس، ومع Responsive Design الهولد بيطوّل في بريمير.
- **حركة في الهولد:** CC Light Sweep Center (لو عليه كيفريمز) بيعمل ping-pong هادي بـ `0.4 × Sweep Speed/100` من سرعته، ومن غير قفزة. Rotation (لو عليها كيفريمز) = `valueAtTime(T_) + Spin Speed × وقت الهولد` (20°/ث افتراضي؛ 0 يوقف؛ سالب يعكس).
- **Texto_in (bounce لكل حرف):** `myDelay = delay * textIndex` بيتبدّل بـ `Math.min(delay, 0.35/Math.max(1,textTotal)) * textIndex` → أي طول كلام بيخلص دخوله في ~0.9ث ومفيش حروف غامقة في الهولد. مفاتيح Range Offset بتاعة الخروج القديم (Texto_out المكسور) بتتشال.
- **الصندوق (BOX):** `r = Main.sourceRectAtTime(I_)` → `toComp` للركنين → L/R/T/B/CX/CY. الفروق الأصلية (dX/dY/المسافة/البادينج) بتتقاس وقت البيلد من الكومب الأصلي، فالافتراضي = نفس شكل التصميم الأصلي.
  - **corner-dot:** pos = [R+dX, T+dY] + Offset + حركة الدخول (valueAtTime(T_) − آخر كي).
  - **side-stars:** [R + Distance, CY+dy] / [L − Distance, CY+dy] + Offset لكل نجمة.
  - **frame:** Rect Size = [R−L+2·PadX, B−T+2·PadY]، الأركان (عيال المستطيل) = [±(W/2+ox), ±(H/2+oy)].
  - **line-stars:** الخط على **كشيدة آخر سطر**: `lineY = Main.toComp([0,(nLines−1)·leading + k·fontSize])[1]` (k بيتحسب وقت البيلد، ≈ −0.235 لثمانية)، `W = ((R−L)+2·Extend)·Width/100`، Scale = `[100·W/W0, s[1]·Thickness/100]` (الخط أفقي فسكيل Y = سُمك)، والنجوم على الطرفين.
- **الألوان:** Hue/Saturation على أول الليير، Colorize = 1، `rgbToHsl(color)` → Hue = h·360، Saturation = s·100، Lightness = (l−0.5)·200. Deep Glow inner = لون الشكل، outer = Glow Color. لون الخط والإطار المتقطع (لون صريح أصلًا) = إكسبريشن على Stroke/Fill Color. نص: أنيميتور "Abdallah Text Color" (Fill) متحرك لأول الستاك، والأحمر في أنيميتورز Texto_in = Accent Color.
- **الجلو:** Deep Glow Radius = `value × Glow Size/100`، Exposure = `value × Glow Intensity/100` (نسبة، فبيحافظ على اختلافات الطبقات).
- **حماية:** ماركرز Intro (0→I) و Outro (D−O→D) protected على الماستر.
- **فحص الأخطاء:** في الآخر بيجبر كل إكسبريشن يتقيّم (`valueAtTime`) ويطبع اللي فيه `expressionError` (ما عدا Texto_out القديم).

## الجروبات في البانل (يدوي — الطريقة اللي اشتغلت)
1. Primary dropdown في EGP → اختار الماستر.
2. **كبّر البانل:** ☰ جنب Essential Graphics → Panel Group Settings → **Maximize Panel Group** (وبعد ما تخلص نفس المكان → Restore Panel Group Size). الـbacktick ما اشتغلش.
3. **الترتيب النهائي:** `Text` (Title Text, Text Position, Line Spacing, Text Color, Accent Color) → جروب الشكل (Circle / Stars / Frame / Line & Stars) → `Glow & Motion` (Glow Color, Glow Size, Glow Intensity, Sweep Speed, Spin Speed) → الكومنت.
4. **الطريقة:** ابني من تحت لفوق:
   - اختار آخر عنصر (غالبًا Title Text أو آخر حاجة اتضافت) → Add Formatting > **Add Group** → الجروب بيتحط **بعده على طول**.
   - سمّيه: **دبل كليك على اسم الجروب → اتأكد بزوم إن الخانة زرقا → Ctrl+A → اكتب → Enter**.
   - **السحب = `computer_left_click_drag` بس** (mouse_down/move/up ماحركش حاجة). اسحب الكنترول من **اسمه** لـ**هيدر الجروب** → بيدخل **أول** الجروب ⇒ اسحب بالترتيب العكسي.
   - بعد كل سحبة: الصفوف اللي تحت اللي اتشال بتطلع صف (~17.6px)، والهيدر بيطلع صف. احسب الإحداثيات من زوم واحد واعمل 2–3 سحبات في batch وبعدين زوم.
   - بعد كل سحبة كليك في **مساحة فاضية فوق القايمة** (مش تحتها: تحت ممكن يبقى الكومنت أو سلايدر).
   - ابدأ بـGlow & Motion (بعد آخر عنصر) ← جروب الشكل (اختار Title Text → Add Group = قبل Glow) ← Text (اختار Title Text → Add Group).
5. **الكومنت:** كليك في مساحة فاضية تحت كل العناصر (من غير اختيار) → Add Formatting > Add Comment → دبل كليك على خانة الاسم الشمال → Ctrl+A → `@abdallah.film` → Enter. القيمة: دبل كليك يمين → Ctrl+A → Backspace → كليك برا.
6. **مدى السلايدر:** Edit Range → خانة "to" → Ctrl+A → الرقم → Tab → OK. (Line Width 300، Line Thickness 500، الباقي حسب الجدول في postprocess).
7. **خطر:** الكليك على مساحة الصف = ممكن يقع على السلايدر ويغيّر القيمة (حصل: Line Thickness بقت 34.9). اختار الصفوف من **الاسم** (x صغير)، وراجع القيم بعد كل جروب. السكرول بالماوس فوق السلايدر برضه بيغيّره.
8. Ctrl+S في الآخر.

## إضافة كنترول جديد يدوي (من غير سكربت)
1. اختار ليير Controls → Effect > Expression Controls > Slider/Color/Point Control.
2. اسمه: في Effect Controls اختار الإفكت → **Enter** → Ctrl+A → اكتب → Enter. القيمة: دبل كليك على الرقم → Ctrl+A → اكتب → Enter (Slider الافتراضي 0!).
3. الإكسبريشن: اختار الليرز → **`e` مرتين (key repeat 2)** يظهر الإكسبريشنز (الكتابة السريعة "ee" ما اشتغلتش) → كليك على نص الإكسبريشن → Ctrl+A → Ctrl+C → `computer_read_clipboard` → عدّل → `computer_write_clipboard` → Ctrl+A → Ctrl+V → كليك في مساحة فاضية في الفيوير للتأكيد.
4. للـEGP: في التايملاين اختار الليير → `e` → افتح الإفكت → **كليك يمين على "Slider" → Add Property to Essential Graphics**. (السحب من Effect Controls مابيشتغلش.)

## الطريقة السريعة للدفعات (تمبلتات الكاش) — `guava_batch.jsx` + `postprocess.py`
(للتمبلتات اللي جايه من `Motion Graphics Template Media` — فولدرات GUID فيها `.aegraphic` = zip فيه aep.)
1. **فك دفعة (10–15) في السحابة:** stage الـaegraphics → unzip كل واحد في `work\<اسم>\` (الـaep يتسمّى `<اسم>.aep` + `(Footage)` بنفس المسار؛ احذف `*Report.txt` بـ `rm -f "${d:?}"/...` — الـrm بمتغير لازم `"${d:?}"`) → commit → `queue.txt` سطر لكل `work\<اسم>\<اسم>.aep`. ملف اسمه فيه U+202F (سكرينشوتات ماك) ممكن الـcommit يرفضه → missing في AE، عادي لو مش مستخدم.
2. **`scripts\guava_batch.jsx` مرة واحدة** (من غير dialogs). لكل مشروع: قص الماستر الطويل لآخر outPoint؛ براند + Ligatures؛ لو **دخول بس**: يظبط المدة (أطول من intro×2+8 → intro×2+5، أقصر من intro×2+1.5 → intro×2+2 مع الليرز والبريكومبات) ويعمل **خروج معكوس** بالكيفريمز؛ قص الذيل الفاضي؛ حماية في الماستر وكل بريكومب؛ حفظ؛ تصدير **خام** `templates\raw\`؛ تقرير `reports\batch\<اسم>.txt` + `_summary.txt`. ~5 دقايق لـ8 تمبلتات؛ راقب بسكرين 0.4 كل 45ث أو اقرا `_summary.txt`.
3. **من غير AE:** stage الـraw mogrts → unzip → contact sheet من `thumb.png` (PIL) → أسماء.
4. **`definition.json`:** `clientControls` لستة مسطحة بترتيب البانل **من غير GropDropZone**. type 10 = جروب (`value` = ids العيال وبعده العيال)، 8 = كومنت، 6 = نص، 4 = لون، 2 = سلايدر، 5 = نقطة، 9 = scale، 3 = زاوية، 14 = ميديا (لو اسمه اسم بريكومب زي `Shape Layer 1 Comp 1` أو `box` = placeholder يتشال). `fonteditinfo.capPropFontEdit/FontSizeEdit/FauxStyleEdit` = تعديل الفونت من بريمير.
5. **التسمية/الجروبات:** `abdallah_postprocess.py` (بالأسماء + capsuleID جديد). القديم `postprocess.py config rawDir outDir` بالأرقام (`rename` {رقم: اسم}، `groups` [[اسم,[أرقام]]]، أي رقم مش مذكور يتشال؛ الأرقام = أرقام الـdefinition مش AE — غلطت فيها مرة في Photo Clip Card؛ الإعدادات في `scripts\batchN.json`) — ومابيغيّرش capsuleID فبريمير ممكن يعرض نسخة قديمة.
6. commit لـ `templates\vN\` → عبدالله يجرّب.
- الدفعة مابتعملش layouts ذكية؛ لو الشكل لازم يمشي مع النص → افتح المشروع وشغّل البيلد الذكي. التمبلتات الخاصة (ربط لون مغطّى، عدّاد، نصين مربوطين) باليدوي أو سكربت مخصوص.

## الطريقة اليدوية بالسكربتات القديمة (حالات خاصة لتمبلت واحد)
1. فك الـaegraphic في `work\<اسم>\` وافتحه (Ctrl+O + المسار).
2. `guava_controls.jsx` ثم `guava_smart.jsx` → **No** (تقرير بس).
3. براند: `guava_rebrand_text.jsx`. أسماء قبل أي حذف: `setMotionGraphicsControllerName` بالأرقام من `_controls.txt`.
4. حذف وجروبات في البانل (القسم تحت). "GropDropZone" ونهايات الجروبات اسمها "Group" → في السكربت أرقام صريحة مش بحث بالاسم.
5. خروج: `guava_add_outro.jsx` (نسخ كيفريمز الدخول + Time-Reverse، بيقلب ease/interpolation/spatial tangents، جوه البريكومبات، بيعدّي loop أو كي واحد). لو وقف → Edit > Undo وشغّله تاني.
6. حماية وتصدير: `guava_smart.jsx` → Yes. اسم قديم → خانة Name + `guava_export_only.jsx`.
7. افحص الـmogrt: `capsuleName`، `hasFrozenUnstretchableRegions: true`، الكومنت، مفيش volt. **التجربة في بريمير هي الإثبات.**

## `abdallah_postprocess.py` (بعد التصدير)
`python abdallah_postprocess.py jobs.json <rawDir> <outDir> [snapDir]`:
- **capsuleID جديد كل مرة** — بريمير بيخزّن الموجرت برقم تعريفه؛ نفس الرقم = بيفضل يعرض النسخة القديمة (ده اللي خلّى عبدالله يشوف كنترولز مقلوبة ومن غير جروبات).
- جروبات بالاسم **لو مفيش جروبات أصلًا** (لو اتعملت في البانل بيسيبها)، أي كنترول مش معروف بيروح لجروب الشكل (مابيتشالش).
- الفونت/الحجم/الستايل editable، مدى السلايدرز، `thumb.png` من `snap\<KEY>_1.png`، الكومنت بالاسم.
- يشتغل في السحابة على نسخة staged، والناتج يتعمله commit لفولدر **جديد** (`templates\vN\`).

## الوصفة اليدوية بالـUI (لما مفيش سكربتات/فولدر) — ~15 دقيقة
1. **افحص:** Ctrl+A على الليرز ثم `U`، `E` للإفكتات، Ctrl+K للمدة.
2. **المدة:** Ctrl+K → كليك على خانة Duration → اكتب → Tab → OK.
3. **الخروج المعكوس:** اختار أسماء الخصائص (Start وshift End) → Ctrl+C → الوقت في خانة التايم كود → **اختار نفس الخصائص في الهدف** → Ctrl+V → Animation > Keyframe Assistant > Time-Reverse Keyframes.
4. **الحماية:** Composition > Responsive Design — Time > Create Intro / Create Outro.
5. **النص العربي:** دبل كليك على النص في الفيوير → Ctrl+A → `computer_write_clipboard` → Ctrl+V → كليك برا.
6. **الفونت:** Essential Graphics > Source Text > Edit Properties (Custom Font + Font Size)، و Ligatures من Properties.
7. **إضافة الخصائص:** كليك يمين على الخاصية في التايملاين > Add Property to Essential Graphics (أو سحب من التايملاين).
8. **الأسماء/الجروبات/الكومنت:** القسم فوق.
9. **Set Poster Time** على فريم الهولد (لحظة الجلو، مش بعد ما يخلص).
10. **Export لما عبدالله يقول:** Ctrl+S → Export Motion Graphics Template → Local Drive → OK → في حوار الحفظ اكتب المسار الكامل + الاسم `.mogrt` → Enter (المرة التانية: OK → Replace).
11. **تحذيرات متوقعة → OK:** بلجن خارجي (Deep Glow)، فونت مش Adobe Fonts (thmanyah/Borscha)، Advanced 3D، Media Replacement. قول لعبدالله إن الفونت والبلجن لازم يكونوا متسطبين.
- اللصق من غير اختيار الخصائص في الهدف بيعمل Animator جديد بالغلط → Ctrl+Z. دبل كليك على اسم الليير في التايملاين = rename مش edit نص. `KP_Enter` مش مفتاح صالح.
- لون نص بإكسبريشن من ليير تاني لسه شايل الفونت القديم كإعداد → تحذير فونت؛ غيّر فونته الأساسي.
