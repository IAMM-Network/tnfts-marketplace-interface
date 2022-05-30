import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 100 48" {...props} fill="none">
    <path
      d="M25.988 14.94c-.003-1.926-2.067-3.112-3.589-2.028a3.72 3.72 0 0 0-.078.059l-8.271 6.391a1.714 1.714 0 0 1-2.113 0l-8.27-6.391a4.001 4.001 0 0 0-.079-.059C2.066 11.828.003 13.014 0 14.94v18.24C0 34.462.99 35.5 2.21 35.5h21.58c1.221 0 2.21-1.04 2.21-2.321l-.009-18.249-.003.01ZM5.348 32.23c-1.242 0-2.25-1.06-2.248-2.364l.006-6.83c.002-1.158 1.237-1.872 2.15-1.22l.046.035 4.584 3.558a1.622 1.622 0 0 0 2.004 0l4.584-3.558.047-.034c.912-.653 2.148.06 2.15 1.22l.006 6.829c0 1.305-1.006 2.363-2.25 2.363H5.35ZM39.14 17h4.72v14h-4.72V17Zm16.532 11.56h-5.32l-.94 2.44h-4.8l6.12-14h4.64l6.12 14h-4.88l-.94-2.44Zm-1.3-3.4-1.36-3.52-1.36 3.52h2.72ZM74.746 31l-.04-6.38-3.04 5.12h-2.08l-3.04-4.9V31h-4.3V17h3.88l4.56 7.46 4.44-7.46h3.88l.04 14h-4.3Zm19.082 0-.04-6.38-3.04 5.12h-2.08l-3.04-4.9V31h-4.3V17h3.88l4.56 7.46 4.44-7.46h3.88l.04 14h-4.3Z"
      fill={props.fill}
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;
