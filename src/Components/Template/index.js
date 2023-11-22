import { SwitchTransition, CSSTransition } from "react-transition-group";
import { MainNav } from "../MainNav";
import { TRANSITION_TIME } from "Constants/Template";

import "./styles.scss";

export const Template = ({ children, location }) => {
  return (
    <div className="site">
      <div className="site-left">
        <MainNav />
      </div>
      <div className="site-right">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            timeout={TRANSITION_TIME}
            classNames="page"
            unmountOnExit
          >
            {children}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};
