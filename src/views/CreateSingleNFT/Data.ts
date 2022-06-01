import React from "react";
import {
  AudioFileIcon,
  ImageFileIcon,
  StarIcon,
  VideFileIcon,
  SvgProps,
} from "../../components/Svg";

export interface MediaOptionsProps {
  icon: React.FC<SvgProps>;
  text: string;
}

export const mediaOptions: MediaOptionsProps[] = [
  {
    icon: ImageFileIcon,
    text: "Image",
  },
  {
    icon: VideFileIcon,
    text: "Video",
  },
  {
    icon: AudioFileIcon,
    text: "Audio",
  },
  {
    icon: StarIcon,
    text: "Custom",
  },
];
