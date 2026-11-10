# وصفات: إفكت الكليك (حلقة نقاط، مربعات بكسل، دايرة وكرات)

- **الاستخدام:** لحظة ضغط زرار أو اختيار.
- **المكان:** نصي
- **المتطلبات:** مش محتاج
- **البديل Native:** Native
- **الفهرس:** [INDEX](../INDEX.md)

---

## وصفة: Click Visual Effect (من مرجع، AE 2025، كومب 1920x1080 @60fps)
الدائرة دايمًا متمركزة بالظبط على نقطة الضغط، وتتمدد 2-3 ثواني. كل الكيفريمات Easy Ease وأعلى سرعة عند الضغطة.

### Click 1: حلقة نقاط (Halftone)
1. Ellipse بدون Fill، Stroke أبيض سميك. Ellipse Path > Size: 0 -> خارج الشاشة (~3535 -> 3930).
2. كومب "Dots" 30x30 px فيه دائرة بيضاء صغيرة متوسّطة. في الرئيسي: اسحبه للركن العلوي الأيسر، CC RepeTile (Expand Right 2434, Down 704, Tiling Repeat) حتى تملأ الشاشة.
3. Dots = Track Matte للدائرة.
4. على الدائرة: Turbulent Displace (Turbulent, Amount 500, Size 20, Offset 1178.5/663, Complexity 1, Pin All, AA Low) ثم Gaussian Blur 200 ثم Deep Glow 2 (Exponential, Screen, Radius 1000, Exposure 0.5). لون الستروك = لون الواجهة.

### Click 2: كشف مربعات بكسل
1. دائرة ستروك أبيض سميك، Size 0 -> خارج الشاشة. Pre-compose باسم Click Effect.
2. جوهه: Solid أسود تحت الدائرة + Fractal Noise (Fractal Type Max, Noise Type Block, Contrast 100, Brightness -35, Complexity 1, Evolution expression: time*250). الـ Solid = Track Matte للدائرة. Gaussian Blur 200 على الدائرة.
3. الرئيسي: شكل قاعدة الـ UI = Track Matte لكومب Click Effect، Blend Mode = Add.
4. Tritone (Midtones = لون البراند) ثم Deep Glow 2 Exposure 0.1. لو المربعات كبيرة: صغّر كومب Click Effect وأعد توسيطه.

### Click 3: ترانزيشن دائرة + كرات
1. دائرة Fill أبيض بدون Stroke، Scale 0 -> تملأ الشاشة (~881%). الشاشة الجديدة (كومب/فيديو/UI) = Track Matte للدائرة.
2. Turbulent Displace (Amount 50, Size 71, Offset 1178.5/663, Complexity 1, Pin All, AA Low).
3. CC Ball Action: Grid Spacing 8, Shading -75, Coloring Medium, Twist Property X Axis, Rotation Axis X. أول الحركة Ball Size 20 / Scatter 0، منتصفها Ball Size 300 / Scatter 160 (منحنى جرس)، Easy Ease وعدّل السرعة لانفجار سريع للخارج.
- **كليك على زرار UI نفسه** (زرار بيتحول بين حالتين، موجات بيل متراصة، دايرة بتتحول لحقل) بكيرسر على مسار: متغيرات في [recipe-product-ui-motion-piece](recipe-product-ui-motion-piece.md) (القسم 7).
