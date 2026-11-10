# بريستات نص Trend 2026 + إكسبريشن النطّة والألوان

- **الاستخدام:** نص بينط ويتلوّن كلمة كلمة.
- **المكان:** بريستات افتر
- **المتطلبات:** البريستات
- **البديل Native:** الإكسبريشنز في الملف Native
- **الفهرس:** [INDEX](../INDEX.md)

---

## بريستس Trend 2026 (صاحب الباك): عبدالله بيحبها جدًا
متسطّبة في AE: `Effects & Presets > User Presets > Trend 2026 - صاحب الباك`، والمصدر الأصلي `Desktop\Trend 2026`. محتاجة **Deep Glow 2** و**Sapphire** (موجودين عنده).

| البريست | فيه إيه | يتحط على | امتى نستخدمه في ريل الدكتور |
|---|---|---|---|
| icon style | Gradient Ramp، و CC Light Sweep، و Bevel Alpha، و Deep Glow 2، والسويب ماشي بـ `time*50` | لاير أيقونة/شيب | الأيقونات والكروت عشان تبان لامعة 3D ومنوّرة |
| liquid color | Fractal Noise، و Box Blur، و Tint، والـ Evolution بـ `time*40` | Solid أو شيب | خلفية لونها سايل ومتحرك، أو فيل جوه نص أو كارت |
| text style | Fractal Noise، و Tint، و CC Light Sweep، و Bevel Alpha، و Noise Alpha، و Deep Glow 2، بـ `time*20` | لاير نص | الكلمة المفتاحية أو التيتل الكبير |
| pixel transition | Sapphire S_WipePixelate، و Light Sweep، و Deep Glow 2 | لاير داخل/خارج | نقلة دخول وخروج بيكسلات منوّرة للتيتلز والكروت |
| roughen text animation | Roughen Edges متحرك | لاير نص | دخول نص بحواف متكسّرة، ستايل خشن |
| text animation 1 | أنيميتورات (Position 3D، و Scale، و Rotation، و Opacity، و Fill Color، و Skew)، و Color Control، و Deep Glow 2 | لاير نص | دخول الكلام كلمة كلمة بنطّة ولون |

**الوصفة المشتركة (لوك شبهها من غير البريست):** Fractal Noise + Tint (لونين من الباليت) + Bevel Alpha + CC Light Sweep + Deep Glow 2، وكل حاجة "بتعيش" بإكسبريشن `time*20` لحد `time*50` على الـ Evolution أو مركز السويب. يعني لمعة ماشية دايمًا من غير كيفريمات.

### إكسبريشن النطّة (Bounce) على Position الأنيميتور
بيتحط على Position في أنيميتور (Based On: Words أو Characters). كل كلمة بتدخل متأخرة شوية، وبتتزحلق من الجنب وتنط وتهدى:
```
delay = 0.12; freqY = 3; decayY = 10; ampY = 180; slideX = 250; decayX = 7; freqX = 1.6; arcAmount = 45; randomize = 0.35;
seedRandom(textIndex, true); rnd = random(-1, 1);
myDelay = delay*textIndex + rnd*randomize*delay;
t = (time - inPoint) - myDelay;
if (t >= 0){ ampYr = ampY*(1 + rnd*0.25); slideXr = slideX*(1 + rnd*0.15);
  bounceY = ampYr*Math.cos(freqY*t*2*Math.PI)/Math.exp(decayY*t);
  slideIn = -slideXr*Math.cos(freqX*t*2*Math.PI)/Math.exp(decayX*t);
  arc = -arcAmount*Math.exp(-decayX*t)*Math.abs(Math.sin(t*6));
  [slideIn, bounceY + arc] } else { value; }
```
- `delay`: الفرق بين كل كلمة. `ampY` و `slideX`: قوة النطّة والزحلقة. `decay`: سرعة الهدوء. `randomize`: عشوائية خفيفة عشان ما تبقاش آلية.
- **للعربي:** خلي `slideX` سالب (الكلام بييجي من اليمين)، وقلّل `ampY` لحوالي 90–120 في الريلز 720×1280.

### إكسبريشن الألوان (3 ألوان بتلف على الكلمات)
3 أنيميتورات، كل واحد فيه Fill Color مربوط بـ `effect("Color Control")("Color")` (أو 3 Color Controls)، و Expression Selector، والـ Amount ده، مع تغيير `targetIdx` لـ 0 و1 و2:
```
var targetIdx = 0; var delayT = 0.12; var randomizeAmt = 0.35; var colorDuration = 0.35; var colorCount = 3;
seedRandom(textIndex, true); var rnd = random(-1, 1);
if (textIndex % colorCount != targetIdx) { 0; } else {
  var myDelay = delayT*textIndex + rnd*randomizeAmt*delayT; var t = (time - inPoint) - myDelay;
  if (t < 0){ 0; } else { var prog = ease(t, 0, colorDuration, 0, 1); (1-prog)*100; } }
```
الكلمة بتدخل بلون من التلاتة وبتهدى للون الأصلي في 0.35 ثانية. لازم `delayT` يساوي `delay` بتاع النطّة عشان اللون والحركة يمشوا مع بعض.

### قواعد استخدامها في شغلنا
- خلي ألوان Tint و Color Control من باليت البراند/الريل، مش ألوان البريست الافتراضية.
- الجلو والسويب للكلمة المفتاحية أو الأيقونة بس، مش لكل الكابشن، عشان ما يزحمش وش الدكتور.
- البريستس دي بتتطبّق في AE على كومب الريل نفسه (الريل كله بيتعمل جوه افتر).
