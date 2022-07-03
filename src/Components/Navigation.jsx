import React from "react";
import Logo from '../Resources/icon.png';
import { Link } from "react-router-dom";

const Navbar = ({ pageId, back }) => {
    return (
        <div className="bg-panel h-16 shadow-lg text-center sticky top-0 z-50">
            <div className="flex space-x-4 w-screen items-center">
                {back == true 
                ? (<div className="flex space-x-2 mr-3 justify-center items-center">
                    <a id="min" className="bg-background h-[32px] w-[32px] flex justify-center items-center shadow-xl text-textSecondary hover:shadow hover:bg-panel hover:text-textPrimary p-1 rounded-md text-sm font-medium transition-all">
                        <span className="material-icons">
                            arrow_back
                        </span>
                    </a>
                </div>)

                : (
                    <img src={Logo} alt="Icon" className="ml-6 mr-2 draggable w-[32px] h-[30px]"></img>
                )
                }

                {pageId == "home" 
                    ?   <Link className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" to="/">Home</Link>
                    :   <Link className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" to="/">Home</Link>
                }

                {pageId == "servers" 
                    ?   <Link className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" to="/servers">Servers</Link>
                    :   <Link className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" to="/servers">Servers</Link>
                }

                {pageId == "remotes" 
                    ?   <Link className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" to="/remotes">Remotes</Link>
                    :   <Link className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" to="/remotes">Remotes</Link>
                }

                {pageId == "settings" 
                    ?   <Link className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" to="/settings">Settings</Link>
                    :   <Link className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" to="/settings">Settings</Link>
                }

                <div className="draggable flex-grow h-16"></div>

                <div className="w-[80px]"></div>
            </div>
            <div className="bg-darker p-3 rounded-bl-lg shadow-xl flex fixed right-0 top-0">
                    <div onClick={() => window.electronAPI.windowControls("min")} className="transition-all rounded-full inline-block mx-0.5 bg-min hover:bg-opacity-50 w-[16px] h-[16px]"></div>
                    <div onClick={() => window.electronAPI.windowControls("max")} className="transition-all rounded-full inline-block mx-0.5 bg-max hover:bg-opacity-50 w-[16px] h-[16px]"></div>
                    <div onClick={() => window.electronAPI.windowControls("close")} className="transition-all rounded-full inline-block mx-0.5 bg-close hover:bg-opacity-50 w-[16px] h-[16px]"></div>
            </div>
        </div>
    );
};

export default Navbar;