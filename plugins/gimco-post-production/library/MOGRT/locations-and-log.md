# أماكن الشغل وسجل الموجرتات

- **الاستخدام:** تعرف الملفات فين وإيه اللي اتعمل قبل كده.
- **المكان:** نصي
- **المتطلبات:** مش محتاج
- **البديل Native:** مش محتاج
- **الفهرس:** [INDEX](../INDEX.md)

---

## الأماكن
- فولدر الشغل: `<DOCS>\Cluade` (الجذر في [LOCATIONS](../Tools-and-Presets/LOCATIONS.md)؛ فيه scripts وwork وtemplates وreports).
  - `scripts\abdallah_build.jsx` البيلد الذكي · `abdallah_inspect.jsx` الفحص · `abdallah_snap.jsx` السناب + اختبار الألوان · `abdallah_postprocess.py` · `jobs.example.json`
  - قديم ولسه شغال: `guava_batch.jsx` (دفعات الكاش)، `guava_rebrand_text.jsx`، `guava_export_only.jsx`، `guava_add_outro.jsx`، `guava_smart.jsx`، `postprocess.py`
  - ملفات تجارب 3 نوفمبر (ممكن تتمسح بموافقة عبدالله): `build_lesson-captions*.jsx`، `dump_*.jsx`، `snap_lesson-captions.jsx`، `snap_color.jsx`، `strip_lesson-captions.jsx`، `inspect_open.jsx`
  - `jobs.json` (في الفولدر الرئيسي) · `work\<اسم>\` · `templates\raw\` · `templates\vN\` · `reports\` (inspect.txt, batch\build_report.txt, snap\)
- السكربتات بتحسب مكانها من `$.fileName` (فولدر الشغل = الأب بتاع scripts) فبتشتغل على أي جهاز.
- مشروع جاي على تليجرام بينزل في فولدر Telegram Desktop جوه Downloads: انقله لفولدر شغل قبل ما تبدأ، وصدّر جنبه.
- `Motion Graphics Template Media` = كاش بريمير (فولدرات GUID، في كل واحد `.aegraphic` = zip فيه `Untitled Project.aep` + `(Footage)` + `Thumbnails`، فيه نسخ مكررة زي `type numbers`)؛ ما نعدلش فيه. موجرتات بريمير المتسطبة: `%AppData%\Adobe\Common\Motion Graphics Templates` (مرجع لفورمات جروبات شغالة: Arabic Sk Text Animations، captions_modern).

## سجل الموجرتات (زوّد بعد كل واحد/دفعة)
| الموجرت | اللي اتعمل | الدرس |
|---|---|---|
| volt text → Glow Title | 13 كنترول، 4 جروبات، ربط لون الخط بالـFill، حماية، قص | Fill effect بيغطي الستروك |
| volt ui 20 → Search Bar | Text·Media·Colors، خروج معكوس | خانة Name بتغلب السكربت |
| Up Text | أسماء بس | متكسرش شغل عبدالله |
| text flicer → Flicker Title | قص 62→3.3ث، 4 جروبات | Maximize Panel Group |
| type numbers → Number Counter | Target Number، 6 جروبات | Add Group بعد العنصر المحدد؛ السكرول غيّر قيم |
| دفعة 1 (`batch1.json`): Untitled→Stutter Glow Text، in red volt 2 low→Red Glow Ring، jezira scene→Egypt Map Scene، jizera scene 3→Archive Poster، volt glass gezira slow→Glass Video Frame، volt ui 1→Logo Badge، volt ui 46→Vintage Text Box، التحريكة الخامسة→Photo Clip Card | guava_batch + postprocess | فولت بالكشيدة؛ أسماء URL-encoded؛ dialogs؛ مدد 33/59ث. **نفس capsuleID القديم → احتمال بريمير يعرض نسخ قديمة؛ لو فيه مشكلة أعدها بـabdallah_postprocess** |
| highlight text → Highlight Title (يدوي) | 10→6ث، خروج معكوس، حماية، نص الجلو بإكسبريشن + Color Control، Text Color بأنيميتور | السحب من Effect Controls مابيشتغلش؛ الحافظة محتاجة clipboardWrite؛ بريمير بيعرض اسم الكومنت |
| تحديث السكربتات القديمة | postprocess: الكومنت بالاسم؛ batch + rebrand: عبـــدالله موجـــرتس + thmanyah + Ligatures | لسه متجربوش جوه AE |
| **lesson-captions (Pre-comp 2–5) → Dot Glow Word · Diamond Glow Title · Flicker Frame Word · Underline Glow Title** (3 نوفمبر) | ماسترز جديدة (الأصلي ماتلمسش)، T_ time map، الدايرة/النجوم/الفريم/الخط بيمشوا مع النص، Colorize، Line Spacing، Line Width/Thickness منفصلين، جروبات يدوي في البانل، كومنت. **لسه ماتصدّروش بعد الجروبات اليدوية** | Fill سوليد بوّظ الجريدينت؛ time remap جمّد كل حاجة؛ capsuleID القديم خلّى بريمير يعرض نسخة قديمة؛ commit بيكتب نسخة قديمة؛ 2D scale طوله 2؛ الكنترولز قبل الإكسبريشن؛ left_click_drag للجروبات؛ الكتابة من غير فوكس = شورتكتات؛ ternary متداخل في ExtendScript. بقت السكربتات العامة abdallah_* |
| **Final (أرقام) → Number Title RTL · Final (كارت بيقلب) → Flip Card Two Messages** (24 نوفمبر، `work\Number and Flip Mogrts\`) | دبلكيت؛ الرقم: الحركة معكوسة RTL (المربع يمين والبوكس يفتح شمال) والبوكس بعرض النص + Max Text Width + Box Padding + الرقم بيصغر لو أكتر من خانة + خروج انكماش 0.35ث محمي؛ الكارت: البوكسين بمقاس النص، Box Padding (Point Control واحد)، Float Amount للـwiggle، حماية الدخول 4.7ث. جروبات: النصوص · الأشكال والألوان · الحركة. **ماتصدّروش** | `getMotionGraphicsTemplateControllerName` بيرجّع بترتيب البانل، والكنترولز الجديدة بتتضاف **فوق**؛ خاصية متضافة قبل كده = تحذير "already referenced". خاصية عليها إكسبريشن في EGP بتعرض القيمة بعد الإكسبريشن (Rect Size طلع 828 بدل البادينج) → الكنترول يبقى على ليير Controls. فولدر الحفظ لازم يكون موجود وإلا `project.save` بيفشل |
| **باك 2 (5 جديدة من الصفر):** Stat Counter · Wrong vs Right · Chat Bubble · Checklist Steps · Quote Card (24 نوفمبر، `work\Abdallah Mogrts Pack 2\` + `build_pack2.jsx`) | كلها بإكسبريشن من غير كيفريمز (دخول bk/eo وخروج بـ thisComp.duration)، RTL، بمقاس النص، حماية Intro/Outro. الكنترولز بالترتيب الصح، والسبعة (مع باك 1 متستورد في فولدر Pack 1) في مشروع واحد بجروبات وكومنت و ranges و Edit Properties. **ماتصدّروش** | `addToMotionGraphicsTemplateAs` بيحط الجديد فوق ← ضيف بالترتيب العكسي. ليير اتعمل بعد الشيب بيبقى فوقه (اتعمل النص قبل الكارت فاتغطى). السحب في البانل وقف مرة ورجع اشتغل بعد إعادة فتح الكومب في EGP + Maximize Panel Group. فعّل Edit Properties من تحت لفوق عشان الصفوف ماتتزحزحش |

## تطوير السكيل
