import React from "react";
import {
  MediaAudioIcon,
  MediaImageIcon,
  MediaStarIcon,
  MediaVideoIcon,
  SvgProps,
} from "../../components/Svg";

export interface MediaOptionsProps {
  icon: React.FC<SvgProps>;
  text: string;
}

export const mediaOptions: MediaOptionsProps[] = [
  {
    icon: MediaImageIcon,
    text: "Image",
  },
  {
    icon: MediaVideoIcon,
    text: "Video",
  },
  {
    icon: MediaAudioIcon,
    text: "Audio",
  },
  {
    icon: MediaStarIcon,
    text: "Custom",
  },
];
