// قواعد البيت في مكان واحد. غيّر هنا بس، وكل الكومبات بتاخد منه.
export const HOUSE = {
  fps: 30,
  width: 1080,
  height: 1920,
  // الكابشن عند الصدر: 52–61% من الطول
  captionY: 0.56,
  // المنطقة الآمنة على 9:16: واجهة المنصة فوق لحد ~335px وتحت من ~1520px، وعمود الأزرار يمين
  safe: { side: 85, top: 335, bottom: 1520, rightColumnArabic: 200 },
  fonts: {
    // اسم الخط زي ما هو متسطب على الجهاز (Chrome بيشوف خطوط ويندوز المتسطبة)
    main: "Thmanyah Sans",
    special: "Amira Typo",
    // بديل مجاني لو الخط مش موجود على الجهاز اللي بيرندر
    fallback: "Noto Sans Arabic",
  },
  // أكسنت واحد بس للفيديو كله: متغير واحد = نسخ بألوان مختلفة من نفس البناء
  accent: "#C9A86A",
  text: "#FFFFFF",
} as const;

// باونس البيت كسبرينج (نفس الأرقام بالظبط في إكسبريشن افتر في rhythm-easing-expressions)
// عند 30fps: small = قمة ~116% عند فريم 11، غطسة ~97% عند 22، يستقر ~28 (أيقونة، كبسولة، كلمة)
//            card  = قمة ~110% عند فريم 10، غطسة ~99% عند 20، يستقر ~24–28 (كارت كبير: ~105% لو بيتضاعف)
//            none  = سريع ثم هادي من غير أوفرشوت، يستقر ~24 (كاميرا، زوم، انزلاق كت-أوت، أوباسيتي)
export const BOUNCE = {
  small: { mass: 1, stiffness: 100, damping: 10 },
  card: { mass: 1, stiffness: 136, damping: 14 },
  none: { mass: 1, stiffness: 100, damping: 20 }, // damping = 2√stiffness: أسرع وصول من غير ما يعدّي الهدف
} as const;
export type BounceKind = keyof typeof BOUNCE;

// العرض بيلحق الطول بـ 3–4 فريم (إحساس مطاط)
export const AXIS_LAG_FRAMES = 3;

export const fontStack = (primary: string) =>
  `"${primary}", "${HOUSE.fonts.fallback}", sans-serif`;
