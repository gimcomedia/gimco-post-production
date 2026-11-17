import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { useHouseScale } from "./bounce";
import { splitJoinedLetters } from "./arabic";
import { fontStack, HOUSE } from "./config";

const Unit: React.FC<{ u: string; start: number }> = ({ u, start }) => {
  const frame = useCurrentFrame();
  const scale = useHouseScale(start, "small");
  return (
    <span
      style={{
        display: "inline-block",
        scale,
        transformOrigin: "50% 75%",
        opacity: interpolate(frame, [start, start + 2], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      {u}
    </span>
  );
};

// كلمة عربي بتدخل حرف حرف من اليمين والحروف متوصلة (اتجرّب في رندر Chrome)
export const LetterReveal: React.FC<{ word: string; start: number; stagger?: number; fontSize?: number; color?: string }> = ({
  word,
  start,
  stagger = 2,
  fontSize = 150,
  color = HOUSE.text,
}) => {
  const units = splitJoinedLetters(word);
  return (
    <div dir="rtl" lang="ar" style={{ fontFamily: fontStack(HOUSE.fonts.main), fontWeight: 900, fontSize, color, letterSpacing: 0, whiteSpace: "nowrap" }}>
      {units.map((u, i) => (
        <Unit key={i} u={u} start={start + i * stagger} />
      ))}
    </div>
  );
};
