import React from "react";
import Navbar from '../Components/Navigation'

export default function CreateServer() {
    return (
        <div className="bg-background text-center h-screen w-screen font-[Montserrat]">
            <Navbar pageId={'createServer'} back={false}></Navbar>
            <div className="main-content grid place-items-center text-textPrimary">
                <div className="grid place-items-center">
                    <h1 className="text-xlg text-textPrimary p-2 pt-6 text-2xl font-semibold">Create Server</h1>

                    <p className="text-textSecondary p-2">Create a server with Vanilla, Paper, Purpur and more</p>
                </div>

                <div className="bg-panel max-w-xl rounded-lg text-middle p-5">
                    <h1 className="text-textPrimary">Remote</h1>
                    <form className="text-center">
                        <select className="text-center p-2 w-72 m-2 bg-background text-textPrimary rounded-lg transition-all drop-shadow-xl border-borderGray" id="remotes">
                            <option selected disabled hidden className="text-gray-400" id="whatweneedtoupdate">Select Remote</option>
                        </select>
                    </form>

                    <div className="bg-backgroundSuccess border-2 border-borderSuccess rounded-lg text-center shadow-lg shadow-green-500/50 m-3 hidden" id="status-online">
                        <h1 className="m-4">API Alive</h1>
                    </div>

                    <div className="bg-backgroundError border-2 border-borderError rounded-lg text-center shadow-lg shadow-red-500/50 m-3 hidden" id="status-offline">
                        <h1 className="m-4">API Offline</h1>
                    </div>
                    <p className="text-textHint p-2">Make sure to add a remote before trying to create a server!</p>
                </div>

                <div className="bg-panel max-w-xl rounded-lg text-middle m-6 p-5 hidden" id="settings">
                    <h1 className="text-textPrimary">Name</h1>
                    <form className="text-center mb-5">
                        <input type="text" className="text-center p-2 w-72 m-2 bg-background text-textPrimary rounded-lg transition-all drop-shadow-xl" id="name" placeholder="My Minecraft Sever"></input>
                    </form>

                    <h1 className="text-textPrimary">Software</h1>
                    <form className="text-center mb-5">
                        <select className="text-center p-2 w-72 m-2 bg-background text-textPrimary rounded-lg transition-all drop-shadow-xl border-borderGray" id="software">
                                    <option value="vanilla">Vanilla</option>
                                    <option value="paper">Paper</option>
                                    <option value="purpur">Purpur</option>
                                    <option value="other">Other (upload server.jar)</option>
                        </select>
                    </form>

                    <h1 className="text-textPrimary">Versions</h1>
                    <form className="text-center">
                        <select className="text-center p-2 w-72 m-2 bg-background text-textPrimary rounded-lg transition-all drop-shadow-xl border-borderGray" id="versions">

                        </select>
                    </form>

                    <button className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-4 mt-7 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50" id="create">Create Server</button>
                    <p className="text-textHint p-2 mt-4">Ensure both this device and Remote are on stable internet connections and power sources before starting as any interuption will cancel the download and possibly corrupt the installation</p>
                </div>
            </div>
        </div>
    );
}