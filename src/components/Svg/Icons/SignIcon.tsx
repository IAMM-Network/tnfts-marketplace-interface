import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 12 11" {...props} fill="none">
    <path
      d="M10.34 7.104c-.732-.019-1.466-.007-2.2-.008-2.068 0-4.137.002-6.205-.005-.16 0-.338-.033-.475-.104a.49.49 0 0 1-.23-.6c.081-.235.298-.385.574-.386C2.74 6 3.675 6.001 4.61 6h.18V4.923c-.033-.005-.062-.014-.09-.014-.985 0-1.97-.01-2.955.005C.745 4.93-.024 5.686 0 6.587c.026.911.817 1.592 1.82 1.592h8.23c.059 0 .118-.002.177.002.38.024.648.36.548.681-.088.28-.297.414-.655.414H.614v1.074c.068.003.126.007.184.008.442.004.885.01 1.327.01 2.685.002 5.37.007 8.054-.002 1.236-.004 2.07-1.02 1.745-2.1-.191-.634-.864-1.144-1.583-1.162Z"
      fill={props.fill}
    />
    <path
      d="M6.023 6h.872c.285 0 .57-.004.856.002a.702.702 0 0 0 .512-.195c1.178-1.074 2.359-2.145 3.538-3.218.255-.232.268-.555.025-.794-.137-.135-.285-.26-.428-.39-.434-.394-.874-.784-1.302-1.184-.306-.288-.673-.297-.98-.014-.497.459-1 .913-1.5 1.369L5.6 3.408a.55.55 0 0 0-.202.405 81.69 81.69 0 0 0 0 1.636c.003.324.266.55.625.551Z"
      fill={props.fill}
    />
  </Svg>
);

Icon.defaultProps = {
  fill: "white",
};

export default Icon;
