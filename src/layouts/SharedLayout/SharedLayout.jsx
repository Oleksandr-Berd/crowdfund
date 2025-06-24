
import { useState } from "react";
import About from "../../components/About/About";
import Discover from "../../components/Discover/Discover";
import GetStarted from "../../components/GetStarted/GetStarted";
import * as SC from "./SharedLayoutStyled"
import Portal from "../../utils/portal";
import Project from "../../components/Project/Project";
import NavMenu from "../../components/NavMenu/NavMenu";
import Grace from "../../components/Grace/Grace";
const SharedLayout = ({toggleNavMenu, isNavMenu,closeNavMenu }) => {

const [isProject, setIsProject] = useState(false)
const [isGrace, setIsGrace] = useState(false)

const toggleProject = () => {
    setIsProject(!isProject)
}

const toggleGrace = () => {
    setIsProject(false)
    setIsGrace(!isGrace)
}

    return ( 
        <SC.SharedLayoutStyled>
            <GetStarted toggleProject={toggleProject}/>
            <Discover/>
            <About/>
            {isProject ? <Portal><Project toggleProject={toggleProject} isProject={isProject} toggleGrace={toggleGrace}/></Portal> 
            : isNavMenu ? <Portal><NavMenu toggleProject={toggleNavMenu} closeNavMenu={closeNavMenu} isNavMenu={isNavMenu}/></Portal>
            :isGrace ? <Portal><Grace isGrace={isGrace} toggleGrace={toggleGrace}/></Portal>
            :null}
        </SC.SharedLayoutStyled>
     );
}
 
export default SharedLayout;