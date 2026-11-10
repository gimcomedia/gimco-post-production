# كتالوج مشاهد جاهزة للريبليس (vahid_graph)

- **الاستخدام:** كروت، عدادات، شارتات، أسئلة، بروفايل، أسهم، صح/غلط، خلفيات.
- **المكان:** جوه SaveObjects_Assets (المسار القديم لجهاز تاني في الملف)
- **المتطلبات:** After Effects + Deep Glow
- **البديل Native:** نفس منطق البناء (Animation Control + sourceRectAtTime) يدويًا
- **الفهرس:** [INDEX](../INDEX.md)

---

## مكتبة vahid_graph (101 مشهد جاهز للريبليس)

## إمتى تستخدمها وإزاي تدوّر
- أي مشهد في ريل محتاج أنيميشن حلو (كارت صورة، أو رقم بيعد، أو شارت، أو سؤال، أو اسم دكتور، أو سهم، أو صح وغلط، أو خلفية): دوّر هنا الأول قبل ما تبني من الصفر.
- خطوات الاختيار:
  1. ابدأ بفهرس "حسب الاحتياج" (القسم 3).
  2. اقرا وصف العنصر في القسم 4.
  3. لو محتاج تتأكد من الشكل، اعمل stage للـ `.gif` بتاعه من فولدره على جهاز عبدالله وبُصّ عليه.
- نسخة من الكتالوج ده محفوظة كمان عند عبدالله في `C:\Users\abdal\Documents\SaveObjects_Assets\vahid_graph\CATALOG_vahid_graph.md`.
- لو اتضافت عناصر جديدة في الفولدر: اعمل list للفولدر، وحلّل الجديد (المعاينة GIF + الـ .aep)، وحدّث الكتالوج والسكيل.
- الطريقة: Replace بس (الصورة والنص واللون والتوقيت) حسب المشروع. متبنيش العنصر من جديد.

