// نفس شكل Caption في @remotion/captions، فملف Whisper اللي اتحوّل لـ JSON يتحط على طول.
// التوقيت بالمللي ثانية ونسبةً لأول ملف المصدر نفسه (مش لأول التايم لاين).
export type HouseCaption = {
  text: string;
  startMs: number;
  endMs: number;
  timestampMs: number | null;
  confidence: number | null;
  // كلمة خاصة: خطها التاني ولون الأكسنت
  special?: boolean;
};

// العنصر بينزل على فريم نطق كلمته أو بعده بـ 0–3 فريم، أبدًا قبله
export const msToFrame = (ms: number, fps: number, lagFrames = 0) =>
  Math.round((ms / 1000) * fps) + lagFrames;
