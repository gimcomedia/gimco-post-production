# أماكن الملفات على الجهاز

- **الاستخدام:** المكان الوحيد لمسارات الجهاز. أي ملف تاني في المكتبة بيكتب الجذر (زي `<ASSETS>`) والباقي، أو بيقول «المكان في LOCATIONS».
- **المكان:** نصي
- **المتطلبات:** مش محتاج
- **البديل Native:** مكتوب لكل بند
- **الفهرس:** [INDEX](../INDEX.md)

---

## القواعد
- **المراجع وملفات التسطيب مكانها فولداراتنا** (`<ASSETS>` أو `<DOCS>`)، مش Downloads ولا Desktop. أي حاجة لسه هناك تتنقل، وبعدها يتكتب مسارها هنا.
- **أي مسار بيتكتب هنا بس.** لو جهاز اتغير أو فولدر اتنقل، بيتعدّل السطر بتاعه هنا مرة واحدة.
- **مسار ما بيوديش لحاجة يتشال.** لو ملف مش موجود، يتشال سطره، والوصفة تفضل بالبديل Native بتاعها.
- آخر جرد: 2026-11-15 من جلسة متوصلة بالجهاز (`desktop-0619ej8`)، بأسماء الفولدرات. «متحقق» يعني الفولدر ظاهر، مش إن كل ملف جواه اتفتح.

## الجذور
| الجذر | المسار |
|---|---|
| `<REPO>` | `C:\Users\Gimco Media 3\Documents\Cluade\New folder\gimco-post-production` (السكيلات والمكتبة، الأصل على GitHub) |
| `<ASSETS>` | `C:\Users\Gimco Media 3\Documents\Cluade\New folder\Post-Production-Assets` (الملفات التقيلة: بروجيكتات الكورسات، الأصوات، ملفات التسطيب) |
| `<DOCS>` | `C:\Users\Gimco Media 3\Documents` |
| `<AE>` | `C:\Program Files\Adobe\Adobe After Effects 2027\Support Files` (البريستات في `<AE>\Presets`، البانلات في `<AE>\Scripts\ScriptUI Panels`، البلاجنز في `<AE>\Plug-ins`) |
| `<H>` | `H:\` درايف خارجي. **مش متحقق من الجلسة:** اتأكد إنه متوصل قبل ما تعتمد على أي حاجة عليه |

## موجود على الجهاز (متحقق 2026-11-15)
| المرجع | المكان | البديل لو مش موجود |
|---|---|---|
| مكتبة عناصر UI (SaveObjects): Motions Essences، Wife، vahid_graph، Abdallah Mogrts، Text Presets وغيرهم | `<DOCS>\SaveObjects_Assets` | Shape Layers + Inertia ([rhythm-easing-expressions](../After-Effects/rhythm-easing-expressions.md)) |
| Polite After Pro | `<DOCS>\Polite After Pro` | Whisper للتفريغ، Lumetri للجريد |
| Captioneer | `<DOCS>\Captioneer` | Captions panel في بريمير من SRT |
| فولدر شغل الموجرتات (مكتوب `Cluade`، وفيه `scripts` و`work` و`templates` و`reports`) | `<DOCS>\Cluade` | الوصفة اليدوية ([build-methods](../MOGRT/build-methods.md)) |
| بريستات حركة الأيقونات (Mahmoud's Presets: scale وposition) | `<AE>\Presets\Mahmoud's Presets` (متسطبة؛ نسخة الديسكتوب اتشالت) | Scale/Position keyframes + Inertia |
| بريستات Trend 2026 | `<AE>\Presets\Trend 2026` (متسطبة؛ نسخة الديسكتوب اتشالت) | الإكسبريشنز في [trend-2026-presets](trend-2026-presets.md) |
| Presetify (بانل) | `<AE>\Scripts\ScriptUI Panels` | `loopOut("cycle")`، حفظ Preset يدوي |
| Highlighter 2.0 (بانل بوكس وكيرسر وموجرت) | `<AE>\Scripts\ScriptUI Panels\Highlighter.jsxbin` (فيه نسختين، تتشال واحدة) | شيب بـ `sourceRectAtTime()` + Trim Paths ([highlighter](highlighter.md) القسم 10) |
| Un-PreCompose | `<AE>\Plug-ins` (متسطب 2026-11-11) | نسخ لاير النص يدوي، أو Un-precompose في Motion Tools Pro |
| باك موجرتات Highlighter النهائي (9 موجرتات `Abdallah Mogrts - …`) والبروجيكت `HLX_Mogrts_v01.aep` | `<ASSETS>\Highlighter-MOGRTs` (اتصدّروا من افتر 2027، ما اتجربوش في بريمير؛ محتاجين thmanyah sans وAmira Typo) | الطريقة في [highlighter](highlighter.md) وMOGRT/build-methods |
| السكيلات الرسمية لـ Remotion (13 سكيل، نسخة 4.0.541؛ الراوتر في `skills\remotion-best-practices\SKILL.md`). مرجع API بس، والخلاصة في [remotion-engine](../Code-Built-Motion/remotion-engine.md) | `<DOCS>\Cluade\remotion-skills` (متحقق 2026-11-17) | دوكس Remotion (رابط الصفحة + `.md`) |
| فولدر مشاريع Remotion: نسخة من `Code-Built-Motion/remotion-starter` لكل قطعة | `<DOCS>\Cluade\remotion-projects` (**ما اتعملش لسه**: يتعمل مع أول قطعة) | — |
| Morpho.jsx (بانل تجميع عناصر في هدف) | جوه الريبو: `Tools-and-Presets/scripts/Morpho.jsx` (متسطب في افتر: مش متحقق) | Position منحني + Overshoot ([morphing](../After-Effects/morphing.md)) |

