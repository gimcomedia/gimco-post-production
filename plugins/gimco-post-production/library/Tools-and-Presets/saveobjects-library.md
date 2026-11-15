# مكتبة عناصر UI جاهزة (SaveObjects)

- **الاستخدام:** عنصر UI صغير جاهز (شارت، تشيك ليست، سيرش، نوتيفيكيشن، جلاس بوكس).
- **المكان:** Documents\SaveObjects_Assets (اسم الفولدر ظاهر على الجهاز)
- **المتطلبات:** After Effects
- **البديل Native:** بناء العنصر بـ Shape Layers + Inertia
- **الفهرس:** [INDEX](../INDEX.md)

---

## المكتبة
- **المكان:** `Documents\SaveObjects_Assets\Motions Essences` (114 بروجيكت) و `...\Wife` (216 بروجيكت). كل عنصر في فولدر فيه .aep و .gif معاينة و .png، وأحيانًا خطوط .ttf. الكتالوج الكامل في `Documents\Gimco_Motion_Skill\asset-library.md`.
- **الستايل:** عناصر UI صغيرة على خلفية شفافة: كروت مدوّرة بيضا أو غامقة، وماوس بيدوس، وتشيك ليست، وبروجريس بار، وجلاس/ليكويد بوكس فوق الفيديو، ونيون لاين.
- **توظيفها في ريلز المتكلم:**
  - Charts و Progress_Bar: أرقام ونسب (مثلًا 1 من كل 10 ستات).
  - Checklist و Checkbox: الأعراض أو الخطوات.
  - Toggles V_X/X_V: خرافة ولا حقيقة.
  - Search Bar: البحث عن اسم المرض.
  - messages و IG_Comment: سؤال مريضة.
  - Notification: تذكير بالموعد.
  - Time و Countdown: أيام الدورة والمواعيد.
  - Maps Location_Pin: مكان العيادة.
  - Level Up: مراحل العلاج.
  - Liquid/Glass و Box: كروت معلومة فوق الدكتورة.
  - Cinematic_Bars و Lined_Background: لقطات انتقالية.
- **إزاي تتنزل:**
  1. افتح الـ .aep في افتر وغيّر النص والألوان (السلايدرز موجودة).
  2. انسخ الكومب (أو Import للـ .aep) جوه كومب الريل في افتر فوق الدكتورة، مش رندر بألفا لبريمير.
  3. اتأكد إنها ما تخبطش في الكابشن (حوالي Y 60–70% من الكادر) ولا في كروت VOLT.

## المكتبة (SaveObjects)
- **المكان:** `Documents\SaveObjects_Assets\Motions Essences` (114 بروجيكت) و `...\Wife` (216 بروجيكت). كل عنصر في فولدر فيه .aep و .gif معاينة و .png، وأحيانًا خطوط .ttf. الكتالوج الكامل في `Documents\Gimco_Motion_Skill\asset-library.md`.
- **الستايل:** عناصر UI صغيرة على خلفية شفافة: كروت مدوّرة بيضا أو غامقة، وماوس بيدوس، وتشيك ليست، وبروجريس بار، وجلاس/ليكويد بوكس فوق الفيديو، ونيون لاين.
- **توظيفها في ريلز المتكلم:**
  - Charts و Progress_Bar: أرقام ونسب (مثلًا 1 من كل 10 ستات).
  - Checklist و Checkbox: الأعراض أو الخطوات.
  - Toggles V_X/X_V: خرافة ولا حقيقة.
  - Search Bar: البحث عن اسم المرض.
  - messages و IG_Comment: سؤال مريضة.
  - Notification: تذكير بالموعد.
  - Time و Countdown: أيام الدورة والمواعيد.
  - Maps Location_Pin: مكان العيادة.
  - Level Up: مراحل العلاج.
  - Liquid/Glass و Box: كروت معلومة فوق الدكتورة.
  - Cinematic_Bars و Lined_Background: لقطات انتقالية.
