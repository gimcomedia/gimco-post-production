# وصفة: مشهد واجهة تطبيق كامل على كانفاس 3D (عناصر بتدخل بستاجر، كيرسر بيدوس، كاميرا بتنط بين الأقسام، وبوست)

- **الاستخدام:** لما الكلام فعل بيتعمل جوه تطبيق أو موقع («ادخل على الريل»، «شوف أرقامه»، «اكتب اللينك»)، والمطلوب واجهة مالية الشاشة بتتبني عنصر عنصر، وكيرسر بيدوس، وكاميرا بتتنقل بين أقسامها من غير كت. فيه الطريقة المشتركة، ومشهدين مبنيين بالقيم: بروفايل غامق ← كليك ← كارت تحليلات بحلقة ← بلاطات أرقام؛ وبار بحث بيتكتب ← موقع بأقسامه.
- **المكان:** نصي
- **المتطلبات:** سكرين شوتس من الواجهة الحقيقية · خط UI (SF Pro / SF Arabic) · أيقونة كيرسر PNG · Deep Glow 2 (متسطب؛ الأساسي)
- **البديل Native:** البناء كله بإفكتات افتر الأساسية، والجلو بـ Glow الأساسي لو اتنقل المشروع لجهاز تاني (الأساسي: Deep Glow 2)
- **الفهرس:** [INDEX](../INDEX.md)

---

الأرقام مقروءة من تلات بناءات على كومب 1080×1920 @29.97fps: مشهدين هنا، والتالت (فيد فاتح بكومنتات) في [recipe-social-feed-ui](recipe-social-feed-ui.md). نقطة بداية تتظبط على الكومب والواجهة. «تقريبي» = متقدّر من مكان الكيفريمات على التايملاين مش من خانة قيمة. الجلو في المصدر Deep Glow بإصداره الأول؛ عندنا Deep Glow 2 بنفس القيم (Radius، Exposure، Blend Mode)، و Native: Glow الأساسي مرتين (Radius صغير وكبير، Intensity واطي) والقيم بالعين.

## الأقسام

الوصفة متقسمة: كل قسم في ملف لوحده. **افتح القسم اللي الطلب محتاجه بس**، مش الكل.

| القسم | الحجم | الملف |
|---|---|---|
| 1) إمتى، وإيه اللي بيتشاف | 2.4 KB | [recipe-app-ui-scene-3d-canvas/1.md](recipe-app-ui-scene-3d-canvas/1.md) |
| 2) الطريقة: خطة ← تصميم ثابت كامل ← تحريك بستاجر ← بوست | 2.6 KB | [recipe-app-ui-scene-3d-canvas/2.md](recipe-app-ui-scene-3d-canvas/2.md) |
| 3) الكومب والكانفاس | 3.4 KB | [recipe-app-ui-scene-3d-canvas/3.md](recipe-app-ui-scene-3d-canvas/3.md) |
| 4) ابني اللي هيتحرك، والباقي سكرين شوت | 5.0 KB | [recipe-app-ui-scene-3d-canvas/4.md](recipe-app-ui-scene-3d-canvas/4.md) |
| 5) الدخول: نطّة واحدة لكل العناصر، وستاجر | 4.4 KB | [recipe-app-ui-scene-3d-canvas/5.md](recipe-app-ui-scene-3d-canvas/5.md) |
| 6) الكيرسر، والتركيز على اللي بيتداس | 1.3 KB | [recipe-app-ui-scene-3d-canvas/6.md](recipe-app-ui-scene-3d-canvas/6.md) |
| 7) الكاميرا: بتنط للمنطقة اللي عليها الكلام | 2.1 KB | [recipe-app-ui-scene-3d-canvas/7.md](recipe-app-ui-scene-3d-canvas/7.md) |
| 8) البوست | 2.0 KB | [recipe-app-ui-scene-3d-canvas/8.md](recipe-app-ui-scene-3d-canvas/8.md) |
| 9) المشهد «أ»: بروفايل غامق ← كليك ← تحليلات ← بلاطات | 10.3 KB | [recipe-app-ui-scene-3d-canvas/9.md](recipe-app-ui-scene-3d-canvas/9.md) |
| 10) المشهد «ج»: بار بحث ← موقع | 6.7 KB | [recipe-app-ui-scene-3d-canvas/10.md](recipe-app-ui-scene-3d-canvas/10.md) |
| 11) للعربي | 2.1 KB | [recipe-app-ui-scene-3d-canvas/11.md](recipe-app-ui-scene-3d-canvas/11.md) |
| 12) على ذوقنا وفي مسارنا | 2.4 KB | [recipe-app-ui-scene-3d-canvas/12.md](recipe-app-ui-scene-3d-canvas/12.md) |
| 13) مشاكل وحلول | 3.0 KB | [recipe-app-ui-scene-3d-canvas/13.md](recipe-app-ui-scene-3d-canvas/13.md) |
| 14) ملفات المشروع | 0.4 KB | [recipe-app-ui-scene-3d-canvas/14.md](recipe-app-ui-scene-3d-canvas/14.md) |
