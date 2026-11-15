# فحص الريبو قبل أي commit: السكيلات + المكتبة + النسخة.
# الاستخدام (من أول الريبو): python3 tools/check_system.py
import os, re, sys, json
ROOT = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLUGIN = os.path.join(ROOT, "plugins", "gimco-post-production")
SKILLS, LIB = os.path.join(PLUGIN, "skills"), os.path.join(PLUGIN, "library")
# أسماء المشاريع والعملاء والكورسات وأصحاب الريفرنسات: مكانها INDEX.md وLICENSES.md بس
BANNED = [r"Macca", r"mecca", r"الكبار 01", r"أسماء الأنصاري", r"دروس عمر", r"Omar", r"Artur", r"art\.vfxs",
          r"MahdiEdits", r"creatoroly", r"neuronfx", r"gerakvisual", r"Hint Sync", r"editingshift", r"فارس",
          r"moatassem", r"Blade Course", r"جرين انترناشونال", r"Green International", r"\bGimco\b(?! Media)(?!_Motion)",
          r"STYLE OF CLENT", r"بروبوليس", r"DrAhmed", r"pelleaval", r"Yousefi", r"vahidgraph\.ir", r"[Dd]ani[Dd]esign",
          r"For lEarning", r"Tut ?64", r"GIMDERMA", r"AMWC", r"\bGIM\b", r"\bEdita\b", r"editaclub"]
NAME_FILES = {"INDEX.md", "LICENSES.md"}
RETIRED = [r"New folder\\Post-Production-References", r"New folder/Post-Production-References", r"Abdallah-Skills-v2\\", r"Abdallah-Skills-v2/"]
LIB_DIRS = "Editorial|Visual-Direction|Premiere|After-Effects|MOGRT|Generation|Tools-and-Presets|Templates-and-Checklists|Specialized|Code-Built-Motion"
results = []
def check(name, ok, detail=""):
    results.append(ok); print(("PASS " if ok else "FAIL ") + name + (" — " + detail if detail else ""))
def md_files(root):
    for d, _, fs in os.walk(root):
        for f in sorted(fs):
            if f.endswith(".md"): yield os.path.join(d, f)
def read(p): return open(p, encoding="utf-8").read()

# 1) أسماء المصادر برا السكيلات (سطر رخصة MIT استثناء)
hits = [f"{os.path.relpath(p, ROOT)}:{i}:{b}" for p in md_files(SKILLS) for i, l in enumerate(read(p).split("\n"), 1)
        if "MIT License" not in l for b in BANNED if re.search(b, l)]
check("أسماء المشاريع والعملاء والمصادر برا السكيلات", not hits, "; ".join(hits[:10]))
# 2) أسماء المصادر في INDEX/LICENSES بس جوه المكتبة
hits = [f"{os.path.relpath(p, LIB)}:{i}:{b}" for p in md_files(LIB) if os.path.basename(p) not in NAME_FILES
        for i, l in enumerate(read(p).split("\n"), 1) for b in BANNED if re.search(b, l)]
check("أسماء المصادر في فهرس المكتبة بس", not hits, "; ".join(hits[:10]))
# 3) الروابط النسبية في المكتبة شغالة
bad, n = [], 0
for p in md_files(LIB):
    for m in re.finditer(r"\]\(([^)#:]+\.md)\)", read(p)):
        n += 1
        if not os.path.exists(os.path.normpath(os.path.join(os.path.dirname(p), m.group(1)))): bad.append(f"{os.path.relpath(p, LIB)} -> {m.group(1)}")
check(f"روابط المكتبة النسبية شغالة ({n} رابط)", not bad, "; ".join(bad[:10]))
# 4) ملفات المكتبة اللي السكيلات بتحيل عليها موجودة
bad, n = [], 0
for p in md_files(SKILLS):
    t = read(p)
    for m in re.finditer(rf"`((?:{LIB_DIRS})/[^`]+\.md)`", t):
        n += 1
        if not os.path.exists(os.path.join(LIB, m.group(1))): bad.append(f"{os.path.relpath(p, SKILLS)} -> {m.group(1)}")
    for m in re.finditer(r"\brecipe-[a-z0-9-]+\b", t):
        n += 1
        if not any(os.path.exists(os.path.join(LIB, d, m.group(0) + ".md")) for d in LIB_DIRS.split("|")): bad.append(f"{os.path.relpath(p, SKILLS)} -> {m.group(0)}")
check(f"مراجع المكتبة في السكيلات موجودة ({n} مرجع)", not bad, "; ".join(sorted(set(bad))))
# 5) مفيش إشارة للفولدرات القديمة المتقفلة (غير جملة الإقفال في montage-hub)
hits = []
for p in list(md_files(SKILLS)) + list(md_files(LIB)):
    for i, l in enumerate(read(p).split("\n"), 1):
        if any(re.search(r, l) for r in RETIRED): hits.append(f"{os.path.relpath(p, ROOT)}:{i}")
check("مفيش مسار بيشاور على الفولدرات القديمة", not hits, "; ".join(hits[:10]))
# 6) كل SKILL.md: frontmatter + معيار نتيجة + أساسيات من غير المكتبة
bad = []
for d in sorted(os.listdir(SKILLS)):
    t = read(os.path.join(SKILLS, d, "SKILL.md"))
    fm = re.match(r"---\nname: \"?([a-z0-9-]+)\"?\ndescription: \"?(.+?)\"?\n---\n", t, re.S)
    if not fm or fm.group(1) != d: bad.append(d + ": frontmatter")
    if "معيار النتيجة" not in t: bad.append(d + ": معيار النتيجة")
    if not re.search(r"من غير المكتبة|مش متاحة", t): bad.append(d + ": أساسيات من غير المكتبة")
check("كل SKILL.md فيه وصف + معيار نتيجة + أساسيات من غير المكتبة", not bad, "; ".join(bad))
# 7) راس كل ملف مكتبة: الاستخدام / المكان / المتطلبات / البديل Native
bad = [f"{os.path.relpath(p, LIB)}:{k}" for p in md_files(LIB) if os.path.basename(p) not in NAME_FILES
       for k in ("الاستخدام", "المكان", "المتطلبات", "البديل Native") if f"**{k}:**" not in read(p)[:1500]]
check("راس كل ملف مكتبة كامل", not bad, "; ".join(bad[:10]))
# 8) كل ملف مكتبة متفهرس في INDEX.md
idx = read(os.path.join(LIB, "INDEX.md"))
miss = [os.path.relpath(p, LIB).replace(os.sep, "/") for p in md_files(LIB) if os.path.basename(p) not in NAME_FILES
        and os.path.relpath(p, LIB).replace(os.sep, "/") not in idx]
check("كل ملفات المكتبة متفهرسة في INDEX.md", not miss, "; ".join(miss))
# 9) رقم النسخة في plugin.json = أول نسخة في CHANGELOG.md
ver = json.load(open(os.path.join(PLUGIN, ".claude-plugin", "plugin.json"), encoding="utf-8"))["version"]
cl = os.path.join(ROOT, "CHANGELOG.md")
top = re.search(r"^## (\d+\.\d+\.\d+)", read(cl), re.M).group(1) if os.path.exists(cl) else None
check(f"النسخة {ver} متسجلة في أول CHANGELOG.md", top == ver, f"CHANGELOG: {top}")

print(f"\n{sum(results)}/{len(results)} PASS")
sys.exit(0 if all(results) else 1)
