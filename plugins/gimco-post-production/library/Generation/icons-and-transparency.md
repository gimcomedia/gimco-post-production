# نظام الأيقونات الفاخرة والشفافية

- **الاستخدام:** أيقونات جلاس فاخرة، وطلعها PNG/فيديو شفاف.
- **المكان:** نصي
- **المتطلبات:** كونيكتور توليد + إزالة خلفية
- **البديل Native:** أيقونات line في افتر بـ Trim Paths
- **الفهرس:** [INDEX](../INDEX.md)

---

## نظام أيقونات البراند (Premium Icon Design System)
مش كل أيقونة لازم تبقى 3D Glass. عندنا 5 ستايلات أساسية و2 للمشاريع الخاصة:

| # | الستايل | الدور | يتستخدم في |
|---|---|---|---|
| 01 | **Clinical Crystal 3D** | التوقيع البصري (Signature) | افتتاح الفيديو، Skin Builder، التجميل، الأعضاء والمفاهيم الطبية |
| 02 | **Scientific Micro-Sculpture** | الشرح العلمي | PLLA، PDRN، Exosomes، الكولاجين، مقاومة الإنسولين، تركيب الجلد |
| 03 | **Precision Monoline** | العمود الفقري اليومي | معلومات ونصايح الدكاترة، المواعيد، الخدمات، العناصر الصغيرة في الموشن |
| 04 | **Luxury Duotone / Solid** | الإعلانات والموشن السريع | مميزات المنتجات، المقارنات، مراحل التقييم، الإعلانات الخليجية المينمال |
| 05 | **Architectural 2.5D** | شرح الأنظمة والمكونات | الكراسي الطبية، وضعية الجسم، أجهزة العيادات، أجزاء المنتج |
| 06 | **Liquid Glass UI** | خاص | المؤتمرات، Tech-Medical، واجهات المستقبل |
| 07 | **Satin Metal Sculpture** | خاص | Brand Films، Logo Reveals، Product Hero |

**مين يستخدم إيه:**
- براند عناية بالبشرة: Crystal + Scientific.
- VIONDA / GLOWTOX EXO: Scientific + Crystal.
- دكتور طلال والمحتوى السينمائي: Crystal + Monoline.
- براند أجهزة/أثاث طبي: Duotone + 2.5D.
- توعية طبية وريلز المتكلم: Monoline + Scientific.
- المؤتمرات والبراندينج: Liquid Glass + Satin Metal.
- إنفوجرافيك وموشن سريع: Monoline + Duotone.

**باليت البراند المقترحة للأيقونات:** Ivory مطفي، و Aqua شفاف، و Deep Teal للتفاصيل، و Champagne Gold كـ Accent بس. الريفرنسات اللي عبدالله بيحبها كمان فيها Violet/Indigo منوّر وأزرق سماوي، فدول متاحين لما الريل نفسه ألوانه كده.

### القواعد الخمسة لأي أيقونة
1. **الرمز قبل الخامة:** رمز واحد مفهوم من أول نظرة، مش رموز فوق بعض.
2. **Material DNA ثابت:** نفس الزجاج والإضاءة والحواف والألوان جوه العيلة. أول أيقونة تنجح تبقى **Style Reference** لباقي العيلة.
3. **قابلة للتحريك:** الرمز منفصل عن البلاطة، عشان نقدر نعمل Assembly أو Rotation أو Light Sweep.
4. **نسختين:** فاتح وغامق، والتفاصيل واضحة في الاتنين.
5. **ملفات إنتاج:** PNG شفاف عالي الجودة للمجسم، و SVG للفيكتور (Monoline و Duotone ممكن `images_to_svg` أو `images_generate_svg`).

### تشريح الأيقونة اللي عبدالله بيحبها (من ريفرنساته)
- بلاطة **Squircle** (مربع بزوايا مدورة جامد) زجاج سميك بحرف شفاف بيكسر الضوء، أو بلاستيك Soft-Touch لامع.
- **مايلة 15–30°** في الفراغ (مش مواجهة للكاميرا)، كأنها طايرة، وأحيانًا Isometric.
- **الرمز أبيض/Frosted بارز** (Embossed) فوق البلاطة بسُمك حقيقي وظل ناعم تحته.
- **Rim Light منوّر** على حرف البلاطة، و Glow ملوّن حواليها، ولمعة Specular على الركن.
- **خلفية:** جراديانت غامق (Navy → Indigo → Violet) مع إضاءة جانبية، أو رمادي فاتح نضيف بظل ناعم، أو سماوي.
- **عمق ميدان:** حرف بعيد ممكن يغبش شوية، والإضاءة من فوق-يمين.