## ملفات تسطيب لسه في Downloads (تتنقل لـ `<ASSETS>\Installers`)
| الفولدر | يتنقل لـ |
|---|---|
| `Presetify by KuldeepMP4` | `<ASSETS>\Installers\Presetify by KuldeepMP4` |
| `Tut\Highlighter v2.0.0 Win + Mac` | `<ASSETS>\Installers\Highlighter v2.0.0 Win + Mac` |
| `unprecompose_v1.1.5` | `<ASSETS>\Installers\unprecompose_v1.1.5` |
| فولدر Smart Bounce 1.0 جوه `Tut For Learning` | `<ASSETS>\Installers\Smart Bounce 1.0` |

بعد النقل يتشال الجدول ده، وكل ملفات التسطيب يبقى مكانها `<ASSETS>\Installers`.

## على درايف H (مش متحقق من الجلسة)
| المرجع | المكان | البديل |
|---|---|---|
| باك BLADE للمونتاج وSFX | `<H>\Courses\Editing\Eng\كورس مونتاج\04-BLADE_Editing_Pack\BLADE SFX` | Openverse أو أي مكتبة صوت مرخّصة |
| Morph Studio (ملفات وفيديو وSRT) | `<H>\montage\After Effects Assets\Tools by Function\Morphing\Morph Studio V1.0.0` | Position منحني + Overshoot |
| باك Apple PF Pack V2 (31 بروجيكت) | `<H>\montage\After Effects Assets\Project Files\2026 project\Apple PF Pack V2` | القيم المكتوبة في [recipe-clean-apple-style](../After-Effects/recipe-clean-apple-style.md) |
| ProximityPro v2.0 | `<H>\montage\After Effects Assets\Tools by Function\Expressions & Automation\ProximityPro v2.0 Win + Mac` | الفكرة اليدوية في [proximity-interaction](proximity-interaction.md) |

لو الدرايف اتشال أو الملفات مش عليه: يتشال الصف، أو الفولدر يتنقل لـ `<ASSETS>` ويتحدّث مساره هنا.

## أصول الكورس في `<ASSETS>\Ultimate-Editors-2.0`
فولدر لوك الست الغامق: `<ASSETS>\Ultimate-Editors-2.0\Ultimate Editors 2.0 Updated\Devin Jatho Masterclass + Saas Animation modules\Devin Jatho Editing Masterclass`. الملفات اتعرفت من جرد الفولدر (الأرشيفات ما اتفكتش).

