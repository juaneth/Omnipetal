import React from 'react'
import { Link } from "react-router-dom";
import Icon from '../Resources/icon-noBg-zoom.png'

function Navbar({ pageID }) {
    return (
        <div className="navbar p-0 min-h-12 bg-primary shadow-xl">
            <div className='pr-5 h-12 text-center align-middle draggable'>
                <img src={Icon} alt="icon" className='max-w-6 max-h-6 ml-4 mr-2'/>
                <h1 className='font-montserrat font-bold text-[11pt]'>Omnipetal</h1>
            </div>

            {pageID == "home" &&
                <div className="tabs self-end font-montserrat h-10 mr-2">
                    <Link className="tab tab-bordered tab-active h-full shadow-lg" to="/">Home</Link>
                    <Link className="tab tab-bordered h-full" to="/servers">Servers</Link>
                    <Link className="tab tab-bordered h-full" to="/remotes">Remotes</Link>
                    <Link className="tab tab-bordered h-full" to="/settings">Settings</Link>
                </div>
            }

            {pageID == "servers" &&
                <div className="tabs self-end font-montserrat h-10 mr-2">
                    <Link className="tab tab-bordered h-full" to="/">Home</Link>
                    <Link className="tab tab-bordered tab-active h-full shadow-lg" to="/servers">Servers</Link>
                    <Link className="tab tab-bordered h-full" to="/remotes">Remotes</Link>
                    <Link className="tab tab-bordered h-full" to="/settings">Settings</Link>
                </div>
            }

            {pageID == "remotes" &&
                <div className="tabs self-end font-montserrat h-10 mr-2">
                    <Link className="tab tab-bordered h-full" to="/">Home</Link>
                    <Link className="tab tab-bordered h-full" to="/servers">Servers</Link>
                    <Link className="tab tab-bordered tab-active h-full shadow-lg" to="/remotes">Remotes</Link>
                    <Link className="tab tab-bordered h-full" to="/settings">Settings</Link>
                </div>
            }

            {pageID == "settings" &&
                <div className="tabs self-end font-montserrat h-10 mr-2">
                    <Link className="tab tab-bordered h-full" to="/">Home</Link>
                    <Link className="tab tab-bordered h-full" to="/servers">Servers</Link>
                    <Link className="tab tab-bordered h-full" to="/remotes">Remotes</Link>
                    <Link className="tab tab-bordered tab-active h-full shadow-lg" to="/settings">Settings</Link>
                </div>
            }

            <div className='draggable h-10 flex-grow'></div>

            <div className="bg-secondary non-draggable p-2.5 rounded-bl-lg shadow-xl flex fixed right-0 top-0">
                <div onClick={() => window.electronAPI.windowControls("min")} className="transition-all duration-100 rounded-full inline-block mx-0.5 bg-yellow-500 hover:bg-opacity-70 w-[14px] h-[14px]"></div>
                <div onClick={() => window.electronAPI.windowControls("max")} className="transition-all duration-100 rounded-full inline-block mx-0.5 bg-green-500 hover:bg-opacity-70 w-[14px] h-[14px]"></div>
                <div onClick={() => window.electronAPI.windowControls("close")} className="transition-all duration-100 rounded-full inline-block mx-0.5 bg-red-500 hover:bg-opacity-70 w-[14px] h-[14px]"></div>
            </div>
        </div>
    )
}

export default Navbar