import * as SC from "./NavMenuStyled"

const NavMenu = ({toggleNavMenu}) => {
    return ( 
        <SC.NavMenuOverlay>
        <nav>
            <ul>
                <li>
                    <a href="#about" onClick={toggleNavMenu}>About</a>
                </li>
                <li>
                    <a href="#discover" onClick={toggleNavMenu}>Discover</a>
                </li>
                <li>
                    <a href="#getStarted" onClick={toggleNavMenu}>Get Started</a>
                </li>
            </ul>
        </nav>
        </SC.NavMenuOverlay>
    );
}
 
export default NavMenu;
