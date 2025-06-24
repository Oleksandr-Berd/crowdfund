
import { useState } from 'react'
import './App.css'
import Header from './layouts/Header/Header'
import SharedLayout from './layouts/SharedLayout/SharedLayout'

function App() {

const [isNavMenu, setIsNavMenu] = useState(false)

const toggleNavMenu = () => {
    setIsNavMenu(!isNavMenu)
}

  return (
    <>
     <Header toggleNavMenu={toggleNavMenu}/>
     <SharedLayout toggleNavMenu={toggleNavMenu} isNavMenu={isNavMenu}/>
    </>
  )
}

export default App
