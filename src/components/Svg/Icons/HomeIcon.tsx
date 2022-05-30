import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 30 25" {...props} fill="none">
    <path
      d="M5.712 8.274 14.89.773c4.527 3.695 9.035 7.375 13.679 11.168H26.03c-.67 0-1.368.502-1.368 1.299v11.01H18.56a.2.2 0 0 1-.135-.047.087.087 0 0 1-.02-.026.019.019 0 0 1-.003-.01v-6.924c0-.932-.802-1.582-1.658-1.582h-3.516c-.853 0-1.659.65-1.659 1.582v6.925s.001.014-.022.035a.199.199 0 0 1-.135.047H5.27V13.31c0-.798-.697-1.3-1.367-1.3H1.139l4.573-3.736Z"
      fill={props.fill}
      stroke={props.fill}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;
