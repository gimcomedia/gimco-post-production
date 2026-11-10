# وصفة: تحريك فيد سوشيال

- **الاستخدام:** لما الكلام عن السوشيال نفسها.
- **المكان:** نصي
- **المتطلبات:** مش محتاج
- **البديل Native:** Native
- **الفهرس:** [INDEX](../INDEX.md)

---

## مذاكرة مرجع موشن: «Instagram Lenta Animation»
- **الفكرة:** إعادة بناء بوست إنستجرام كامل كموشن، في كومب 1080×1920: اسم اليوزر، والصورة، وأيقونات قلب وكومنت وإرسال وحفظ (PNG من icons8)، وعدادات بتعدّ (107، 54، 143، 907)، وسطر المزيكا.
- **الحركة:**
  - أغلب الدخول بـ Animation Composer presets (Transition In، اسمها «TR In»).
  - الارتداد بـ «MDS Elastic Controller»، سودو إفكت إكسبريشنه: amp = (1)/200، و freq = (2)/30، و decay = (3)/10، مع نفس منطق الـ Inertia.
  - Scale سريع 4–10 فريم.
  - النص بيتكشف بـ Text Percent Offset في حوالي 41 فريم.
- **اللوك:** Deep Glow، و CC Light Sweep، و Fill، و Drop Shadow، و Fast Box Blur، و Motion Tile، و Keylight و Color Range لعزل الإيموجي.
- **إمتى تستخدمها:** لما الريل فيه «بوست» أو «ريفيو» أو «رسالة مريضة»: ابني الـ UI حقيقي بالأيقونات، وحرّك العدادات، وحط Glow و Light Sweep خفيف، والارتداد بـ Elastic Controller.
