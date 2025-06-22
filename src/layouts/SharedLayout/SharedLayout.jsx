
import { useState } from "react";
import About from "../../components/About/About";
import Discover from "../../components/Discover/Discover";
import GetStarted from "../../components/GetStarted/GetStarted";
import * as SC from "./SharedLayoutStyled"
const SharedLayout = () => {

const [isProject, setIsProject] = useState(false)

const toggleProject = () => {
    setIsProject(!isProject)
}

    return ( 
        <SC.SharedLayoutStyled>
            <GetStarted toggleProject={toggleProject}/>
            <Discover/>
            <About/>
        </SC.SharedLayoutStyled>
     );
}
 
export default SharedLayout;