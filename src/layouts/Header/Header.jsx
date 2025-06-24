import * as SC from "./HeaderStyled"

import burgerIcon from "../../assets/images/icon-hamburger.svg"
import closeIcon from "../../assets/images/icon-close-menu.svg"
import Logo from "../../components/Logo/Logo";
import { useScreenSize } from "../../hooks/useScreenSize";
import NavMenu from "../../components/NavMenu/NavMenu";
const Header = ({toggleNavMenu, isNavMenu}) => {

    const {isDesktop} = useScreenSize()

    return ( 
        <SC.HeaderStyled>
            <Logo/>
            {isDesktop ? 
            <NavMenu/>
            : <SC.BurgerButton type="button" onClick={toggleNavMenu}>
                {isNavMenu ? <img src={closeIcon} alt="close" /> : <img src={burgerIcon} alt="burger" />}
            </SC.BurgerButton>}
           
        </SC.HeaderStyled>
     );
}
 
export default Header;