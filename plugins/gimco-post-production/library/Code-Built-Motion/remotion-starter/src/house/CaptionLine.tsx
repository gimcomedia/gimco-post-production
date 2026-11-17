import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { useHouseScale } from "./bounce";
import { HouseCaption, msToFrame } from "./captions";
import { fontStack, HOUSE } from "./config";
import { isRtlWords } from "./arabic";

const Word: React.FC<{ c: HouseCaption; fontSize: number }> = ({ c, fontSize }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = msToFrame(c.startMs, fps);
  const scale = useHouseScale(start, "small");
  return (
    <span
      style={{
        display: "inline-block",
        scale,
        transformOrigin: "50% 80%",
        opacity: interpolate(frame, [start, start + 3], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        fontFamily: fontStack(c.special ? HOUSE.fonts.special : HOUSE.fonts.main),
        fontWeight: 800,
        fontSize: c.special ? fontSize * 1.25 : fontSize,
        color: c.special ? HOUSE.accent : HOUSE.text,
        // العربي: من غير letter-spacing ولا italic، والـ ligatures شغالة
        letterSpacing: 0,
        fontFeatureSettings: '"liga" 1, "calt" 1',
        textShadow: "0 4px 18px rgba(0,0,0,0.35)",
      }}
    >
      {c.text.trim()}
    </span>
  );
};

// سطر كابشن كلمة كلمة عند الصدر، كل كلمة بتنط على فريم نطقها
export const CaptionLine: React.FC<{ captions: HouseCaption[]; fontSize?: number; y?: number }> = ({
  captions,
  fontSize = 72,
  y = HOUSE.captionY,
}) => {
  const { width, height } = useVideoConfig();
  const rtl = isRtlWords(captions.map((c) => c.text));
  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      lang={rtl ? "ar" : "en"}
      style={{
        position: "absolute",
        top: height * y,
        left: HOUSE.safe.side,
        width: width - HOUSE.safe.side * 2,
        translate: "0 -50%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "baseline",
        columnGap: fontSize * 0.28,
        lineHeight: 1.2,
      }}
    >
      {captions.map((c, i) => (
        <Word key={i} c={c} fontSize={fontSize} />
      ))}
    </div>
  );
};
