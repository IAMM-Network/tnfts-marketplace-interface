import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 16 16" {...props} fill="none">
    <path
      d="M.293 7.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L2.414 8l5.657-5.657A1 1 0 0 0 6.657.93L.293 7.293ZM16 7H1v2h15V7Z"
      fill={props.fill}
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;