| الملفات | المكان | البديل |
|---|---|---|
| لوك الست الغامق، النص: `Text Save.aep` (كابشن تقيل، كلمة خاصة، لمعة، أشعة، تكسير) | `Text Animation-20251005T102014Z-1-001.zip` في فولدر اللوك | [recipe-dark-ui-talking-head](../After-Effects/recipe-dark-ui-talking-head.md) (القسم 4) |
| لوك الست الغامق، الهوكات: `Main Project.aep` وأيقونات PNG (`Resources\`) | `Hook Animations-20251005T102737Z-1-001.zip` في فولدر اللوك | نفس الوصفة (القسم 5) |
| لوك الست الغامق، أنيميشنز الجسم: عجلة الاختيار، Special Effects، Quora UI، Instagram UI، 3D Reel + `iphone_12_pro.glb` | `Body Animations-20251005T110628Z-1-001.zip` في فولدر اللوك | نفس الوصفة (القسم 6) |
| صفحة لوحة الستايل لنفس اللوك (docx) | فولدر اللوك | الطريقة في [reference-analysis](../Editorial/reference-analysis.md) (لوحة الستايل) |
| باك SFX الشورت السينمائي (25 ملف: أمبيانس، درونز، كليكات ميكانيكية، risers وhits وwhooshes). ملفات من مكتبة باشتراك: ترخيصها يتراجع قبل أي استخدام تجاري | `<ASSETS>\Ultimate-Editors-2.0\4 Cinematic Short-Film Editing Style\23 - Sound Design Theory` | مكتبة الصوت في [sound-design](../Premiere/sound-design.md) |
| مشروعين إعلان 3D مرجعيين (`Copy of ad -1 phantom lessons.zip` و`Copy of phantom -4.zip`، فيهم `phone_17_pro_max.glb`) | `<ASSETS>\Ultimate-Editors-2.0\Ultimate Editors 2.0 Updated\Dynamic 3D Editing Masterclass` | [recipe-dynamic-3d-ui-scene](../After-Effects/recipe-dynamic-3d-ui-scene.md) (الأقسام 6 و8 و9) |

الـB-roll والستوك وخامات التمرين ومزيكا الكورس اتمسحوا (2026-11-10): في الشغل الفعلي خامة العميل أو ستوك ومزيكا مرخّصين.

### مشاريع افتر اللي جوه الأرشيفات: فيها إيه (مقروءة من ملفات المشاريع)
فكّ الأرشيف في فولدر جنبه قبل الفتح. لو بلاجن مش متسطب هيظهر «Missing».

| المشروع (الأرشيف) | بيبني إيه | إفكتات وبلاجنز جواه | لازم يكون متسطب |
|---|---|---|---|
| Text Save (Hook Animations) | سيستم الكابشن الأبيض والكلمة الخاصة | Gradient Ramp، Radial Shadow، Deep Glow | Deep Glow (الإصدار الأول؛ لو عندك Deep Glow 2 بس، استبدله) |
| Main Project (Hook Animations) | هوكات الأيقونة والـ UI | 4-Color Gradient، Radial Shadow، Tint، CC Particle Systems II، CC Radial Fast Blur، CC Vignette، Deep Glow | Deep Glow |
| Special Effects (Body Animations) | النص اللامع والأشعة والتكسير | Shatter، Roughen Edges، Paint (روتو)، Drop Shadow، Hue/Saturation، CC Radial Fast Blur، CC Vignette، Deep Glow | Deep Glow |
| Circle Animation (Body Animations) | عجلة الاختيار | 4-Color Gradient، Noise، Hue/Saturation، CC Radial Fast Blur، Deep Glow | Deep Glow |
| 3D Iphone (Body Animations) + iphone_12_pro.glb | موبايل 3D بكروت | 4-Color Gradient، Noise، Hue/Saturation، CC Light Sweep، CC Vignette، Deep Glow، كاميرا بعمق ميدان | Deep Glow، افتر بيدعم موديلات 3D (GLB) |
| Devin Instagram UI (Body Animations) | مشهد بروفايل التطبيق | Luma Key، Invert، Tint، Drop Shadow، CC Radial Fast Blur، CC Vignette، Deep Glow | Deep Glow |
| Quora UI animation (Body Animations) | بار البحث والموقع | Linear Wipe، Roughen Edges، Tint، CC Light Sweep، CC Radial Fast Blur، CC Vignette، Deep Glow | Deep Glow |
| phantom ad -1 (فولدر الـ 3D) + phone_17_pro_max.glb | إعلان 3D 30 ثانية | Deep Glow 2، BOUNCr، BCC Halftone، Sapphire (S_QuadTone، S_Vignette)، Tritone، Glow، Drop Shadow، Box Blur، Expression عدّاد بفواصل الآلاف | Deep Glow 2، BOUNCr، Boris BCC، Sapphire |
| phantom 4-1 (فولدر الـ 3D) | إعلان 3D تاني | زي اللي فوق + Sapphire S_Rays، Apply Color LUT، Curves، Minimax، Sharpen، Mesh Warp | زي اللي فوق |

- BCC وSapphire وDeep Glow 2 وBOUNCr متسطبين، فمشاريع الـ 3D بتفتح كاملة. البدايل لو المشروع اتنقل لجهاز تاني: CC Halftone بدل BCC Halftone، Tritone/Curves بدل S_QuadTone، CC Vignette بدل S_Vignette، CC Light Rays أو CC Radial Fast Blur بدل S_Rays.
- Expressions الباونس في مشاريع الـ 3D مشفّرة (سكربت بريست)، فمش بتتقري كقيم؛ استخدم BOUNCr نفسه.

## أماكن ثابتة في البرامج
| إيه | المكان |
|---|---|
| موجرتات بريمير المتسطبة | `%AppData%\Adobe\Common\Motion Graphics Templates` |
| كاش ميديا الموجرتات | فولدر `Motion Graphics Template Media` جنب بروجيكت بريمير |
| إضافات CEP (بانلات زي Polite After Pro) | `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions` |

## فولدرات موجودة والملفات جواها ما اتشافتش
الفولدر ظاهر في الجرد، بس أسماء الملفات مش ظاهرة. أول مرة تحتاج ملف منهم: اطلب الفولدر من الجهاز، ولو الملف مش موجود يتشال سطره ويفضل البديل.

| الملف | مكانه | لو مش لاقيه |
|---|---|---|
| سكربتات بيلد الموجرت (`abdallah_build.jsx` و`abdallah_inspect.jsx` و`abdallah_snap.jsx` و`abdallah_postprocess.py`، وسكربتات `guava_*` القديمة) | `<DOCS>\Cluade\scripts` | الوصفة اليدوية بالـUI ([build-methods](../MOGRT/build-methods.md)) |
| `GIM_Analyze_Project.jsx` (قراءة مشروع افتر من غير تعديل) | `<DOCS>\Personal` | قراءة الكومبات يدوي ([whole-reel-in-ae](../After-Effects/whole-reel-in-ae.md)) |
| مكتبة برومبتات الترانزيشن `transition-prompts-library.txt` والصور المرجعية | `<DOCS>\Gimco_Motion_Skill\abdallah-generate` | [start-end-transitions](../Generation/start-end-transitions.md) |
| كتالوج العناصر `asset-library.md` | `<DOCS>\Gimco_Motion_Skill` | [saveobjects-library](saveobjects-library.md) |

## مالوش نسخة
`preset_catalog.csv`، ونسخ مفكوكة من `ProximityPro.jsx` و`_MahmoudPresets.jsx`: مفيش نسخة متأكدين منها. البديل: الأرقام الملخّصة في [preset-values](../Premiere/preset-values.md)، والبريستات المتسطبة نفسها، وProximityPro الأصلي على درايف H.
