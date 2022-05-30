import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 30 32" {...props} fill="none">
    <path
      transform="matrix(.7002 -.71394 .7002 .71394 1 30.51)"
      stroke={props.fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M.75-.75h39.147"
    />
    <path
      transform="scale(-.99025 -1.00966) rotate(45 21.6 -51.022)"
      stroke={props.fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M.75-.75h39.147"
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;
