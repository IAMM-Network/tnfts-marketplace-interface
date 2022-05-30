import styled, { css, keyframes } from "styled-components";
import { space } from "styled-system";
import { SvgProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  fill: ${({ fill }) => fill};
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle}
  ${space}
`;

Svg.defaultProps = {
  width: "25px",
  xmlns: "http://www.w3.org/2000/svg",
  spin: false,
  fill: "white",
};

export default Svg;
