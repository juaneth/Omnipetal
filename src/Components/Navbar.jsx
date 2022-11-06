import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../Resources/icon-noBg-zoom.png";
import "../index.css";
import isElectron from "is-electron";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  if (isElectron() == true) {
    return (
      <div className="navbar sticky top-0 p-0 bg-primary shadow-xl z-50">
        <div className="pr-5 h-3 text-center align-middle draggable">
          <img src={Icon} alt="icon" className="max-w-6 max-h-6 ml-4 mr-2" />
          <h1 className="font-bold text-[12pt]">Omnipetal</h1>
        </div>
        <div className="tabs space-x-2 items-center">
          <Link
            className={
              activeTab == "home"
                ? "tab tab-active text-[11pt] hover:bg-neutral/50 rounded-lg transition-all"
                : "tab text-[11pt] hover:bg-neutral/50 rounded-lg transition-all"
            }
            onClick={() => setActiveTab("home")}
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              activeTab == "servers"
                ? "tab tab-active text-[11pt] hover:bg-neutral/50 rounded-lg transition-all"
                : "tab text-[11pt] hover:bg-neutral/50 rounded-lg transition-all "
            }
            onClick={() => setActiveTab("servers")}
            to="/servers"
          >
            Servers
          </Link>
          <Link
            className={
              activeTab == "remotes"
                ? "tab tab-active text-[11pt] hover:bg-neutral/50 rounded-lg transition-all"
                : "tab text-[11pt] hover:bg-neutral/50 rounded-lg transition-all "
            }
            onClick={() => setActiveTab("remotes")}
            to="/remotes"
          >
            Remotes
          </Link>
        </div>

        <div className="draggable min-h-12 flex-grow"></div>
        <div className="bg-secondary non-draggable p-2.5 rounded-bl-lg shadow-xl flex fixed right-0 top-0">
          <div
            onClick={() => window.electronAPI.windowControls("min")}
            className="transition-all duration-100 rounded-full inline-block mx-0.5 bg-yellow-500 hover:bg-opacity-70 w-[14px] h-[14px]"
          ></div>
          <div
            onClick={() => window.electronAPI.windowControls("max")}
            className="transition-all duration-100 rounded-full inline-block mx-0.5 bg-green-500 hover:bg-opacity-70 w-[14px] h-[14px]"
          ></div>
          <div
            onClick={() => window.electronAPI.windowControls("close")}
            className="transition-all duration-100 rounded-full inline-block mx-0.5 bg-red-500 hover:bg-opacity-70 w-[14px] h-[14px]"
          ></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar sticky top-0 p-0 bg-primary shadow-xl">
        <div className="pr-5 h-3 text-center align-middle draggable">
          <img src={Icon} alt="icon" className="max-w-6 max-h-6 ml-4 mr-2" />
          <h1 className="font-bold text-[12pt]">Omnipetal</h1>
        </div>
        <div className="tabs space-x-2 items-center">
          <Link
            className={
              activeTab == "home"
                ? "tab tab-active text-[11pt] hover:bg-neutral/50 rounded-lg transition-all"
                : "tab text-[11pt] hover:bg-neutral/50 rounded-lg transition-all"
            }
            onClick={() => setActiveTab("home")}
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              activeTab == "servers"
                ? "tab tab-active text-[11pt] hover:bg-neutral/50 rounded-lg transition-all"
                : "tab text-[11pt] hover:bg-neutral/50 rounded-lg transition-all "
            }
            onClick={() => setActiveTab("servers")}
            to="/servers"
          >
            Servers
          </Link>
          <Link
            className={
              activeTab == "remotes"
                ? "tab tab-active text-[11pt] hover:bg-neutral/50 rounded-lg transition-all"
                : "tab text-[11pt] hover:bg-neutral/50 rounded-lg transition-all "
            }
            onClick={() => setActiveTab("remotes")}
            to="/remotes"
          >
            Remotes
          </Link>
        </div>

        <div className="draggable min-h-12 flex-grow"></div>
      </div>
    );
  }
}

export default Navbar;
