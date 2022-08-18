import { useState } from 'react'
import Navbar from './Components/Navbar'

import * as Remotes from './Config/Remotes'
import * as Servers from './Config/Servers'
import * as Settings from './Config/Settings'

function App() {
  if (Remotes.createRemote('JUANETH', '1.1.1.1', '8080', 'MYPASSKEY') == "IPINVALID") {
    console.log("IPINVALID")
  }

  return (
    <div className="w-full min-h-screen max-w-screen font-montserrat">
      <Navbar pageID={"home"}></Navbar>

      <div className='main-content text-center w-screen'>
        <p className='text-white/50 font-semibold text-left mt-4 ml-6 text-[11pt]'>Welcome to Omnipetal, A functional, beautiful and specialised Minecraft Server Manager</p>

        <div className="flex flex-row space-x-3 h-96 mx-6 my-2">
          <div className="basis-1/4 bg-primary p-4 rounded-lg shadow-lg">
            <h1 className='text-white/80 font-semibold text-left'>Your Servers</h1>
          </div>
          <div className="basis-2/4 bg-primary p-4 rounded-lg shadow-lg">
            <h1 className='text-white/80 font-semibold text-left'>Create a new server</h1>
          </div>
          <div className="basis-1/4 bg-primary p-4 rounded-lg shadow-lg">
            <h1 className='text-white/80 font-semibold text-left'>Your Remotes</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
