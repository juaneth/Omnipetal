import React from "react";
import Navbar from '../Components/Navigation'
import CustomScroll from 'react-custom-scroll';

const version = await window.electronAPI.config('getVersion')

export default function Settings() {
    return (
    <div className="bg-background text-center min-h-screen w-screen font-[Montserrat]">
        <Navbar pageId={'settings'} back={false}></Navbar>
        <CustomScroll>
            <div className="main-content grid place-items-center">
                <div className="grid place-items-center">
                    <h1 className="text-textPrimary p-2 pt-6 text-2xl font-semibold">Settings</h1>

                    <p className="text-textSecondary p-2">Change settings for Omnipetal Client!</p>
                </div>

                <div className="bg-panel w-96 rounded-lg text-middle m-4 mt-0 px-5 pb-3 pt-0">
                    <form>
                        <h1 className="text-textPrimary m-3 mt-5 text-lg">Default Port</h1>
                        <div className="grid grid-cols-1 gap-4 m-5 mb-0">
                            <div className="mb-3 ">
                                <label className="block mb-2 text-sm font-medium text-textSecondary ">Remote
                                    port</label>
                                <input id="port" className="transition-all drop-shadow-xl text-center bg-background border border-borderGray text-textPrimary text-sm rounded-lg block w-full p-2.5 focus:ring-borderPrimary focus:border-borderPrimary " placeholder="2065" required></input>
                            </div>
                        </div>
                    </form>
                    <button id="change-port" className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-4 m-4 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50 ">Change
                        Port</button>
                </div>

                <div className="bg-panel w-96 rounded-lg text-middle m-4 mt-0 px-5 pb-3 pt-0">
                    <form>
                        <h1 className="text-textPrimary m-3 mt-5 text-lg">SSH/SFTP Keys</h1>
                        <div className="grid grid-cols-1 gap-4 m-5 mb-0">
                            <button type="button" className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-4 m-4 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50 ">Open
                                Key Manager</button>
                        </div>
                    </form>
                </div>

                <div className="bg-panel w-96 rounded-lg text-middle m-4 mt-0 px-5 pb-3 pt-0">
                    <form>
                        <h1 className="text-textPrimary m-3 mt-5 text-lg">Theme</h1>
                        <div className="grid grid-cols-1 gap-4 m-5 mb-0">
                            <div className="mb-3 ">
                                <label className="block mb-2 text-sm font-medium text-textSecondary ">Theme</label>
                                <select id="theme" className="focus:outline-none transition-all drop-shadow-xl text-center bg-background border border-borderGray text-textPrimary text-sm rounded-lg block w-full p-2.5 focus:ring-borderPrimary focus:border-borderPrimary ">
                                    <option value="default">Default</option>
                                    <option value="light">Light</option>
                                    <option value="midnight">Midnight</option>
                                    <option value="extravagant_purple">Extravagant Purple</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="bg-panel w-96 rounded-lg text-middle m-4 mt-0 px-5 pb-3 pt-0">
                    <h1 className="text-textPrimary m-3 mt-5 text-lg">Info</h1>
                    <div className="grid grid-cols-1 gap-4 m-5 mb-0">
                        <div className="mb-3">
                            <h1 className="block text-sm font-medium text-textSecondary dark:text-gray-300 mb-0 pt-0">Version</h1>
                            <p id="version" className="block text-sm font-medium text-textTertiary mt-0 pt-0">{ version }</p>
                            <h1 className="block text-sm font-medium text-textSecondary dark:text-gray-300 mb-0 pt-0">Auto Update</h1>
                            <p id="auto-update" className="block text-sm font-medium text-textTertiary mt-0 pt-0">On</p>
                        </div>
                    </div>
                </div>

                <div className="bg-panel w-96 rounded-lg text-middle m-4 mt-0 px-5 pb-3 pt-0">
                    <form>
                        <h1 className="text-textPrimary m-3 mt-5 text-lg">Reset Config</h1>
                        <div className="grid grid-cols-1 gap-4 m-5 mb-0">
                            <button id="reset-button" type="button" className="bg-panel hover:bg-backgroundPrimary text-textSecondary font-semibold hover:text-textPrimary p-4 m-4 border border-borderPrimary hover:border-transparent transition-all rounded shadow-lg hover:shadow-shadowPrimary/50 ">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </CustomScroll>      
    </div>
    );
}