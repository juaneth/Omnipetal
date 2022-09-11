import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <div className="w-full min-h-screen max-w-screen">
      <Navbar></Navbar>

      <div className='main-content text-center w-screen'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
