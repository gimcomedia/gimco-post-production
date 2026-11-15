# اللي لازم يكون على الجهاز عشان الريبو يشتغل كامل

- **لمين:** أي حد هيسطّب الريبو، صاحبه أو مونتير تاني.
- **القاعدة:** السكيلات والمكتبة بتشتغل من غير ولا بلاجن مدفوع، لأن كل وصفة ليها بديل Native. اللي تحت بيخلّي النتيجة زي الأصل.
- **الحالة:** «متسطب» = متأكدين إنه على جهاز صاحب الريبو (جرد نوفمبر 2026). «مش متأكد» = المكتبة بتستخدمه وغالبًا موجود، بس ما اتأكدش واحد واحد. «مش عندنا» = المكتبة بتستخدم بديله.
- **المسارات:** مكتوبة بالجذور (`<ASSETS>` و`<DOCS>` و`<AE>` و`<H>`)، وتعريفها في [`LOCATIONS.md`](plugins/gimco-post-production/library/Tools-and-Presets/LOCATIONS.md).
- **التحديث:** أي بلاجن أو خط أو كورس يدخل المكتبة يتضاف هنا في نفس التحديث (خطوات [`CLAUDE.md`](CLAUDE.md)).

---

## 1. البرامج
| البرنامج | ليه | ملاحظة |
|---|---|---|
| Adobe After Effects | الموشن كله | متجرب على 2027. مشاهد الموبايل 3D محتاجة Advanced 3D (2024 وأحدث) |
| Adobe Premiere Pro | القص والصوت والجريد والموجرتات | Object Mask محتاج 2026 وأحدث |
| تطبيق Claude للديسكتوب | Claude يوصل لفولدراتك ويشتغل في افتر وبريمير | |
| Git + GitHub Desktop | تحديث نسخة الجهاز بـ `pull.bat` | |
| Python 3 | فحص الريبو `tools/check_system.py` | لمين بيعدّل الريبو بس |

## 2. إعدادات تتظبط مرة واحدة
- **افتر:** Edit > Preferences > Scripting & Expressions > Allow Scripts to Write Files and Access Network (للسكربتات والبانلات).
- **افتر:** Preferences > Type > Text Engine = South Asian and Middle Eastern، وبعدين أعد التشغيل، عشان العربي ما يتفككش.
- **أي نص عربي:** Ligatures شغالة عشان الكشيدة تطلع صح. وفي الموجرتات: كل خصائص الخط في Source Text مفعّلة.

## 3. بلاجنز After Effects

### الأساسي (المكتبة بتعتمد عليه كتير)
| البلاجن | بيعمل إيه | الحالة | لو مش عندك |
|---|---|---|---|
| Deep Glow 2 | الجلو الأساسي في كل اللوكات | متسطب | Glow الأساسي |
| BOUNCr | باونس للأيقونات والأزرار | متسطب | Inertia expression |
| Boris BCC | Ripple Dissolve، Halftone، Prism، Jitter | متسطب | CC Halftone، ترانزيشن Native |
| Sapphire | S_Glow، S_Shake، ترانزيشنز، S_QuadTone | متسطب | Tritone/Curves، CC Vignette |
| Animation Composer 4 | ترانزيشنز وبريستات جاهزة | متسطب | كيفريمز يدوي |
| Foldspace | طي وأسطح 3D | متسطب | CC Cylinder |
| Shadow Studio 3 | ظل وعمق | متسطب | Drop Shadow أو Radial Shadow |
| LightSweepPro | لمعة وبيفل على الحروف | متسطب | CC Light Sweep + Bevel Alpha |
| Un-PreCompose (مجاني) | فك البري-كومب | متسطب | نسخ اللاير يدوي |
| Deep Glow (الإصدار الأول) | بيفتح مشاريع كورس اللوك الغامق زي ما هي | مش متأكد | Deep Glow 2 بداله |

متسطب كمان: ToneCraft، Chromabba، Glaze، Edge Controller. **Glassary** مذكور، بس مش لاقيينه في فولدرات البلاجنز.

