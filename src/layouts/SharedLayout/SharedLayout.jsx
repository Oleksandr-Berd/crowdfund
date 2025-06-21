
import About from "../../components/About/About";
import Discover from "../../components/Discover/Discover";
import GetStarted from "../../components/GetStarted/GetStarted";
import * as SC from "./SharedLayoutStyled"
const SharedLayout = () => {
    return ( 
        <SC.SharedLayoutStyled>
            <GetStarted/>
            <Discover/>
            <About/>
        </SC.SharedLayoutStyled>
     );
}
 
export default SharedLayout;