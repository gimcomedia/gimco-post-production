# Gimco Post-Production

نظام مونتاج وإخراج بالعربي (مصري) لـ Claude: سكيلات + مكتبة مراجع.

## فيه إيه
- `plugins/gimco-post-production/skills/`
  - **montage-hub** — نقطة البداية لأي شغل فيديو: يفهم الطلب، يختار الاتجاه والوصفة، ويراجع قبل التسليم.
  - **after-effects-knowledge** — تنفيذ الموشن في After Effects (كومبات قابلة للتعديل و.jsx).
  - **mogrt-builder** — قوالب MOGRT تتعدّل في Premiere.
  - **abdallah-generate** — توليد صور وفيديو بموافقة على التكلفة.
  - **social-captions-ar** — وصف المنشور والهاشتاجات.
- `plugins/gimco-post-production/library/` — مكتبة المراجع (ابدأ من `INDEX.md` ← «ابدأ هنا»، و«قواعد البيت» في `Visual-Direction/style-systems.md`).

## التسطيب
**Claude Code:**
```
/plugin marketplace add <owner>/gimco-post-production
/plugin install gimco-post-production@gimco-media
```
**claude.ai / تطبيق Claude:** اعمل zip لكل فولدر سكيل لوحده (فيه `SKILL.md`) وارفعه من Settings > Capabilities > Skills.

## ملاحظات
- «قواعد البيت» وقرارات الذوق (الخطوط، مكان الكابشن، الجلو، الباونس) قرارات صاحب المكتبة؛ عدّلها على ذوقك.
- المسارات في `Tools-and-Presets/LOCATIONS.md` على جهاز صاحب المكتبة؛ غيّرها لجهازك.
- البلاجنز والخطوط المذكورة مش جزء من الريبو، ولازم تكون متسطبة ومرخصة عندك.
