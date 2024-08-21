import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function Root() {
  return (
    <>
       <header>
          <Navbar/>
       </header>
       <Outlet/>
       <footer></footer>
    </>
  )
}

export default Root