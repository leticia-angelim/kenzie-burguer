import InputSearch from "../InputSearch";
import Logo from "../Logo";

import { HeaderMain } from "./styles";

const Header = ({ showProducts }) => {
  return (
    <HeaderMain>
      <Logo />
      <InputSearch showProducts={showProducts} />
    </HeaderMain>
  );
};

export default Header;
