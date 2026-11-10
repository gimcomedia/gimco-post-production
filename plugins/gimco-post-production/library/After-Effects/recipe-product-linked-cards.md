# وصفة: كروت منتج مربوطة (Linked Comps)

- **الاستخدام:** إعلان منتج: كارت لكل ميزة وتجميعهم.
- **المكان:** نصي
- **المتطلبات:** مش محتاج
- **البديل Native:** Native
- **الفهرس:** [INDEX](../INDEX.md)

---

## تطبيق عملي: مشروع إعلان منتج سابق (إعلان منتج سابق، منتج عناية، 1080x1920)
مرجع حقيقي من شغل عبدالله: كروت أعراض/فئات (حرقان في الحلق، ضعف الصوت، تقرحات في الفم والحلق، لازم تدخل سريع، الأطفال، الحوامل، الكبار، مرضى الضغط والسكر، آمن على الجميع).

### الكارت الواحد (بري-كومب 1080x2500 أو 2500x2500، 4 لايرز)
1. **box** (شيب الكارت): Anchor على الطرف (-362,0) وScale X 0→100 في 0.46s (Y ثابت 84) + إفكت BOUNCr overSHOOT+ (Amplitude 50، Frequency 2، Decay 4) = الكارت بيتفرد من جنب بنطّة.
2. **الأيقونة PNG** (Fire/Sound/Mouth...): Scale 71 (بريست Position مش بيلمس السكيل، فالسكيل حر). بريست position 9/10 من محمود بعد ما اتعدّل: اتبطّأ للضعف تقريبًا (0 → 0.67s → 1.08s) وآخر دوران اتغير من 0 لـ -25° (الأيقونة بتستقر مايلة = شخصية). Elastic Controller 2 على Y Position والدوران. + Shadow Studio 3 (Light Direction 242، Distance 80، Softness 100، Shadow Length 200، Opacity 20%) = ظل ناعم.
3. **النص العربي**: Palestine-Regular 64، لون كريمي (1, 0.79, 0.52)، كشيدة مطوّلة (حــــرقان)، Text Animator Position + Range Selector Offset -100→100 في 1s (وخروج معكوس في الآخر) + overSHOOT.
4. **Shape Layer 2** = Alpha Matte للأيقونة والنص، فالأيقونة بتطلع من تحت جوه حدود الكارت.
- نفس الحركة بالظبط على اللوجو (Pre-comp 13): position preset معدّل، Y بيستقر 748، دوران 74 → -24.8.

### تجميع الكروت (Linked Comps)
- الكروت مترصّصة رأسيًا (Y تقريبًا 733 / 1082 / 1459 / 1829 بسكيل 73) وبتدخل ستاجر 0.6-0.9s.
- **Camera_Rig_Null**: كل الكروت Parent لنل واحد، وPosition الننل 960 → -977 في 0.56s (Bezier Out 100%) + overSHOOT = كل الستاك بيطير لفوق كترانزيشن خروج.
- Arrow Taper overlay: Luma Key (Threshold 158) + Tint أحمر غامق، Scale 163، دوران 84 = سهم/شعاع خلفي.
- الخلفية: bg.jpg + فيديو تكستشر بـ Blend Mode غير Normal وOpacity 66%.
- Comp 3: نحلة متحركة (Bee_Animation_From_Image.mp4) جرين سكرين مكيّدة بـ Keylight + Time Remap فريز.
- Comp 1 / Linked Comp 01: لوجو نص Auto-traced (Layer > Auto-trace = 8 ماسكات) بماسك باث متحرك 0.37→1.07s + Block Dissolve (Transition Completion 100→0 في 0.57s، Block Width/Height = thisLayer.width/4) = ظهور بلوكات.
