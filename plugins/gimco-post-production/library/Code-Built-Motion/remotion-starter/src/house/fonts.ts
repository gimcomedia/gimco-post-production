import { continueRender, delayRender } from "remotion";
import "@fontsource/noto-sans-arabic/700.css";
import "@fontsource/noto-sans-arabic/800.css";
import "@fontsource/noto-sans-arabic/900.css";
import { HOUSE } from "./config";

// الرندر بيستنى الخطوط قبل أول فريم. خطوط ويندوز المتسطبة (Thmanyah Sans، Amira Typo)
// بيشوفها Chrome بالاسم؛ ولو مش موجودة بينزل على Noto Sans Arabic.
// خط مش متسطب وعايزه يتشال مع المشروع: حطه في public/fonts واستخدم loadFont من @remotion/fonts.
const handle = delayRender("House fonts");
const families = [HOUSE.fonts.main, HOUSE.fonts.special, HOUSE.fonts.fallback];
Promise.all(
  families.flatMap((f) => [700, 800, 900].map((w) => document.fonts.load(`${w} 72px "${f}"`, "عربي Latin 123"))),
)
  .catch(() => undefined)
  .then(() => continueRender(handle));
