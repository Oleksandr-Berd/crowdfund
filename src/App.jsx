
import { useState } from 'react'
import './App.css'
import Header from './layouts/Header/Header'
import SharedLayout from './layouts/SharedLayout/SharedLayout'

function App() {

const [isNavMenu, setIsNavMenu] = useState(false)

const toggleNavMenu = () => {
    setIsNavMenu(!isNavMenu)
}

  const closeNavMenu = () => {
    setIsNavMenu(false)
  }

  return (
    <>
     <Header toggleNavMenu={toggleNavMenu} isNavMenu={isNavMenu}/>
     <SharedLayout toggleNavMenu={toggleNavMenu} isNavMenu={isNavMenu} closeNavMenu={closeNavMenu}/>
    </>
  )
}

export default App
