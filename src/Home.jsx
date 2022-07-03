import { useEffect, useState } from 'react'
import logo from './logo.svg'
import Navbar from './Components/Navigation'
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    // Change theme on start
    window.electronAPI.config("getConfig").then((config) => { document.documentElement.dataset.theme = config.theme; });
  }, [])

  return (
    <div className="bg-background text-center h-screen w-screen font-[Montserrat]">
      <Navbar pageId={'home'} back={false}></Navbar>
      <div className='main-content'>
        <div className="grid place-items-center">
              <h1 className="text-textPrimary p-3 pt-6 text-2xl font-semibold">Omnipetal</h1>

              <p className="text-textHint p-5">Minecraft Server Manager made with scale, simplicity, beauty and depth in mind</p>
          </div>

          <div className="bg-panel max-w-lg inline-flex p-6 rounded-lg text-middle">
              <button  className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-3 m-3 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50">Create Server</button>
              <button  className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-3 m-3 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50">Manage Servers</button>
              <button  className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-3 m-3 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50">Manage Remotes</button>
          </div>

          <p className="text-textHint p-5">Make sure to add a remote before trying to create a server!</p>
        </div>
    </div>
  )
}

export default App