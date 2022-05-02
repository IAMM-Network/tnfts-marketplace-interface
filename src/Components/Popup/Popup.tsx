import { useContext } from "react";
import { Context } from "../../contexts/PopupContext";
import { PopupWrapper, Close } from "./styles";

const Popup: React.FC = ({ children }) => {
  const { hidden } = useContext(Context);
  return (
    <PopupWrapper>
      <Close onClick={hidden}>x</Close>
      {children}
    </PopupWrapper>    
  );
};

export default Popup;
