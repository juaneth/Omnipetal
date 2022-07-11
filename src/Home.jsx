import { useEffect, useState } from 'react'
import Navbar from './Components/Navigation'
import { Link } from "react-router-dom";

function Server({ name, ip }) {
  return (
      <div className='bg-background rounded-md p-2'>
        <h1>{ name }</h1>
      </div>
  )
}

function Remote({ name, ip }) {
  return (
      <div className='bg-background rounded-md p-2'>
        <h1>{ name }</h1>
      </div>
  )
}

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
              {/* <div className='flex space-x-4 rounded-xl'>
                <div className='bg-panel p-3 rounded-lg text-white'>
                  <h1 className='mx-3 mb-2'>Servers</h1>
                  <Server name={"asdasd"} ></Server>
                </div>

                <div className='bg-panel p-3 rounded-lg text-white'>
                  <h1 className='mx-3 mb-2'>Remotes</h1>

                  <Remote name={"asdasd"} ></Remote>
                </div>
              </div> */}

              <div className='bg-panel p-5 m-3 rounded-lg text-white bottom-8'>
                <h1 className='text-lg text-textSecondary mb-2'>Want help?</h1> 
                <p className='text-md text-textTertiary'>Either ask in our Discord Server or follow our documentation</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default App