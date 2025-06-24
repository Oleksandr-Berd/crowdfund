
import * as SC from "./NavMenuStyled"

const NavMenu = ({closeNavMenu}) => {

   const handleScroll = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeNavMenu();
  };

    return ( 
        <SC.NavMenuOverlay>
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