- **إزاي تتنزل:**
  1. افتح الـ .aep في افتر وغيّر النص والألوان (السلايدرز موجودة).
  2. انسخ الكومب (أو Import للـ .aep) جوه كومب الريل في افتر فوق الدكتورة، مش رندر بألفا لبريمير.
  3. لو ضروري يروح بريمير لوحده: ProRes 4444 بألفا، بس الـ Blend Modes والجلاس هيضيعوا.
  4. اتأكد إنها ما تخبطش في الكابشن (حوالي Y 60–70% من الكادر) ولا في كروت VOLT.

## مجرّب في شغل حقيقي (ريل آلاء 2)
- **Liquid Box (Wife، v1 دهبي … v4 تيل):** كومب 441×441 فيه لاير نص واحد للّيبل (خطه Raman-Bold، واتغيّر لـ thmanyahsans-Bold). الصندوق بيطلع، والليبل يكتب نفسه، والسايل يتملي بموجة. بيشتغل كطبقة شفافة فوق بريمير، لأنه مش معتمد على الفوتيدج اللي تحته. اتنين جنب بعض = مقارنة بين حاجتين (موافقة البنك / قرارك المالي).
  - لما اتعمل Import لـ v1 و v4 في نفس المشروع طلعوا كومب واحد مشترك، فتغيير ليبل واحد غيّر التاني. اعمل Duplicate للكومب لكل ليبل، واللون التاني بـ Hue/Saturation (Master Hue) على اللاير في الكومب الأب.
- **Sun Liquid UI و iOS Liquid Box و Liquid Glass:** الانكسار بياخد من الفوتيدج اللي تحتهم، فكطبقة شفافة فوق بريمير بيبانوا فاضيين. استخدمهم بس لو كليب المتكلم جوه الكومب، وإلا ارسم الشكل Native بنفس الفكرة.
- **UI Cursor (Type_Grab / Type_Grabbed):** كومب 202×202 لكل إيد. بدّل بين Grab و Grabbed على لحظة المسكة، والإيد الاتنين تحت Null واحد للحركة.

## مشاهد «Scenes For saveObject»
### كارت الجلاس المنوّر (Glass Panel، و Glowing Glass Cards من مرجع)
أنسب وصفة لكروت المعلومة الطبية الفخمة فوق الدكتورة.
- **الطبقات من تحت لفوق:**
  1. Background و Grid خفيف.
  2. Glow ورا الكارت بيلف ببطء ("Glow Rotator"، Rotation حوالي 80 فريم).
  3. Panel Shadow.
  4. الكارت نفسه: المحتوى ورا الكارت عليه Box Blur (الفروستد)، معمول بـ Track Matte (Luma) لشكل الكارت.
  5. Displacement Map على حرف الكارت (انكسار زي الزجاج).
  6. Panel Outline: ستروك جراديانت رفيع.
  7. Panel Light: لمعة، ومعاها CC Light Sweep.
- **الكنترول:** لاير «Color» فيه سلايدرز Glow Hue و Lightness و Saturation، و Text Color و Background و Grid Color. لاير «Edit Glass Panel» فيه حجم الكارت والـ Overshoot.
- **الحركة:** الكارت بيكبر بـ Rect Size في حوالي 25 فريم. النص بيتكشف بـ Text Percent Offset في 41 فريم. الإيزينج ناعم: 17/33 و 33/84 و 84/33. إكسبريشن Overshoot لكيين بسلايدرز Frequency و Amplitude و Decay.

### Text List (مرجع)
- قايمة سطور نص يمين وشمال، كل سطر بيدخل بـ Position و Scale و Opacity و Tracking في 20–30 فريم.
- الإيزينج **80/80** (حاد في النص قوي).
- لاير «Controller» واحد فيه ألوان كل سطر. النصوص في كومبات «Edit Your Text Here» والمحتوى بيقرأ منها بـ sourceText.
- مفيد لقايمة أعراض أو خطوات علاج.

### SaaS Text Presets (مرجع)
تيتلز نص قصيرة لجملة مهمة أو هوك.
- النص بيتكشف بـ Text Percent Start في 10–16 فريم، مع كلمة Highlight بلون تاني.
- وراه شيب بيطفو بـ `wiggle(0.7,50)`.
- الإيزينج 90/0 و 0/90 و 45/90.
- لاير «COLOR CONTROL» فيه Text Color و Highlight Color و BG Color، و Checkbox لإظهار الخلفية: `value * checkbox`.
- الخط Funnel Display.
