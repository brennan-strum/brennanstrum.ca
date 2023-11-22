import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export const NavMenuItem = ({ text, to }) => {
  const [top, setTop] = useState("10px");
  const [left, setLeft] = useState("10px");
  const [rippleShow, setRippleShow] = useState(false);

  let rippleTimer;
  const rippleDelay = 1000;

  const ripple = (e) => {
    setLeft(e.clientX - e.target.offsetLeft);
    setTop(e.clientY - e.target.offsetTop);
    setRippleShow(true);

    rippleTimer = setTimeout(() => {
      setRippleShow(false);
      clearTimeout(rippleTimer);
    }, rippleDelay);
  };

  return (
    <Link onClick={ripple} className="navMenuItem" to={to}>
      {rippleShow && (
        <span className="ripple" style={{ top: top, left: left }}></span>
      )}
      {text}
    </Link>
  );
};