### برومبتات الأيقونات (غيّر [SYMBOL] و [PALETTE] و [BG])
**01 Clinical Crystal 3D:**
```
A premium 3D app-icon sculpture: a thick rounded-square (squircle) tile of frosted ivory glass with a clear aqua glass rim that refracts light, floating and tilted about 20 degrees in space. On its face, a single embossed [SYMBOL] in matte white with fine deep-teal detailing and a tiny champagne-gold accent, with real thickness and a soft contact shadow. Studio lighting: soft key from top right, elegant rim light along the glass edge, subtle specular highlight on the corner, gentle aqua inner glow. Physically accurate refraction and caustics, crisp clean edges, no plastic look. Centered with generous margin, [BG]. No text, no letters, no logo.
```
**02 Scientific Micro-Sculpture:**
```
A scientific micro-sculpture of [SYMBOL e.g. collagen triple helix / exosome vesicle / skin cell layers], simplified into an elegant museum-grade object made of translucent aqua glass and frosted ivory resin with delicate deep-teal internal structures and a few champagne-gold particles. Macro studio photography, soft gradient lighting, subtle subsurface scattering, shallow depth of field. Clean, precise, beautiful, not anatomical gore. Centered, [BG]. No text.
```
**03 Precision Monoline:**
```
A single minimal line icon of [SYMBOL], uniform 2px geometric stroke, rounded caps and joins, consistent 24px grid, open clear counters, no fill, no shadow, no gradient. Stroke color [white or deep teal #0E5E63], optional single champagne-gold dot accent. Flat vector, centered on a plain solid [BG] background. No text.
```
**04 Luxury Duotone / Solid:**
```
A bold duotone vector icon of [SYMBOL]: smart mix of solid shapes and lines in two colors [deep teal #0E5E63 and champagne gold #C9A96E], clean geometric construction, flat, no 3D, no texture, generous negative space, instantly readable at small size. Centered on plain solid [BG]. No text.
```
**05 Architectural 2.5D:**
```
An architectural 2.5D isometric icon of [SYMBOL e.g. medical chair / spine support system], built from clean stacked geometric layers with consistent 30-degree isometric perspective, soft simple shadows, matte ivory and deep-teal surfaces with one aqua accent. Minimal, precise, product-diagram feel, less detail not more. Centered, [BG]. No text.
```
**06 Liquid Glass UI:**
```
A liquid-glass UI icon: a translucent rounded-square glass tile with layered frosted panes and soft refraction of a colorful blurred backdrop, thin bright specular edge, a single white [SYMBOL] glyph floating inside with soft inner glow. Apple-style liquid glass, clean, futuristic medical-tech. Slight tilt, [BG]. No text.
```
**07 Satin Metal Sculpture:**
```
A premium sculpture of [SYMBOL] in brushed satin silver with soft champagne-gold details and one small clear glass element, on a subtle pedestal shadow. Luxury product hero lighting, soft reflections, fine brushed texture, elegant and restrained. Centered, [BG]. No text, no logo.
```
**[BG] حسب الاستخدام:**
- للتفريغ: `seamless pure flat light grey #E9E9E9 background, soft contact shadow only` (أسهل تفريغ للزجاج الفاتح)، أو `pure black #000000 background` للأيقونات المنوّرة اللي هتتحط بـ Screen.
- كادر كامل: `deep navy to indigo gradient background with soft side light` أو `warm cream studio background`.

## الشفافية: إزاي الأيقونة تطلع PNG/فيديو شفاف
مفيش موديل في Magnific بيطلّع ألفا مباشرة، فالطريقة:
1. **ولّد على خلفية سادة واحدة** (رمادي فاتح أو أسود صافي)، 1:1، بدقة 2k.
2. **صورة شفافة:** `images_remove_background` على الصورة → PNG بألفا. اتأكد إن حرف الزجاج ما اتقصّش ولا الجلو اتشال.
3. **الزجاج والجلو** بيضيعوا شوية مع التفريغ. البديل الأنضف للأيقونات المنوّرة: ولّد على **أسود صافي**، وفي بريمير/افتر استخدم Blend Mode **Screen**، أو Unmult (موجود في Deep Glow) عشان الأسود يختفي والجلو يفضل.
4. **أيقونة متحركة شفافة:**
   - حرّك الصورة اللي خلفيتها سادة (مش المفرّغة) بـ Kling 2.5.
   - بعدين `video_remove_background` (موديل General Use (Heavy) أو Matting، و refineForeground) → WebM VP9 بألفا.
   - أو لو الخلفية أسود صافي: سيبها وحطها بـ Screen. ده الأضمن مع الجلو.
   - لو بريمير ما قراش ألفا الـ WebM، حوّله لـ ProRes 4444 (في AE: Import ثم Render بـ ProRes 4444 + Alpha).
5. **في الكادر:** الأيقونة ProRes 4444 بكادر كامل ومكانها جوه الكادر من الأول (زي ما عملنا في ريل سابق)، و Scale 66.7 على سيكونس 720×1280.
