import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg
    width={40}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M39.982 3.59C39.979.757 36.803-.989 34.462.608l-.122.085-12.725 9.405a2.737 2.737 0 0 1-3.252 0L5.641.693c-.04-.03-.08-.058-.121-.085C3.18-.99.004.757 0 3.59v26.842a3.406 3.406 0 0 0 3.4 3.414h33.2c1.879 0 3.401-1.53 3.4-3.415l-.013-26.854-.005.013ZM25.274 29.032H8.23a3.467 3.467 0 0 1-3.46-3.478l.01-10.05c.002-1.706 1.903-2.755 3.306-1.795l.072.051 7.051 5.236c.917.681 2.167.681 3.084 0l7.051-5.236a1.18 1.18 0 0 1 .072-.051c1.403-.96 3.305.09 3.306 1.794l.01 10.05a3.466 3.466 0 0 1-3.458 3.48Z"
      fill={props.fill}
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "#696969",
};

export default Icon;
