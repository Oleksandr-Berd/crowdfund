
import { useState } from "react";
import About from "../../components/About/About";
import Discover from "../../components/Discover/Discover";
import GetStarted from "../../components/GetStarted/GetStarted";
import * as SC from "./SharedLayoutStyled"
import Portal from "../../utils/portal";
import Project from "../../components/Project/Project";
import NavMenu from "../../components/NavMenu/NavMenu";
const SharedLayout = ({toggleNavMenu, isNavMenu,closeNavMenu }) => {

const [isProject, setIsProject] = useState(false)

const toggleProject = () => {
    setIsProject(!isProject)
}



    return ( 
        <SC.SharedLayoutStyled>
            <GetStarted toggleProject={toggleProject}/>
            <Discover/>
            <About/>
            {isProject ? <Portal><Project toggleProject={toggleProject} isProject={isProject}/></Portal> 
            : isNavMenu ? <Portal><NavMenu toggleProject={toggleNavMenu} closeNavMenu={closeNavMenu}/></Portal>
            :null}
        </SC.SharedLayoutStyled>
     );
}
 
export default SharedLayout;