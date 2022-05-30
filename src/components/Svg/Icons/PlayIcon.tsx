import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 39 45" {...props} fill="none">
    <path
      d="M37.25 20.335c1.667.962 1.667 3.368 0 4.33L5 43.285c-1.667.962-3.75-.241-3.75-2.165V3.88C1.25 1.956 3.333.753 5 1.715l32.25 18.62Z"
      stroke={props.fill}
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;