### بانلات وسكربتات
| الأداة | بتعمل إيه | الحالة | لو مش عندك |
|---|---|---|---|
| Highlighter 2.0 | بوكس وكيرسر على كلمة أو صورة | متسطب | شيب بـ `sourceRectAtTime()` + Trim Paths |
| Presetify (مجاني) | Text Animator بضغطة | متسطب | Range Selector يدوي |
| Morpho.jsx | تجميع عناصر في هدف | السكربت جوه الريبو (`Tools-and-Presets/scripts/`)، التسطيب مش متأكد | Position منحني + Overshoot |
| ProximityPro | تفاعل العناصر بالقرب | على `<H>` (مش متحقق) | الفكرة اليدوية في proximity-interaction |
| Morph Studio | مورف | على `<H>`، مش متسطب | Position منحني + Overshoot |
| Overlord (مدفوع) أو AEUX (مجاني) + Copy Pasta | من Figma لافتر | مش متأكد | Copy as PNG |
| Smart Bounce 1.0 | ارتداد بضغطة على كيفريمز Position وScale | ملف التسطيب موجود (يتنقل لـ `<ASSETS>\Installers`)، التسطيب مش متأكد | BOUNCr أو Inertia |
| Motion Tools / Motion Tools Pro، Flow، EZ Tools، Easy Tools، Loopy، Odometer، Crates Long Shadow | أدوات مساعدة | مش متأكد | البديل مكتوب في plugins-by-need |

### إكستنشنز
| الإكستنشن | بيعمل إيه | الحالة | لو مش عندك |
|---|---|---|---|
| Polite After Pro + مكتبة Wife | Auto Edit، تفريغ عربي، جلاس سايل | متسطب (`<DOCS>\Polite After Pro`) | Whisper + Lumetri |
| Captioneer | كابشن من SRT | موجود (`<DOCS>\Captioneer`) | Captions panel في بريمير |

### مذكور في الوصفات (مش متأكد)
Trapcode (Particular، Form، 3D Stroke، Mir، Tao، Geo)، Red Giant 2027 (Scene Light، Depth Generator، Real Lens Flares، Universe)، Magic Bullet، RSMB Pro، Mocha، Optical Flares، Cosmic، Super Morphings، SDFlow، AutoFill 2، CenterLine، FoldCraft، Circle Rig Pro، Filmit Studio، AE Glass، MB Liquid Glass، LiquidGlass (سكربت)، Portraiture 5، Mercalli 6، CineDream، Blace، Topaz Video AI.

### مش عندنا
Twitch (بداله S_Shake وBCC Jitter)، Text Exploder (لاير لكل كلمة)، Tapeify.

التفاصيل والقيم لكل بلاجن في [`plugins-by-need.md`](plugins/gimco-post-production/library/Tools-and-Presets/plugins-by-need.md).

