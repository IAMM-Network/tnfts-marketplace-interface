import styled from "styled-components";
import { Box } from "../../Box";

export const PopupWrapper = styled(Box)`
    background: rgba(0, 0, 0, 0.8);;
    display: grid;
    height: 100vh;
    left: 0;
    place-items: center;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 1000;
`;

export const Close = styled.button`
    background-color: #8B40F4;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: grid;
    font-size: 1.5rem;
    height: 40px;
    place-items: center;
    position: absolute;
    right: 50px;
    text-align: center;
    top: 50px;
    width: 40px;

    &:active {
        transform: scale(1.1);
    }
`
