import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../Resources/icon-noBg-zoom.png";
import "../index.css";
import isElectron from "is-electron";

function Navbar() {
  const [activeTab, setActiveTab] = useState(
    useLocation().pathname.split("/")[1]
  );
  return (
    <div className="navbar sticky top-0 p-0 z-50 bg-base-100">
      <div className="sm:pr-5 pr-3 h-3 text-center align-middle draggable">
        <img src={Icon} alt="icon" className="max-w-6 max-h-6 ml-5 sm:mr-2" />
        <h1 className="font-bold text-[12pt] sm:block hidden">Omnipetal</h1>
      </div>
      <div className="tabs sm:space-x-2 space-x-1 items-center">
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

      {isElectron() && (
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
      )}
    </div>
  );
}

export default Navbar;
