import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 15 10" {...props} fill="none">
    <path
      d="M13.57 0H.69a.69.69 0 1 0 0 1.38h12.88a.69.69 0 0 0 0-1.38ZM12.171 4.253a.69.69 0 1 0 0-1.38H2.09a.69.69 0 1 0 0 1.38H12.17ZM13.57 5.747H.69a.69.69 0 1 0 0 1.38h12.88a.69.69 0 0 0 0-1.38ZM12.171 8.62H2.09a.69.69 0 1 0 0 1.38H12.17a.69.69 0 1 0 0-1.38Z"
      fill={props.fill}
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;
