import styled from "styled-components";
import { Box } from "../../Box";

export const HeaderWrapper = styled(Box)<{ main?: boolean }>`
  align-items: center;
  background-color: ${({ main }) => (main ? "#8B40F4" : "#1A1A1A")};
  display: flex;
  height: 80px;
  width: 100vw;

  .container {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const HeaderContent = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
