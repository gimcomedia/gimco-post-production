# تقسيم أي ملف مكتبة عدّى 35KB: خريطة أقسام في مكانه + فولدر بنفس الاسم فيه جزء لكل قسم (## ولو القسم كبير ###).
# تقسيم ميكانيكي بالعناوين من غير ما حاجة تتشال، والروابط النسبية بتتظبط. شغّل بعده: python3 tools/check_system.py
# الاستخدام (من أول الريبو): python3 tools/split_library.py
import os,re,sys
LIB=sys.argv[1] if len(sys.argv)>1 else os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'plugins','gimco-post-production','library')
LIMIT=35*1024
SKIP={'INDEX.md','NEEDS.md','FILES.md','SOURCES.md','LICENSES.md','sentence-to-technique.md'}
LINK=re.compile(r'\]\(([^)#:]+\.md)(#[^)]*)?\)')
def slug_num(h,i):
    m=re.match(r'#+\s*(\d+[a-z]?)[\)\.]',h)
    return m.group(1) if m else f's{i:02d}'
def split_level(text,level):
    pat=re.compile(rf'^{"#"*level} ',re.M)
    idx=[m.start() for m in pat.finditer(text)]
    if not idx: return None
    pre=text[:idx[0]]; parts=[text[a:b] for a,b in zip(idx,idx[1:]+[len(text)])]
    return pre,parts
def relink(body,src_dir,dst_dir):
    def f(m):
        tgt=os.path.normpath(os.path.join(src_dir,m.group(1)))
        return f']({os.path.relpath(tgt,dst_dir).replace(os.sep,"/")}{m.group(2) or ""})'
    return LINK.sub(f,body)
report=[]
for d,_,fs in os.walk(LIB):
    for fn in fs:
        p=os.path.join(d,fn)
        if not fn.endswith('.md') or fn in SKIP or os.path.getsize(p)<=LIMIT: continue
        if os.path.isdir(p[:-3]): continue
        text=open(p,encoding='utf-8').read()
        sp=split_level(text,2)
        if not sp or len(sp[1])<2: print('مينفعش يتقسم بالعناوين (خليه ملف بحث):',p); continue
        pre,secs=sp
        # break oversized sections (or a single giant one) by ###
        units=[]
        for k,s in enumerate(secs,1):
            head=s.split('\n',1)[0]
            if len(s.encode())>LIMIT:
                sub=split_level(s,3)
                if sub:
                    spre,ss=sub
                    num=slug_num(head,k)
                    units.append((f'{num}-0',head,spre))
                    for j,x in enumerate(ss,1): units.append((f'{num}-{j}',head+' ← '+x.split('\n',1)[0].lstrip('# '),x))
                    continue
            units.append((slug_num(head,k),head,s))
        stem=fn[:-3]; folder=os.path.join(d,stem); os.makedirs(folder,exist_ok=True)
        title=re.search(r'^# (.+)$',text,re.M); title=title.group(1) if title else stem
        rows=[]
        for num,head,body in units:
            body=relink(body,d,folder)
            name=f'{num}.md'
            hd=head.lstrip('# ').strip()
            open(os.path.join(folder,name),'w',encoding='utf-8').write(f'<!-- جزء من [{title}](../{fn}) -->\n\n'+body.rstrip()+'\n')
            rows.append(f'| {hd} | {round(len(body.encode())/1024,1)} KB | [{stem}/{name}]({stem}/{name}) |')
        ov=pre.rstrip()+'\n\n## الأقسام\n\nالوصفة متقسمة: كل قسم في ملف لوحده. **افتح القسم اللي الطلب محتاجه بس**، مش الكل.\n\n| القسم | الحجم | الملف |\n|---|---|---|\n'+'\n'.join(rows)+'\n'
        open(p,'w',encoding='utf-8').write(ov)
        report.append((fn,len(text.encode())//1024,len(units),max(len(u[2].encode()) for u in units)//1024,len(ov.encode())//1024))
for r in report: print(r)
