import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 26 30" {...props} fill="none">
    <path
      d="M9.363 25.418a.166.166 0 0 0-.157.213c.523 1.809 2.41 3.088 4.297 2.903 1.7-.167 3.399-1.564 3.604-2.922a.168.168 0 0 0-.165-.194H9.363ZM24.191 21.458c-.306-.24-.614-.485-.875-.764-1.047-1.126-1.497-2.469-1.635-3.879-.14-1.412-.159-2.834-.21-4.254-.108-2.928-1.617-5.099-4.523-6.513-.694-.336-.849-.583-.732-1.262.201-1.172-.258-2.116-1.377-2.759-1.108-.637-2.286-.633-3.39.01-1.1.64-1.56 1.58-1.36 2.74.117.682-.03.942-.722 1.265-2.21 1.037-3.644 2.617-4.285 4.755-.284.944-.244 1.908-.25 2.868-.007 1.403-.057 2.804-.392 4.181-.325 1.341-.919 2.569-2.146 3.471-.424.312-.605.656-.586 1.135.03.743.394 1.087 1.233 1.087h10.204c3.424 0 6.845-.001 10.269.002.354 0 .664-.073.906-.31.45-.432.37-1.38-.129-1.773Z"
      stroke={props.fill}
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;