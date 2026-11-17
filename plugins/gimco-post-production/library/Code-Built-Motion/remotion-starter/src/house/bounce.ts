import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AXIS_LAG_FRAMES, BOUNCE, BounceKind } from "./config";

// تقدّم الباونس من 0 لـ 1 (بيعدّي 1 ويرجع) بدايةً من startFrame
export const useBounceProgress = (
  startFrame: number,
  kind: BounceKind = "small",
  lagFrames = 0,
) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = frame - startFrame - lagFrames;
  if (f < 0) return 0;
  return spring({ frame: f, fps, config: BOUNCE[kind] });
};

// Scale بالباونس على المحورين، والعرض متأخر شوية عن الطول
// from: الحجم اللي بيبدأ منه (0 لعنصر داخل، 0.5 لكارت بيتضاعف)
export const useHouseScale = (
  startFrame: number,
  kind: BounceKind = "small",
  from = 0,
) => {
  const y = useBounceProgress(startFrame, kind, 0);
  const x = useBounceProgress(startFrame, kind, kind === "none" ? 0 : AXIS_LAG_FRAMES);
  const sx = from + (1 - from) * x;
  const sy = from + (1 - from) * y;
  return `${sx} ${sy}`;
};