المكان: `C:\Users\abdal\Documents\SaveObjects_Assets\vahid_graph\` وفيه 4 فولدرات: Animation (61) و Box (20) و Background (10) و Motion (10).
كل عنصر في فولدر باسمه، وفيه: `.aep` و `.gif` معاينة و `.png` و `(Footage)` و `Fonts`.
الستايل بتاع صاحب الباك صاحب الباك. اتعمل الكتالوج ده من الـ 101 معاينة GIF، ومن تحليل كل ملف .aep (الكومبات والطبقات والإفكتات والإكسبريشنز).

## 1) نظام البناء المشترك (اعرفه عشان تعمل Replace صح)
- **الكومب:** 1080×1920 في الغالب، والحركة كلها حوالي 1.5–3 ثواني. العناصر الصغيرة (كروت وبادجات) كومبها على مقاسها (مثلًا 767×514).
- **لاير Animation Control (أو Control 2):** Null فيه 5 سلايدرز: Width و Height و Position X و Position Y و Roundness.
  - مستطيل "Main Shape" (Size و Position و Roundness) مربوط بالسلايدرز دي.
  - باقي الطبقات (الستروك والجلو والماط والجلاس) مربوطة بالـ Main Shape.
  - يعني مقاس الكارت تغيّره من السلايدرز بس، مش من كل طبقة.
- **لاير Controller أو CTRL أو Main Controller:** Null بكيفريمات Scale و Position، والكارت متربّط بيه Parent. الدخول والخروج كله من عنده.
- **الارتداد (Inertia) على كل كيفريم تقريبًا:**
  - على السلايدرز نفسها: `amp=0.04; freq=1.8; decay=3` (أو decay 2.5).
  - على المقاسات: amp 0.08.
  - وفيه نسخ من X Pro Bounce بسلايدرز Amplitude و Frequency و Decay ظاهرة على اللاير.
- **X Pro: Center Lock:** الأنكور في نص الطبقة بـ sourceRectAtTime، عشان الكارت يكبر من نصه حتى لو النص اتغير.
- **sourceRectAtTime (autosize):** في 70% من العناصر. الكارت بيكبر ويصغر مع طول النص لوحده.
- **إكسبريشن صاحب الإكستنشن "Marker Name Based":** الحركة بتشتغل على ماركرز بالاسم جوه اللاير. حرّك الماركر عشان توقّت الدخول والخروج بدل ما تحرك الكيفريمات.
- **إكسبريشن تصليح العربي:** في Text_Animation بيحوّل ی ← ي و ک ← ك و ۀ ← ة. لما نكتب عربي مصري، اتأكد إن الإكسبريشن موجود أو شيله لو مش محتاجه.
- **اللوك المتكرر:**
  - Layer Styles: Stroke و Inner Glow و Inner Shadow و Bevel. ده سر الشكل الـ 3D اللامع.
  - CC Light Sweep: لمعة على الحواف (أكتر إفكت متكرر، 235 مرة).
  - Deep Glow 2، و Box Blur، و Noise، و Curves.
  - الجلاس والليكويد: Displacement Map + Gaussian/Box Blur على نسخة من الخلفية، و Turbulent Displace + Wave Warp للسايل.
- **لاير Color أو Color control:** فيه Color Control لكل لون (Stroke و Inner glow و Inner shadow). غيّر اللون من هنا مرة واحدة.
- **البلاجنز المطلوبة:**
  - Deep Glow و Deep Glow 2 (موجودين عندك).
  - Sapphire (S_Emboss في Text_Animation بس).
  - Animation Composer (AC IN في Counter_Box).
  - الباقي كله built-in: CC Light Sweep و Shatter و Caustics و Radio Waves و Colorama.

## 2) طريقة الريبليس السريعة
1. هات العنصر من SaveObjects (أو File > Import للـ .aep) جوه كومب الريل في افتر، فوق المتكلم.
2. **الصورة:** في Project، اعمل Replace Footage لملف الصورة اللي في `(Footage)`، أو Alt+Drag فوق اللاير. الكارت بياخد الصورة بنفس الماسك والجلاس.
3. **النص:** اكتب فوق النص القديم. الكارت بيظبط مقاسه لوحده (sourceRectAtTime)، وبعدين ظبّط Width و Height من Animation Control لو محتاج.
4. **اللون:** من لاير Color/Color control، أو من Layer Styles بتاعة Main Shape، أو Hue/Sat على اللاير.
5. **التوقيت:** حرّك Controller، أو حرّك الماركرز لو اللاير فيه Marker Name Based. متمطّش الكيفريمات، الإيقاع السريع هو الستايل.
6. **ألوان الحالة:** فيه نسخ جاهزة أخضر وأحمر (Wave_Click، و Progress_Chart/Decline، و Liquid_Box_v1/v2). اختار حسب المعنى: أخضر = نجاح، وأحمر = مشكلة.
7. اتأكد من الـ Safe Zone: فوق 17% وتحت 21% ممنوعين، وسيب عمود الأزرار يمين.

## 3) فهرس حسب الاحتياج
| عايز إيه | استخدم |
|---|---|
| صورة/منتج تظهر جنب الدكتور | Animated_Image_Box، Box_Animation_v2، Liquid_Box، Liquid_photo_box، Retro_Box، Starred_Box، Blue_Box، Info_card، Smooth_movement(_v2)، Photo_Style، Rainbow_Box |
| مقارنة صورتين (قبل/بعد، نوعين) | 2_Box_Animation، Polystar_box، Photo_Style، Motion_v4، Motion_v9 |
| رقم/نسبة/عداد | Counter_Box، Percentage_Box، Status_Box، Liquid_Number_Box، Day_Counter، Degree_Indicator، Motion_v5 |
| شارت صعود/هبوط | Progress_Chart (أخضر)، Progress_Decline (أحمر)، Graph_Box، Liquid_Level_Down_Box |
| تحذير/غلط | Danger_Box_v2، Danger_box، Wave_Click_Red، Red_Theme، Liquid_Box_v1 (أحمر) |
| صح/نجاح | Wave_Click_Green، Liquid_Box_v2 (أخضر)، Charging_Box |
| سبب/خطوة مرقمة | Box_in (السبب الثالث)، Step_Display (مرحلة)، Step_Title_Badge، Secondary_Click_Animation_v1/v2، Path_Box |
| سؤال/استطلاع/كومنت | Question_box، Question_box_v2، Liquid_Poll_Box، Comment_Animation، Message_Mockup |
| اسم الدكتور/بروفايل | Liquid_Profile، Profile، Text_Animation (الدكتور + التخصص)، Curser_v2 |
| ليستة نقاط/كلمات | Liquid_Text_Box، Text_box_2، Text_box__1، Info_Bar، Ranking_Box، Motion_v6، Motion_v7، Motion_v8 |
| تيتل/كلمة مميزة | Bordered_Box، Text_Box، Rainbow_Stroke_Box، Text_Animation، Step_Title_Badge |
| إشارة لمكان في الجسم/الصورة | Arrow، Arrow_v2، Arrow__1، Curved_Bar، Wave_stroke، Edge_Focus، Curser، Curser_v3، Curser_v4، Line، Line_v2 |
| فورم/CTA | Info_Box (فورم مشاورة)، Info_Bar (خرید محصول) |
| ترانزيشن/لقطة سينمائية | Cinematic_Bars، Cinematic_Bars_v2، Light_Down، Bottom_Wave، Red_Theme، Breaking_effect |
| تكوين/شرح علمي (طبقات الجلد، خلايا) | Motion_v1، Motion_v10، Motion_v3، Motion_v8، Oil_Animation، Plasma_Ball |
| خلفية | Background_v1/v2، Bg_saas_v1..v6، Bg_v4 |
| أيقونة 3D لامعة | Icon_style، 3D_box، Arrow__1 |

## 4) الكتالوج عنصر عنصر
الصيغة: **الاسم** (مقاس الكومب): الشكل | امتى | تغيّر إيه | مبنية بإيه.

### Animation
- **3D_box** (1080×1920): كرة نحاسي بتتحول لأسطوانة 3D وبتلف | أيقونة 3D أو عنصر "كبسولة" | اللون من الـ Material | شكل Torus 3D من AE نفسه (Advanced 3D) + Inertia + loopOut.
- **Animated_Image_Box** (1080×1920): 4 صور منتجات بتطلع فوق إيد المتكلم في كروت جلاس | عرض كذا منتج/حاجة مرة واحدة | Layer 0..3.png | 4 Controls كل واحد بمستطيل Animation Control + Light Sweep + Box Blur + Noise.
- **Arrow** (1080×1920): سهم نيون أخضر مرسوم بإيد بيشاور على الضهر/المكان | تشاور على عضو في الجسم أو منطقة في الفيديو | الـ Path (ارسمه على المكان) واللون | Trim Paths + Deep Glow 2 + Light Sweep.
- **Arrow__1** (280×263): زرار دائري بني لامع فيه سهم لتحت بينط | "انزل/تابع" أو أيقونة اتجاه | لون Layer Styles | Wave Warp + Deep Glow 2 + Inertia + Center Lock.
- **Arrow_v2** (1080×1920): سهم برتقالي صغير بيطلع ويختفي بين الإيدين | تشاور على تفصيلة صغيرة | الـ Path والمكان | Trim + Deep Glow 2.
- **Bordered_Box** (1080×1920): بادج أحمر غامق مائل، حواليه إطار متقطع بنقط لامعة في الأركان، والنص بيتكتب | تيتل/لوجو/اسم براند | النص (Vahidgraph.ir) واللون من Color Control | Marker Name Based + Curves + Deep Glow 2 + Light Sweep.
- **Bottom_Wave** (1080×1920): موجة نور دهبي بتطلع من تحت الكادر وتعدّي | ترانزيشن/فلاش دافي على لقطة | الألوان | Displacement Map بـ Map comp + Box Blur.
- **Box_Animation_v2** (1080×1920): أيقونة كاميرا صغيرة وماوس بيضغط، والكارت بيكبر لصورة (بشرة) والتيتل فوقها | صورة بتنفتح بعد "ضغطة" | الصورة (ChatGPT Image…png) والنص (ندعم الحاجز) | Fill + Text Blur/Tracking animator + Light Sweep + Deep Glow 2.
- **Box_in** (767×514): بادج جلاس أزرق فيه رقم ٣ و"السبب الثالث" وسطر تحته، ونيزك نور بيلف حواليه | الأسباب المرقمة | الرقم والعنوان والسطر | Echo (ذيل النور) + Deep Glow 2 + Inertia.
- **Breaking_effect** (1080×1920): منتج (Whey) بيتكسر لشظايا | "خرافة اتكسرت" أو منتج غلط | Layer 1052.png | Shatter.
- **Charging_Box** (1080×1920 / GIF 600): دايرة شحن بصاعقة، بتتملي من أحمر لبرتقالي لأخضر حوالين صاعقة | طاقة/تحسن/شحن | Thunder.png والألوان | Wave Warp + Exposure + Fill + wiggle + loopOut.
- **Cinematic_Bars** (1080×1920): بارات سودا داخلة مع زوم وجريد خفيف | بداية لقطة مهمة/جملة قوية | المدة | Box Blur + Noise + Deep Glow + B&C.
- **Cinematic_Bars_v2** (1080×1920): الكادر بيتحول لبانوراما مقوّسة بعدسة (CC Lens) مع نص | لقطة wow/ترانزيشن | Lens | CC Lens.
- **Comment_Animation** (1080×1920): كومنت جلاس فيه صورة بروفايل واسم وسطر الكومنت | سؤال متابع أو كومنت | Vahid.jpg والاسم ونص الكومنت | Controller + Controller Photo + Text Blur/Tracking + Box Blur + Exposure.
- **Counter_Box** (933×618): كارت أبيض مائل فيه رقم أحمر بيعد (50 ← 100) مع خط منقط | نسبة/عدد | الرقم الأخير والنص | Animation Composer + Inertia (عداد جاهز).
- **Curser** (1033×755): نقطة نور زرقا بتتحرك وتضغط وتسيب ذيل | ضغطة/تشاور على حاجة على الشاشة | مسار الحركة | Echo + Deep Glow + Inertia.
- **Curser_v2** (634×573): كيرسر برتقالي فيه صورة بروفايل (زي اللايف كيرسر في فيجما) | "دكتور فلان بيشاور" | Vahid.jpg | Curves + Deep Glow 2 + Exposure.
- **Curser_v3** (1200×628): كيرسر بيغير لونه (أحمر ← برتقالي ← أبيض ← أزرق) وبيصغر | سهم تشاور على حاجة في الفيديو | الألوان | Fill + Center Lock + Deep Glow 2.
- **Curser_v4** (598×526): كيرسر دهبي صغير بيلف | تشاور خفيفة | المكان | Center Lock + Inertia.
- **Curved_Bar** (1080×1920): أقواس نور برتقالية حوالين المفصل/الإيد | تحديد منطقة ألم/مفصل | المكان والحجم | CC Cylinder + time*N + Deep Glow 2.
- **Danger_Box_v2** (1080×1920): نافذة "خطأ" زجاجي أحمر بعلامة X وتحذير، بتطلع وتختفي | خطأ شائع/تحذير | باکس غلط.png | Deep Glow 2.
- **Day_Counter** (1080×1920): 3 دواير جلاس Day one/two/three بتنور واحدة واحدة | أيام/مراحل علاج | النص في كل Liquid Glass Box | 3 كومبات Liquid Glass بـ Animation Control + Displacement + Motion Tile.
- **Degree_Indicator** (1080×1920): مقياس نص دايرة بشرط، والرقم بيعد (0 ← -45) | زاوية/درجة/مقياس | الرقم | Deep Glow + Light Sweep.
- **Edge_Focus** (1080×1920): إطار نور منقط حوالين حواف الكادر بيركز على الشخص | لحظة تركيز/جملة مهمة | اللون من Color Control | Box Blur + Exposure + Deep Glow 2.
- **Graph_Box** (1080×1920): كارت بني 3D فيه شارت بيترسم ويقع للأحمر | هبوط/انخفاض | ألوان الخط | Glow + Light Sweep + Inertia.
- **Icon_style** (665×666): أيقونة إنستجرام بنفسجي 3D لامعة بتلف | أيقونة سوشيال/CTA تابعني | Instagram.png | Fill + Curves + Deep Glow 2 + Light Sweep (نفس icon style).
- **Info_Box** (972×893): فورم أزرق "فرم درخواست مشاوره": حقول اسم وتليفون وزرار أحمر بتتكتب | CTA: احجز استشارة | كل النصوص | Text Character Change (كتابة) + Controller.
- **Light_Down** (1080×1920): فلاش نور أصفر بينزل على الكادر | ترانزيشن سريع/إبراز | اللون | Motion Tile + Directional Blur.
- **Line / Line_v2** (1076×612 / 1080×1920): شرطة نور (برتقالي/أحمر) بتطير وتلف | سبيد لاين/زينة حركة | اللون والمسار | Trim + Deep Glow 2 + Light Sweep.
- **Liquid_Bar** (1080×1920): بار جلاس فيه شرط بتتملي (أحمر ← أزرق) | بروجريس/مستوى | الألوان وعدد الشرط | Animation Control + Displacement + Deep Glow.
- **Liquid_Box** (1080×1920): كارت جلاس برتقالي فيه صورة بتظهر فوق صدر المتكلم | صورة معلومة فوق الدكتور | file_…png واللون من Color | Control 2 (Width/Height/Color) + Displacement Map + Noise.
- **Liquid_Box_v1 / v2** (1080×1920): دايرة جلاس بتتملي بسايل أحمر (v1) أو أخضر (v2) بموج | مستوى/امتلاء/سيء ولا كويس | اللون | Liquid controller + Turbulent Displace + Wave Warp + time*N.
- **Liquid_Level_Down_Box** (1080×1920): دايرة سايل دهبي بتفضى لتحت | نقص/استنزاف | اللون | زي v1 بس الليفل بيقل.
- **Liquid_Poll_Box** (1080×1920): استطلاع جلاس: سؤال وزرارين (اوکیه أخضر / خز شده أحمر) والكيرسر بيضغط | سؤال للجمهور/خرافة ولا حقيقة | السؤال والزرارين | Animation Control + Color box + Center Lock.
- **Liquid_Profile** (1080×1920): بادج اسم جلاس (وحید یوسفی / موشن دیزاینر) جنب دايرة صورة | lower-third لاسم الدكتور وتخصصه | Vahid2.jpg والاسم والتخصص | Final Controller + 2 Animation Control + Turbulent/Wave.
- **Liquid_Text_Box** (1080×1920): 4 بادجات جلاس بتنزل ورا بعض بكلمات (ورکشاپ، میکاپ، مژه، رنگ و لایت) | ليستة نقاط/مواضيع | النص في Pre-comp 5..8 | كل بادج بـ Animation Control.
- **Message_Mockup** (1080×1920): فقاعات شات بتطلع (سلام، چطوری؟، …) | حوار/رسالة مريضة | النصوص | Main Controller + Light Sweep + Inertia.
- **Oil_Animation** (1080×1920): نقط ملونة بتتجمع وتندمج في نقطة دهبي | خلط مكونات/تركيبة | الألوان | Turbulent Displace + Deep Glow 2.
- **Path_Box** (1080×1920): كارت بني فيه منحنى بيترسم بنقطتين (للمسار البايلوجي) | مسار/رحلة علاج | النص | Text Blur/Tracking + Deep Glow 2.
- **Percentage_Box** (1080×1920): كارت أحمر جلاس فيه دايرة بتتملي وتتحول أخضر والنسبة بتعد لـ 99% + Doing Tasks | نسبة تحسن/نجاح | النسبة والنص | Animation Control + Displacement + Exposure.
- **Photo_Style** (1080×1920): صورتين بحواف مقطعة (Roughen) بيطلعوا جنب بعض | مكونات/مقارنة صور | الصورتين | Roughen Edges.
- **Plasma_Ball_Orange / Purple** (1080×1920 / 861×522): كرة بلازما بتطلق شعاع موجي | طاقة/شعاع/ليزر | الألوان (Hue/Sat) | Main shape X/Y Offset + Deep Glow + Deep Glow 2.
- **Progress_Chart** (1080×1920): كارت جلاس بجريد، وخط أخضر بيطلع بنقطة لامعة، والكارت يقلب أخضر | تحسن/نتيجة | لا شيء غالبًا | X Pro Path Arrow + Noise + Deep Glow 2.
- **Progress_Decline** (1080×1920): نفسه بس أحمر ونازل | تدهور/مشكلة | نفس الكلام | نفس البناء.
- **Ranking_Box** (768×420): كارت بنفسجي جلاس فيه 5 أرقام بتنور واحدة واحدة وعنوان | ترتيب/أفضل 5 | العنوان والأرقام | Toner + Wave Warp + Light Sweep.
- **Red_Theme** (1080×1920): الفيديو بيقلب أحمر (Invert/Exposure) مع نص | لحظة خطر/صدمة | النص | Invert + Exposure + Motion Tile.
- **Rotating_element** (1080×1920): دايرة نقط بني بتلف وتكبر | لودينج/دورة | الألوان | loopOut + Light Sweep.
- **Secondary_Click_Animation_v1 / v2** (1080×1920): زرار جلاس أزرق ياخد ضغطة وموجة دايرة (v2 الموجة مسننة) | ضغطة على اختيار/زرار | لا شيء (بتتحط فوق زرار تاني) | Layer Styles (+ Wave Warp في v2).
- **Smooth_movement** (1080×1920): كارتين صور صغيرين بيطيروا لإيد المتكلم بنعومة | منتج/أكل في الإيد | 5.png و 9.png | Inertia.
- **Smooth_movement_v2** (1080×1920): صورة (بيماري روزاسه) بتطير وتلف بين الإيدين | حالة جلد/مرض | الصورة | Roughen Edges + Inertia.
- **Status_Box** (1080×1920): بار غامق فيه رقم بيعد، وبيتملي سايل أحمر لـ 100 وبعدين ينزل 73 | حالة/مؤشر | الأرقام | Wave Warp + Noise + Light Sweep.
- **Step_Display** (720×371): ترس/قرص دهبي من فوق وبادج "مرحله اول" | مراحل | النص (مرحله اول..چهارم) | Hue/Sat + Noise + Center Lock.
- **Text_Animation** (1080×1920): الدكتور + الاسم + "أخصائي طب الأطفال وحديثي الولادة" بلونين (تيل ودهبي) بتطلع كلمة كلمة | تقديم الدكتور | كل الأسطر | Sapphire S_Emboss + Deep Glow 2 + Marker Name Based + تصليح العربي.
- **Wave_Click_Green / Red** (1080×1920): موجة نور أخضر/أحمر بتعدّي على صورة (طبق أكل) | "ده صح" / "ده غلط" على صورة | لا شيء | CC Flo Motion + Box Blur + Deep Glow 2.
- **Wave_animation** (1080×1920): أرضية نصوص متكررة (Visit the area / بازدید از منطقه) بموجة | خلفية تايبوجرافي | النص في Text comp | Caustics + Radio Waves + Motion Tile.
- **Wave_stroke** (1080×1920): خط منقط دهبي بيلف حوالين جسم/إيد | تحديد منطقة | المسار | Trim + Deep Glow 2.

### Box
- **2_Box_Animation** (1080×1920): كارتين صور بإطار أخضر بيطلعوا جنب بعض وبيتبدلوا | مقارنة/اختيارين | image (12).png والألوان من Color control 1/2 | Layer Styles + Inertia.
- **Blue_Box** (1080×1920): كارت أزرق فخم فيه صورة (عربية/منتج) | صورة منتج/جهاز | file_…png | Light Sweep + Inertia.
- **Danger_box** (1080×1920): كارت أبيض بعلامة تحذير وجملة "این ورکشاپو از دست ندین!" | تنبيه "متفوتوش" | النص و image 794.png | Text Blur + Marker Name Based + wiggle.
- **Info_Bar** (1016×332): بار بني فيه زرار "خرید محصول" وعناوين بتظهر | CTA شراء + مميزات | كل النصوص | Main box Light Sweeps + Marker Name Based.
- **Info_card** (1080×1920): كارت صورة (طبق) وتحته اسم (منو هفتم) | كارت منتج/وجبة | الصورة والنص | Levels + Noise + Light Sweep.
- **Jelly_Box** (1080×1920): كارت بيتهز زي الجيلي فيه صورة (خلية/نسيج) | صورة علمية | file_…png | Turbulent Displace + time*N.
- **Liquid_Number_Box** (1080×1920): رقم جلاس بيعد (3 ← 13) | عدد/رقم | الأرقام | Animation Control + Displacement.
- **Liquid_photo_box** (637×520): صورة جلاس (مسام الأنف) وبعدها كلمة دهبي (المسام) | صورة عرض مشكلة + اسمها | الصورة | Animation Control + Roughen + Hue/Sat.
- **Polystar_box** (1080×1920): صورتين داخل أشكال مضلعة (مضلع) بني | مقارنة بشرة (تيرگی پوست / لک روی پوست) | الصورتين | Light Sweep + Exposure.
- **Profile** (1080×1920): دايرة صورة بإطار برتقالي لامع جنب المتكلم | بروفايل/صورة الضيف | Vahid.jpg | Deep Glow 2 + Exposure.
- **Question_box** (1080×1920): بادج سؤال أحمر "از محصول راضی هستی؟" وتحته رد | سؤال وجوابه | النصين | Color box 1..3 + Turbulent + Spotlight.
- **Question_box_v2** (864×588): كارت أخضر غامق "سوالات شما" + السؤال + Next Question | سؤال من الجمهور | النصوص | Center Lock + Deep Glow 2.
- **Rainbow_Box** (1080×1920): كيرسر بيضغط والكارت بيطلع بإطار قوس قزح متحرك فيه صورة منتج | منتج مميز | ChatGPT Image…png | CC RepeTile + Deep Glow 2.
- **Rainbow_Stroke_Box** (1920×1080): بادج أسود بستروك قوس قزح بيلف (Designed To Highlight) | كلمة مفتاحية | النص | MASTER slider (لوب الألوان) + Deep Glow 2.
- **Retro_Box** (1080×1920): كارت إطار أبيض قديم فيه صورة (البشرة الحساسة) والنص تحت | نوع بشرة/حالة | الصورة والنص | Roughen + Text Blur.
- **Starred_Box** (1080×1920): كارت صورة فيه نجوم/شوك أخضر في الأركان | حالة جلد (قرمزی پوست) | الصورة | Roughen + Light Sweep.
- **Step_Title_Badge** (770×323): بادج أحمر "سرمایه بلندمدت" + دايرة رقم 2 | خطوة/نقطة مرقمة | النص والرقم | Turbulent + Center Lock.
- **Text_Box** (1080×1920): بادج برتقالي "28 Days" بينط | رقم/مدة | النص | Light Sweep + Inertia.
- **Text_box_2** (1080×1920): فقاعات أسئلة جلاس (میتونم یه سوالی رو بپرسم؟ …) | أسئلة شائعة | النصوص | Box Blur + Exposure.
- **Text_box__1** (1039×792): كارت بنفسجي فيه أيقونة ونقاط | ليستة مميزات | النصوص | Deep Glow 2 + loopOut.
- **Wave_Box** (1080×1920): صورة بتدخل بموجة ورا المتكلم | خلفية/مكان (عيادة) | 00FI_IMG….jpg | Wave Warp + Light Sweep.

### Background (لوب خلفيات)
- **Background_v1**: أزرق بتكستشر | **Background_v2**: رمادي غامق بباترن (CC RepeTile) | **Bg_v4**: جريد فاتح (ورق مربعات) زي خلفية Status_Box و Starred_Box.
- **Bg_saas_v1 / v2** (1920×1080): خطوط موجية برتقالي/كحلي على شكل هرم/مروحة | **Bg_saas_v3**: باستيل بنفسجي/سماوي سايل | **Bg_saas_v4**: خطوط دهبي متقاطعة | **Bg_saas_v5**: شعلة سماوي على أسود | **Bg_saas_v6**: أقواس بنفسجي.
- مبنية بـ: Strokes comp (24 خط) + Colorama + Mesh Warp + Wave Warp + time*N (لوب لوحده). غيّر الألوان من Colorama.

### Motion (مشاهد شرح كاملة)
- **Motion_v1**: كارت جلد في 3D بيلف، ونصوص (سطح الجلد / جذر الجلد) | شرح طبقات الجلد | 097.png والنصوص.
- **Motion_v10**: صورة (خلايا فيبروبلاست) بتلف على جريد ونصوص بتتبدل بالماركرز | شرح علمي خطوة بخطوة.
- **Motion_v2**: خلفية بتنقسم أخضر/أحمر وصورتين في كروت | مقارنة صح/غلط (نیاسینامید vs ترشح چربی).
- **Motion_v3**: كارت دهبي على خلفية بني، الأيقونة بتتبدل (صابونة ← ...) | تحوّل/نتيجة.
- **Motion_v4**: صور وش بتتكسر وتتوزع بحواف محروقة (Burn Film) | أنواع مشاكل البشرة (سوختگی…).
- **Motion_v5**: كحلي، عداد دولار بيوصل $1,000,000 وشارت طالع | أرقام/فلوس/ميزانية.
- **Motion_v6**: بادج "وعده غذايي" وبعدها كروت أكل بتطلع (منو سوم..هفتم) | جدول وجبات/نظام غذائي.
- **Motion_v7**: كروت أيقونات 3D (چربی سوزی، حفظ عضلات، پرانرژی) | فوائد منتج/مكمل.
- **Motion_v8**: كارت "المواد الفعالة" بيتفتح لفروع (مباشر/غير مباشر، الريتينويدات، الأحماض) | تقسيم مكونات.
- **Motion_v9**: صور بحواف محروقة بتطير (شمس، وش) | أسباب (أشعة الشمس…).

## 5) ملاحظات للتوظيف في ريلز المتكلم
- النصوص الأصلية مرجعي، فاكتب عربي واتأكد من الخط (يدعم العربي) ومن إكسبريشن تصليح الحروف.
- أنسب حاجة لريلز المتكلم: Liquid_Profile و Text_Animation (تقديم الدكتور)، و Box_in و Step_Title_Badge (الأسباب)، و Liquid_Box و Liquid_photo_box و Retro_Box (صورة الحالة)، و Progress_Chart/Decline و Percentage_Box (نتائج)، و Danger_Box_v2 و Wave_Click_Red/Green (صح وغلط)، و Liquid_Poll_Box (خرافة ولا حقيقة)، و Info_Box (احجز).
