import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import "./house/fonts";
import { CaptionLine } from "./house/CaptionLine";
import { Card } from "./house/Card";
import { LetterReveal } from "./house/LetterReveal";
import { fontStack, HOUSE } from "./house/config";
import { HouseCaption } from "./house/captions";

// كومب اختبار لقواعد البيت: كابشن عند الصدر كلمة كلمة، كارت بباونس الكروت،
// كلمة عربي حرف حرف متوصلة، وسطر عربي فيه لاتيني وأرقام.
const LINE: HouseCaption[] = [
  { text: "Studio", startMs: 300, endMs: 700, timestampMs: null, confidence: null },
  { text: " 2026", startMs: 700, endMs: 1000, timestampMs: null, confidence: null },
  { text: " بيغيّر", startMs: 1000, endMs: 1400, timestampMs: null, confidence: null },
  { text: " طريقة", startMs: 1400, endMs: 1800, timestampMs: null, confidence: null },
  { text: " الشغل", startMs: 1800, endMs: 2300, timestampMs: null, confidence: null, special: true },
];

export const HouseKitTest: React.FC<{ background: string }> = ({ background }) => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background }}>
      {/* زقّة كاميرا: perceptual-scale عشان الكبر يتحس بالتساوي، ومن غير أوفرشوت */}
      <AbsoluteFill
        style={{
          scale: interpolate(frame, [0, 3 * fps], [1, 1.12], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", top: HOUSE.safe.top + 60 }}>
          <LetterReveal word="الحقيقة" start={6} />
        </div>
        <div style={{ position: "absolute", top: height * 0.36 }}>
          <Card start={24}>
            <div dir="rtl" style={{ fontFamily: fontStack(HOUSE.fonts.main), fontWeight: 800, fontSize: 64, color: HOUSE.text }}>
              ٣ خطوات بس
            </div>
          </Card>
        </div>
      </AbsoluteFill>
      <CaptionLine captions={LINE} />
    </AbsoluteFill>
  );
};
