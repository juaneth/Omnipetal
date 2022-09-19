import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

import { getSettings, editSettings, resetSettings } from "../Config/Settings";
import { getServers, createServer, editServer } from "../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../Config/Remotes";

createServer('TEST1', "REMOTE2", "VANILLA", "1.8.9")
createServer('TEST2', "REMOTE2", "VANILLA", "1.8.9")
createServer('TEST3', "REMOTE2", "VANILLA", "1.8.9")
createServer('TEST4', "REMOTE2", "VANILLA", "1.8.9")

console.log("DEV", getServers());

function ServerElement() {
  try {
    const servers = getServers().map((server) => (
      <div
        key={server.name}
        className="p-3 rounded-lg bg-secondary shadow-lg flex flex-col justify-center items-center space-y-3 text-center w-full overflow-auto"
      >
        <b>{server.name}</b>

        <p>{server.software + ", " + server.version}</p>

        <Link
          to={`/servers/${server.name}/`}
          className="btn bg-info/80 hover:bg-info/50 w-full"
        >
          Manage
        </Link>
      </div>
    ));

    return <div className="flex flex-col space-y-2 mt-3">{servers}</div>;
  } catch {
    return <p className="text-sm opacity-50 mt-3 ml-0.5">No servers found</p>
  }
}

function RemotesElement() {
  try {
    const remotes = getRemotes().map((remote) => (
      <div
        key={remote.name}
        className="p-3 rounded-lg bg-secondary shadow-lg flex flex-col justify-center items-center space-y-3 text-center w-full"
      >
        <b>{remote.name}</b>

        <div className="flex flex-row justify-center items-center space-x-2">
          <p>{`IP: ${remote.ip} Port: ${remote.port}`}</p>

          <div className="bg-success h-3 w-3 rounded-full shadow-xl"></div>
        </div>

        <Link
          to={`/remotes/${remote.name}/`}
          className="btn bg-info/80 hover:bg-info/50 w-full"
        >
          Manage
        </Link>
      </div>
    ));

    return <div className="flex flex-col space-y-2 mt-3">{remotes}</div>;
  } catch {
    return <p className="text-sm opacity-50 mt-3 ml-0.5">No remotes found</p>
  }
}

function Home() {
  return (
    <div className="main-content">
      <p className="text-white/50 font-semibold text-left mt-4 ml-6 text-[11pt]">
        Welcome to Omnipetal, A functional, beautiful and specialised Minecraft
        Server Manager
      </p>

      <div className="flex flex-row space-x-3 h-full mx-6 my-2 max-h-[calc(100vh_-_8rem)]">
        <div className="basis-1/4 bg-primary p-3 rounded-lg shadow-lg overflow-auto">
          <h1 className="text-white/80 font-semibold text-left sticky top-0 bg-base-100 w-fit p-2 px-3 rounded-lg shadow-lg z-10">
            Your Servers
          </h1>

          <ServerElement></ServerElement>
        </div>
        <div className="basis-2/4 bg-primary p-4 rounded-lg shadow-lg overflow-auto">
          <h1 className="text-white/80 font-semibold text-left sticky top-0 bg-base-100 w-fit p-2 px-3 rounded-lg shadow-lg z-10">
            Create a new server
          </h1>
        </div>
        <div className="basis-1/4 bg-primary p-4 rounded-lg shadow-lg overflow-auto">
          <h1 className="text-white/80 font-semibold text-left sticky top-0 bg-base-100 w-fit p-2 px-3 rounded-lg shadow-lg z-10">
            Your Remotes
          </h1>

          <RemotesElement></RemotesElement>
        </div>
      </div>
    </div>
  );
}

export default Home;