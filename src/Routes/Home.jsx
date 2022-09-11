import { useState } from 'react'
import Navbar from '../Components/Navbar'

function App() {

    return (
        <div>
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
    )
}

export default App
