import React from "react";
import Logo from '../Resources/icon.png';
import windowControls from '../windowControls.js'
import { Link } from "react-router-dom";

const Navbar = ({ pageId, back }) => {
    return (
        <div className="bg-panel h-16 content-center flex items-center shadow-lg px-3 text-center sticky top-0 z-50">
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
                    <img src={Logo} alt="Icon" className="mx-2 draggable w-[32px] h-[30px]"></img>
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
            </div>

            <div className="flex space-x-2 mr-3 h-[32px]">
                <a onClick={() => windowControls("min")} className="bg-darker shadow-xl text-textSecondary hover:bg-background hover:text-textPrimary p-1 rounded-md text-sm font-medium transition-all">
                    <span className="material-icons">
                        remove
                    </span>
                </a>
                <a onClick={() => windowControls("max")} className="bg-darker shadow-xl text-textSecondary hover:bg-background hover:text-textPrimary p-1 rounded-md text-sm font-medium transition-all">
                    <span className="material-icons">
                        check_box_outline_blank
                    </span>
                </a>

                <a onClick={() => windowControls("close")} className="bg-darker shadow-xl text-textSecondary hover:bg-background hover:text-textPrimary p-1 rounded-md text-sm font-medium transition-all">
                    <span className="material-icons">close</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;