## 4. بريستات ومكتبات عناصر
| الباك | بيعمل إيه | مكانه |
|---|---|---|
| Mahmoud's Presets (Scale 1–16، Position 1–22) | باونس الأيقونات والتيتلز | `<AE>\Presets\Mahmoud's Presets` |
| Trend 2026 | لوك 2026 (محتاج Deep Glow 2 وSapphire) | `<AE>\Presets\Trend 2026` |
| SaveObjects (Motions Essences، Wife، vahid_graph، Text Presets) | عناصر UI جاهزة | `<DOCS>\SaveObjects_Assets` |
| موجرتات Highlighter تحت براند Abdallah Mogrts (9) | بوكس وكيرسر في بريمير | `<ASSETS>\Highlighter-MOGRTs` |
| Finzar Animations 2.0 (138 ملف .prfpset) | سلايدات بريمير | مكانه مش مسجّل؛ الأرقام ملخّصة في preset-values |
| تمبليتات VOLT | دراسة كروت وتيتلز | مكانها مش مسجّل |
| Apple PF Pack V2 (31 بروجيكت) | ستايل Apple النضيف | `<H>` (مش متحقق) |
| باك BLADE (SFX و69 بريست) | أصوات وعناصر مونتاج | `<H>` (مش متحقق) |
| باك SFX الشورت السينمائي (25 ملف) | أمبيانس وwhooshes وhits | `<ASSETS>\Ultimate-Editors-2.0` |

## 5. الخطوط
- **الأساسي:** Thmanyah Sans (العربي الأساسي، ومعاه Thmanyah Serif Display وThmanyah Serif Text)، وAmira Typo (الكلمة الخاصة). الموجرتات محتاجة الاتنين.
- **UI ولاتيني:** SF Pro وSF Arabic (ستايل Apple وشاشات التطبيقات)، Montserrat، Inter.
- **بدايل مجانية لو مفيش:** IBM Plex Sans Arabic، Cairo، Almarai، Noto Naskh Arabic (كلهم على Google Fonts).
- **مذكورة في وصفات بعينها:** Expo Arabic، DIN Next LT Arabic، Lyon Arabic Display، Ping AR + LT، PP Neue Montreal Arabic، Zain Mobile Swashes، The Year of The Camel، Degular، Circe Rounded، DM Serif Display، 29LT Zawi، HT Roznameh، Helvetica Bold، Roboto وShadows Into Light (Google Fonts)، Rakkas وLalezar وReem Kufi (مجانية)، Raman-Bold (جوه عنصر من SaveObjects).
- **من كورس ومش متأكدين إنها متسطبة:** Coolvetica، Edwardian Script ITC.
- **القاعدة:** الخطوط تقيلة وعريضة وواضحة، مفيش أوزان رفيعة.

## 6. أدوات برا أدوبي
| الأداة | ليه | ملاحظة |
|---|---|---|
| ffmpeg | استخراج فريمات، وتفريغ مع Whisper | اختياري |
| Whisper | تفريغ عربي على الجهاز | أو تفريغ Polite After |
| Figma (المجاني كفاية) | لوحة إلهام وتصميم UI | |
| حساب Gemini أو ChatGPT | توليد صور ببلاش من المتصفح | |
| Higgsfield أو Magnific (كونيكتور) | توليد فيديو وصور مدفوع | بموافقة على النطاق والتكلفة |
| ElevenLabs | فويس أوفر | مدفوع |
| real-sfx / earshot | أدوات SFX | اختياري |
| Envato Elements أو Storyblocks أو Motion Array (ومجاني: Pexels) | بي-رول وستوك وصوت مرخّص | |
| Claude Code + Python (OpenCV، MediaPipe أو rembg) + Chrome headless (Playwright) + GSAP، وthree.js أو Blender | الموشن المبني بالكود | لقسم Code-Built-Motion بس |

## 7. الكورسات والمصادر
المكتبة فيها الخلاصة كمبادئ بكلامنا، فمش لازم تشتري حاجة عشان تشتغل بيها. دول اللي تشتريه أو تجيبه لو عايز ترجع للمصدر نفسه أو تفتح ملفاته.

### كورسات
| الكورس | دخل منه إيه في المكتبة | ملفاته على الجهاز |
|---|---|---|
| Ultimate Editors 2.0 (الموديولات: The Viral Talking Head Masterclass، The Editing Fundamentals، Devin Jatho Editing Masterclass، Cinematic Short-Film Editing Style، SaaS Animation Modules، The SAAS Masterclass، Dynamic 3D Editing Masterclass، Raw Tutorials Recording، Viral Animation Breakdown) | أغلب وصفات المتكلم والـUI والـ3D والشورت السينمائي والصوت | مشاريع افتر وباك SFX في `<ASSETS>\Ultimate-Editors-2.0`؛ الفيديوهات مش محفوظة |
| APEX Editors — Phase 01 | أساسيات المونتاج، الهوك، علم النفس الفيرال، التصميم، الصوت | مش محفوظة |
| Blade Course + باك BLADE | البناء والهوك والإيقاع، وعناصر وSFX | الباك على `<H>` (مش متحقق) |
| كورس AI Editing (نوفمبر 2026) | اختيار موديل التوليد وسلم الجودة | مش محفوظ |
| دروس عمر (4 دروس ريلز + بروجيكتاتها) | وصفات الكابشن والريل | مش محفوظة |

### باكات وأدوات من صناعها (اتأكد من الرخصة)
Polite After Pro + Wife، SaveObjects وScenes For saveObject، vahid_graph، Apple PF Pack V2، Trend 2026، Finzar Animations 2.0، Mahmoud's Presets، Morpho v2.1، Highlighter 2.0، ProximityPro، Morph Studio، Smart Bounce 1.0، تمبليتات VOLT.

### مجاني
Reel Studio (رخصة MIT، تفاصيلها في [`LICENSES.md`](plugins/gimco-post-production/library/LICENSES.md))، و45 جايد من Edita Club (editaclub.com/g)، ودروس يوتيوب (Foldspace، Cosmic، CLEAN & PREMIUM Edit، How to Edit viral Reel Like Uzb، وغيرها). القايمة الكاملة بمين دخل فين في قسم «المصادر» في [`INDEX.md`](plugins/gimco-post-production/library/INDEX.md).

## 8. الفولدرات على جهاز جديد
- حط الريبو `gimco-post-production` وفولدر `Post-Production-Assets` جنب بعض.
- جوه `Post-Production-Assets`: `Ultimate-Editors-2.0` و`Highlighter-MOGRTs` و`Installers` (أي ملف تسطيب مكانه هنا، مش Downloads ولا Desktop).
- غيّر جدول الجذور في `LOCATIONS.md` بس، وكل الوصفات هتشاور صح.
