
import { useEffect } from "react";
import * as SC from "./NavMenuStyled"

const NavMenu = ({closeNavMenu, isNavMenu}) => {

   const handleScroll = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeNavMenu();
  };

  useEffect(() => {
  if (isNavMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isNavMenu]);

    return ( 
        <SC.NavMenuOverlay onClick={closeNavMenu}>
        <nav>
            <SC.NavList>
                <li>
                   <button onClick={() => handleScroll("about")}>About</button>
                </li>
                <li>
                   <button onClick={() => handleScroll("discover")}>Discover</button>
                </li>
                <li>
                   <button onClick={() => handleScroll("getStarted")}>Get Started</button>
                </li>
            </SC.NavList>
        </nav>
        </SC.NavMenuOverlay>
    );
}
 
export default NavMenu;
