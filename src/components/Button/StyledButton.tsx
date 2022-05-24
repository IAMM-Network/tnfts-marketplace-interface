import styled from "styled-components";
import { space, layout, variant } from "styled-system";
import { styleVariants } from "./theme";

const StyledButton = styled.button`
  align-items: center;
  border: none;
  border-radius: 8px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  outline: none;
  padding: 10px 12px;

  ${variant({
    variants: styleVariants,
  })}

  ${layout}
  ${space}
`;

export default StyledButton;
