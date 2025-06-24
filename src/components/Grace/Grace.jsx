import * as SC from "./GraceStyled";

import checkIcon from "../../assets/images/icon-check.svg";
import { useEffect } from "react";
const Grace = ({toggleGrace, isGrace}) => {

useEffect(() => {
  if (isGrace) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isGrace]);
  return (
    <SC.GraceOverlay>
      <SC.GraceCon>
        <SC.GraceThumb>
          <img src={checkIcon} alt="check" />
        </SC.GraceThumb>
        <h3>Thanks for your support!</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button type="button" onClick={toggleGrace}>Got it!</button>
      </SC.GraceCon>
    </SC.GraceOverlay>
  );
};

export default Grace;
