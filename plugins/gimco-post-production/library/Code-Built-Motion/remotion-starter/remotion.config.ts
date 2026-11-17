// إعدادات البيت: الرندر الافتراضي ProRes 4444 شفاف عشان يقعد على تراك في بريمير فوق الفوتدج.
// لو عايز MP4 عادي للمراجعة: npx remotion render <id> out/review.mp4 --codec=h264 --image-format=jpeg --pixel-format=yuv420p
import { Config } from "@remotion/cli/config";

Config.setRspack(true);
Config.setOverwriteOutput(true);
Config.setDefaultPremountInSeconds(2);
Config.setVideoImageFormat("png");
Config.setPixelFormat("yuva444p10le");
Config.setCodec("prores");
Config.setProResProfile("4444");
// إفكتات @remotion/effects (WebGL) محتاجة ده وقت الرندر
Config.setChromiumOpenGlRenderer("angle");
