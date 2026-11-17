// العربي: الاتجاه من الكلمات، وتقسيم حرف حرف من غير ما الوصل يتكسر.

const ARABIC_SCRIPT = /[֐-ࣿיִ-﷿ﹰ-﻿]/;

// الاتجاه بعدد الكلمات مش بأول حرف: كابشن عربي ممكن يبدأ باسم براند لاتيني
export const isRtlWords = (words: string[]) =>
  words.filter((w) => ARABIC_SCRIPT.test(w)).length > words.length / 2;

const ZWJ = "‍";
const HARAKA = /[ً-ٰٟۖ-ۭ]/;
// حروف بتتوصل باللي قبلها بس، مش باللي بعدها (ا د ذ ر ز و ة وأخواتها)
const JOINS_PREVIOUS_ONLY =
  /[آ-إاةد-زوٱ-ٳٵ-ٷڈ-ڙۀۃ-ۋۍۏےۓە]/;
const ARABIC_LETTER = /[ؠ-يٮ-ۓەۺ-ۼۿ]/;
const HAMZA = "ء";
const LATIN_OR_DIGIT = /^[0-9٠-٩۰-۹A-Za-z٫٬.,:%]+$/;

const base = (unit: string) => unit.replace(/[ً-ٰٟۖ-ۭ‍]/g, "");
const canJoinBefore = (unit: string) => {
  const c = base(unit)[0] ?? "";
  return ARABIC_LETTER.test(c) && c !== HAMZA;
};
const canJoinAfter = (unit: string) => {
  const c = base(unit).slice(-1);
  return ARABIC_LETTER.test(c) && c !== HAMZA && !JOINS_PREVIOUS_ONLY.test(c);
};

// كلمة ← وحدات تتحرك لوحدها وتفضل متوصلة:
// الحركات مع حرفها، «لا» وحدة واحدة، الأرقام واللاتيني وحدة، وZWJ على الجانب اللي بيتوصل
export const splitJoinedLetters = (word: string): string[] => {
  const clusters: string[] = [];
  for (const ch of word) {
    if (HARAKA.test(ch) && clusters.length > 0) clusters[clusters.length - 1] += ch;
    else clusters.push(ch);
  }
  const units: string[] = [];
  for (let i = 0; i < clusters.length; i++) {
    const c = clusters[i];
    if (LATIN_OR_DIGIT.test(c)) {
      let run = c;
      while (i + 1 < clusters.length && LATIN_OR_DIGIT.test(clusters[i + 1])) run += clusters[++i];
      units.push(run);
    } else if (base(c) === "ل" && /^[آأإا]/.test(base(clusters[i + 1] ?? ""))) {
      units.push(c + clusters[++i]);
    } else {
      units.push(c);
    }
  }
  return units.map((u, i) => {
    const before = i > 0 && canJoinAfter(units[i - 1]) && canJoinBefore(u) ? ZWJ : "";
    const after = i < units.length - 1 && canJoinAfter(u) && canJoinBefore(units[i + 1]) ? ZWJ : "";
    return before + u + after;
  });
};
