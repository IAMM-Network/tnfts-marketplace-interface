import { createContext, useState } from "react";
import { PopupContextProps } from "./types";

export const Context = createContext<PopupContextProps>({
  isActive: undefined,
  active: () => undefined,
  hidden: () => undefined,
});

const PopupContext: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const initalValue = {
    isActive,
    active: () => setIsActive(true),
    hidden: () => setIsActive(false),
  };

  return <Context.Provider value={initalValue}>{children}</Context.Provider>;
};

export default PopupContext;
