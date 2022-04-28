import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 751 751" {...props}>
    <circle
      cx={375.5}
      cy={375.5}
      r={375}
      style={{
        fill: "none",
        stroke: props.fill,
        strokeWidth: 40,
      }}
    />
    <path
      d="M595.31 591.36 420 416.06h74.9V204.69h100.41ZM304.83 592.88H204.69V206l175.43 175.39h-75.3c.01 70.84.01 141.03.01 211.49Z"
      transform="translate(-24.5 -24.5)"
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;
