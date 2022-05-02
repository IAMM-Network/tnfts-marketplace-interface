import { PopupContext } from "./contexts";

const Providers: React.FC = ({ children }) => {
  return <PopupContext>{children}</PopupContext>;
};

export default Providers;
