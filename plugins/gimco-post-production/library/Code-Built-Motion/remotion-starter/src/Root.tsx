import React from "react";
import { CalculateMetadataFunction, Composition, Folder } from "remotion";
import { HOUSE } from "./house/config";
import { HouseKitTest } from "./HouseKitTest";

type Props = { background: string };

// الرندر الافتراضي لكل كومب: ProRes 4444 شفاف لبريمير
const prores: CalculateMetadataFunction<Props> = async () => ({
  defaultCodec: "prores",
  defaultVideoImageFormat: "png",
  defaultPixelFormat: "yuva444p10le",
  defaultProResProfile: "4444",
});

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="House">
      <Composition
        id="HouseKitTest"
        component={HouseKitTest}
        durationInFrames={4 * HOUSE.fps}
        fps={HOUSE.fps}
        width={HOUSE.width}
        height={HOUSE.height}
        defaultProps={{ background: "transparent" }}
        calculateMetadata={prores}
      />
    </Folder>
  );
};
