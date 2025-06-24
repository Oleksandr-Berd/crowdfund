import * as SC from "./HeaderStyled"

import burgerIcon from "../../assets/images/icon-hamburger.svg"
import Logo from "../../components/Logo/Logo";
const Header = ({toggleNavMenu}) => {
    return ( 
        <SC.HeaderStyled>
            <Logo/>
            <SC.BurgerButton type="button" onClick={toggleNavMenu}>
                <img src={burgerIcon} alt="burger" />
            </SC.BurgerButton>
        </SC.HeaderStyled>
     );
}
 
export default Header;