import * as SC from "./HeaderStyled"

import burgerIcon from "../../assets/images/icon-hamburger.svg"
import closeIcon from "../../assets/images/icon-close-menu.svg"
import Logo from "../../components/Logo/Logo";
const Header = ({toggleNavMenu, isNavMenu}) => {
    return ( 
        <SC.HeaderStyled>
            <Logo/>
            <SC.BurgerButton type="button" onClick={toggleNavMenu}>
                {isNavMenu ? <img src={closeIcon} alt="close" /> : <img src={burgerIcon} alt="burger" />}
            </SC.BurgerButton>
        </SC.HeaderStyled>
     );
}
 
export default Header;