import React from "react";
import Navbar from '../Components/Navigation'

export default function Servers() {
    return (
        <div classNameName="bg-background text-center h-screen w-screen font-[Montserrat]">
            <Navbar pageId={'createServer'} back={false}></Navbar>
            <div className="main-content grid place-items-center">
        <div className="grid place-items-center">
            <h1 className="text-xlg text-textPrimary p-2 pt-6 text-2xl font-semibold">Add a Remote</h1>

            <p className="text-textSecondary p-2">Add, remove, configure and edit remotes!</p>
        </div>

        <div className="bg-panel max-w-2xl rounded-lg text-middle m-4 mt-0 mb-0 px-5 pb-3 pt-0">
            <form>
                <h1 className="text-textPrimary m-3 mt-5 text-lg">Add remote</h1>
                <div className="grid grid-cols-3 gap-4 m-5 mb-0">

                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium  text-textSecondary">Remote name</label>
                        <input id="name" className="transition-all drop-shadow-xl text-center border text-sm rounded-lg block w-full p-2.5  bg-background  text-textPrimary border-borderGray
                        focus:ring-borderPrimary  focus:border-borderPrimary " placeholder="Server Name" required></input>
                    </div>

                    <div className="mb-3">
                        <label className=" block mb-2 text-sm font-medium  text-textSecondary ">Remote IP address</label>
                        <input id="ip" className="transition-all drop-shadow-xl text-center border text-sm rounded-lg block w-full p-2.5  bg-background text-textPrimary border-borderGray
                        focus:ring-borderPrimary  focus:border-borderPrimary " placeholder="192.168.0.1" required></input>
                    </div>

                    <div className="mb-3 ">
                        <label className="block mb-2 text-sm font-medium  text-textSecondary ">Remote port</label>
                        <input id="port" className="transition-all drop-shadow-xl text-center border text-sm rounded-lg block w-full p-2.5  bg-background  text-textPrimary border-borderGray
                         focus:ring-borderPrimary  focus:border-borderPrimary " placeholder="8080" required></input>
                    </div>
                </div>
            </form>
            <button id="add-remote" className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-4 m-3 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50 ">Add remote</button>
        </div>

        <div className="bg-panel rounded-lg text-middle m-4 px-5 pb-3 pt-0 w-[672px]">
            <form>
                <h1 className="text-textPrimary m-3 mt-5 text-lg">Install the Omnipetal Daemon to this Device</h1>
                <button id="install-daemon" className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-4 m-3 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50 ">Install Daemon</button>
            </form>
        </div>

        <button onclick="location.href='./remote-list.html';" className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-4 mt-7 mb-5 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50 ">See all remotes</button>
    </div>
        </div>
    );
}