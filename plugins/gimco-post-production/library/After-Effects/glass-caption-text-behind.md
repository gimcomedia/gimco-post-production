# جلاس حقيقي فوق المتكلم، كابشن 3 درجات، نص ورا المتكلم

- **الاستخدام:** كروت الجلاس اللي بتكسر الفيديو، والكابشن الملوّن، والكلمة ورا الشخص.
- **المكان:** نصي
- **المتطلبات:** إفكت Liquid Glass (اختياري)
- **البديل Native:** Displacement Map + Blur على نسخة الخلفية
- **الفهرس:** [INDEX](../INDEX.md)

---

## الجلاس الحقيقي فوق المتكلم (إفكت Liquid Glass بـ Refraction / Glass Body / Specular)
إفكت بيكسر الفيديو اللي ورا الشكل فعلًا (مش Blur وبس). لو مش موجود عندك، نفس القيم بالتقريب تتنقل لـ Glassary أو للجلاس اليدوي.
1. **الشكل:** Shape أبيض. للقوس: Rectangle طويل، والركنين اللي فوق مدوّرين بالكامل، وطالع من تحت الكادر على صدر المتكلم وتحت وشه. أو Pill نازل من فوق. أو 3 Pills أفقي فوق بعض لليستة.
2. **Liquid Glass على الشيب:** Source Layer = لاير الفيديو (لو فيه أكتر من شيب، كل شيب Source بتاعه الفيديو). Quality: Standard.
3. **Refraction:** Strength 350، Scale 50، IOR 1.3 (1.5 = انكسار أقوى).
4. **Glass Body:** Thickness (Blur) 9، Tint أبيض مزرق، Tint Opacity 0–10، Opacity 100.
5. **Specular Highlights:** Intensity 200–300، Softness 0–1، Edge Width 5–8، Light Angle −45° (من فوق شمال)، Light Color أبيض، Highlight Distance 50.
6. **Noise** فوقه: Amount 2%، من غير Color Noise. اللمسة دي هي اللي بتخلي الجلاس يبان حقيقي.
7. **النص جوه الجلاس:** كلمة Bold بيضا بـ Glow بلون الخلفية، وفوقها كلمة صغيرة، وتحتها كلمة Script رفيعة + سطر صغير.
8. **الحركة:** الشكل يطلع من تحت الكادر بـ Position + Inertia، والعنوان يدخل بشعاع Light Sweep/Flare بيعدّي على الكادر.
9. **Shadow (جوه الإفكت نفسه):** Enable، Opacity ≈67، Distance ≈19، Softness ≈63 = الـ Pill بتقوم من الكادر من غير Drop Shadow منفصل. قسم **Chromatic Aberration** و **Edge** موجودين برضه للحرف الملوّن.
10. **Glass Body للـ Pill الصغيرة تحت النص:** Thickness (Blur) ≈1 (المتكلم يفضل باين جواها)، **Tint Color = لون البراند** (أصفر في ست أصفر)، Tint Opacity 2–5% بس. لو زاد، الجلاس يبقى بلاستيك ملوّن. Quality: High للرندر.
11. **قيد لاير المصدر:** الإفكت بيكسر **لاير واحد بس** (Source Layer). لو المصدر صورة الخلفية، النص والأرقام اللي فوقها **مش هتبان** جوه الجلاس. الحلول: (أ) اقبله لو الجلاس تحت العناصر مش فوقها. (ب) اعمل Pre-compose للخلفية + العناصر في كومب واحد وخليه هو المصدر (وفوقهم نسخة مخفية). (ج) الجلاس اليدوي (Adjustment Layer + Fast Box Blur + Transform Scale) بيكسر كل اللي تحته.
12. **الـ Pill كمرجع للنص:** Rect حوالي 668×220، Roundness ≈59 (من Rectangle Path). النص اللي جواها Parent على لاير الشيب، فيتحرك معاها. الدخول: Size من (0, 50) للحجم الكامل في حوالي 35 فريم + Position طالع من تحت (حوالي 120px)، Easy Ease. وبعدها النص يدخل بالباونس متأخر شوية.

## الكابشن بباليتة 3 درجات (التنفيذ)
- لاير كنترول فيه 3 Color Controls: Dark / Mid / Light.
- الكلمة الـ Bold: Gradient Ramp من Mid لـ Light، و Deep Glow بلون Dark (Exposure خفيف، مش نيون صريخ).
- الكلمة الصغيرة: Script جوه كبسولة لونها Light بشفافية، أو الكلمة نفسها Light.
- Adjustment فوق الفيديو: Tint/Color Balance ناحية Mid بـ 10–20%، ويتغير مع كل باليتة جديدة.
- **دخول البكسل:** 6–10 مربعات صغيرة (Shape Rect) بألوان الباليتة، Opacity بـ Hold Keyframes بتظهر وتختفي عشوائي حوالين الكلمة في 4–8 فريم، والكلمة بتدخل حرف حرف بـ Blur.

## النص ورا المتكلم + فلاشات القطع
- **النص ورا المتكلم:** Roto Brush على الراس والكتاف (من غير Refine Edge) → Ctrl+D للفيديو → النص بين النسختين. الكلمة ضخمة وبتطلع برا حدود الكادر، وممكن ستروك متشخبط بلون الأكسنت حواليها بـ Trim Paths.
- **فلاش سيلويت:** نسخة من لاير الروتو عليها Fill أبيض (أو أسود) 1–3 فريم عند الكت.
- **فلاش نيجاتيف:** Adjustment عليه Invert + Black & White لمدة فريمين بين القسمين.
- **Whip بالكارت:** الكارت يطير Position كبير في 4–6 فريم مع Motion Blur (Shutter 360)، والكادر الجاي يدخل تحته.
- **زرار جلاس يدوي** (CC Glass بماتي أبيض + Camera Lens Blur + CC Light Sweep Add) لما مفيش بلاجن الجلاس: [recipe-product-ui-motion-piece](recipe-product-ui-motion-piece.md) (8.1).
