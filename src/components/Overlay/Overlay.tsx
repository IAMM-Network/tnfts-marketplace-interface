import { FC, useEffect } from "react";
import { BoxProps } from "../Box";
import { StyledOverlay } from "./styles";

const BodyLock = () => {
  useEffect(() => {
    document.body.style.cssText = `
      overflow: hidden;
    `;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.cssText = `
        overflow: visible;
        overflow: overlay;
      `;
    };
  }, []);

  return null;
};

export const Overlay: FC<BoxProps> = (props) => {
  return (
    <>
      <BodyLock />
      <StyledOverlay role="presentation" {...props} />
    </>
  );
};

export default Overlay;
