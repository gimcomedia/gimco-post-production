# Gimco Post-Production

نظام مونتاج وإخراج بالعربي (مصري) لـ Claude: سكيلات + مكتبة مراجع.

## فيه إيه
- `plugins/gimco-post-production/skills/`
  - **montage-hub** — نقطة البداية لأي شغل فيديو: يفهم الطلب، يختار الاتجاه والوصفة، ويراجع قبل التسليم.
  - **after-effects-knowledge** — تنفيذ الموشن في After Effects (كومبات قابلة للتعديل و.jsx).
  - **mogrt-builder** — قوالب MOGRT تتعدّل في Premiere.
  - **abdallah-generate** — توليد صور وفيديو بموافقة على التكلفة.
  - **social-captions-ar** — وصف المنشور والهاشتاجات.
- `plugins/gimco-post-production/library/` — مكتبة المراجع (ابدأ من `INDEX.md` الموجّه ← «ابدأ هنا»، والبحث بالاحتياج في `NEEDS.md`، و«قواعد البيت» في `Visual-Direction/style-systems.md`).

## إزاي بيتحدّث
الريبو ده المصدر الوحيد. خطوات أي تحديث في [`CLAUDE.md`](CLAUDE.md)، وكل تحديث متسجل في [`CHANGELOG.md`](CHANGELOG.md)، والفحص قبل أي commit: `python3 tools/check_system.py`.

**رفع وتحديث كل حاجة مرة واحدة (ويندوز):** دبل كليك على `sync.bat` في أول الريبو: بيفحص الريبو (`check_system.py`، ولو فشل ما بيعملش commit)، وبيعمل commit لأي تعديل برسالة فيها رقم النسخة من أول CHANGELOG، وبعدين pull ثم push، ويقفل على DONE أو سبب الفشل.

**تحديث بس من غير رفع:** دبل كليك على `pull.bat` في أول الريبو. بيعمل `git pull --ff-only` ويقفل على رسالة Done أو Pull failed. لو فشل: افتح GitHub Desktop وشوف التعديلات المحلية.

## التسطيب
**Claude Code:**
```
/plugin marketplace add gimcomedia/gimco-post-production
/plugin install gimco-post-production@gimco-media
```
**claude.ai / تطبيق Claude:** اعمل zip لكل فولدر سكيل لوحده (فيه `SKILL.md`) وارفعه من Settings > Capabilities > Skills.

## ملاحظات
- «قواعد البيت» وقرارات الذوق (الخطوط، مكان الكابشن، الجلو، الباونس) قرارات صاحب المكتبة؛ عدّلها على ذوقك.
- مسارات الجهاز كلها في `Tools-and-Presets/LOCATIONS.md` كجذور (`<ASSETS>` و`<DOCS>` و`<AE>`): على جهاز تاني غيّر جدول الجذور بس.
- البلاجنز والخطوط والباكات مش جزء من الريبو. القايمة كلها (البرامج، الإعدادات، البلاجنز وبدايلها، الخطوط، الكورسات) في [`REQUIREMENTS.md`](REQUIREMENTS.md).
