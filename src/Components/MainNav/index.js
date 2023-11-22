import { NavMenuItem } from "../NavMenuItem";
import { Logo } from "../Logo";

import "./styles.scss";

export const MainNav = () => {
  return (
    <div>
      <Logo />
      <NavMenuItem text="Home" to="/" />
      <NavMenuItem text="About" to="/about" />
    </div>
  );
};
