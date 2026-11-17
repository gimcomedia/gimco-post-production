import React from "react";
import { useBounceProgress, useHouseScale } from "./bounce";
import { HOUSE } from "./config";

// كارت جلاس بسيط بباونس الكروت (من نص الحجم لحجمه = ~105% في القمة)
export const Card: React.FC<{ start: number; children: React.ReactNode; style?: React.CSSProperties }> = ({
  start,
  children,
  style,
}) => {
  const scale = useHouseScale(start, "card", 0.5);
  const opacity = Math.min(1, useBounceProgress(start, "none") * 3);
  return (
    <div
      style={{
        scale,
        opacity,
        padding: "36px 48px",
        borderRadius: 36,
        background: "rgba(255,255,255,0.14)",
        border: `2px solid ${HOUSE.accent}66`,
        boxShadow: "0 24px 60px rgba(0,0,0,0.30)",
        backdropFilter: "blur(18px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
