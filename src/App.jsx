import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="w-full min-h-screen max-w-screen">
      <Navbar pageID={"home"}></Navbar>

      <div className='main-content text-center w-screen'>

      </div>
    </div>
  )
}

export default App
