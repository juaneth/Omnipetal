import React from "react";
import Logo from '../Resources/icon.png';
import windowControls from '../windowControls.js'

const Navbar = ({ pageId, back }) => {
    return (
        <div className="bg-panel h-16 content-center flex items-center shadow-lg px-3 text-center">
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
                    ?   <a href="#" className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" aria-current="page">Home</a>
                    :   <a href="#" className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" aria-current="page">Home</a>
                }

                {pageId == "createServer" 
                    ?   <a href="#" className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" aria-current="page">Create Server</a>
                    :   <a href="../src/create-server/index.html" className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all">Create Server</a>
                }

                {pageId == "servers" 
                    ?   <a href="#" className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" aria-current="page">Servers</a>
                    :   <a href="../src/server-manager/index.html" className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all">Servers</a>
                }

                {pageId == "remotes" 
                    ?   <a href="#" className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" aria-current="page">Remotes</a>
                    :   <a href="../src/manage-remotes/index.html" className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all">Remotes</a>
                }

                {pageId == "settings" 
                    ?   <a href="#" className="bg-darker text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all" aria-current="page">Settings</a>
                    :   <a href="../src/settings/index.html" className="text-textSecondary hover:bg-background hover:text-textPrimary px-3 py-2 rounded-md text-sm font-medium transition-all">Settings</a>
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