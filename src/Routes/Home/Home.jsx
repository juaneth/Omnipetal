import { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

import {
  getSettings,
  editSettings,
  resetSettings,
} from "../../Config/Settings";
import { getServers, createServer, editServer } from "../../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../../Config/Remotes";

import ServerModal from "../Servers/AddServersModal";
import RemoteModal from "../Remotes/AddRemotesModal";

function ServerElement() {
  try {
    const servers = getServers().map((server) => (
      <div
        key={server.name}
        className="rounded-lg bg-secondary shadow-lg p-4 flex flex-col lg:flex-row justify-center items-center lg:space-x-3 sm:space-y-2 text-center w-full overflow-auto"
      >
        <div className="flex-1 sm:text-center lg:text-left">
          <b>{server.name}</b>

          <p>{server.software + ", " + server.version}</p>
        </div>

        <Link
          to={`/servers/${server.name}/`}
          className="btn bg-info/80 hover:bg-info/50 w-32"
        >
          Manage
        </Link>
      </div>
    ));

    return <div className="flex flex-col space-y-2 mt-3">{servers}</div>;
  } catch {
    return <p className="text-sm opacity-50 mt-3 ml-0.5">No servers found</p>;
  }
}

function RemotesElement() {
  try {
    const remotes = getRemotes().map((remote) => (
      <div
        key={remote.name}
        className="rounded-lg bg-secondary shadow-lg p-4 flex flex-col lg:flex-row justify-center items-center lg:space-x-3 sm:space-y-2 text-center w-full overflow-auto"
      >
        <div className="flex-1 sm:text-center lg:text-left">
          <b>{remote.name}</b>

          <p>{`IP: ${remote.ip}:${remote.port}`}</p>
        </div>

        <Link
          to={`/remotes/${remote.name}/`}
          className="btn bg-info/80 hover:bg-info/50 w-32"
        >
          Manage
        </Link>
      </div>
    ));

    return <div className="flex flex-col space-y-2 mt-3">{remotes}</div>;
  } catch {
    return <p className="text-sm opacity-50 mt-3 ml-0.5">No remotes found</p>;
  }
}

function Home() {
  return (
    <div className="main-content">
      <RemoteModal></RemoteModal>
      <ServerModal></ServerModal>
      <p className="text-white/50 font-semibold text-left ml-6 text-[11pt]">
        Welcome to Omnipetal, A functional, beautiful and specialised Minecraft
        Server Manager
      </p>

      <div className="flex flex-row space-x-3 h-[calc(100vh_-_8rem)] mx-6 my-2">
        <div className="basis-1/3 flex flex-col bg-primary rounded-lg shadow-lg overflow-auto">
          <h1 className="text-white/80 font-semibold text-left sticky top-0 w-full p-3 px-4 shadow-lg z-10 bg-secondary">
            Your Servers
          </h1>

          <div className="p-3 pt-0 grow">
            <ServerElement></ServerElement>
          </div>
          <div className="w-full flex flex-col p-3 bg-secondary shadow-t-xl sticky z-20 bottom-0">
            <label htmlFor="addServer" className="btn">
              Create a Server
            </label>
          </div>
        </div>
        <div className="basis-1/3 flex flex-col bg-primary rounded-lg shadow-lg overflow-auto">
          <h1 className="text-white/80 font-semibold text-left sticky top-0 w-full p-3 px-4 shadow-lg z-10 bg-secondary">
            Your Remotes
          </h1>

          <div className="p-3 pt-0 flex-grow">
            <RemotesElement></RemotesElement>
          </div>

          <div className="w-full flex flex-col p-3 bg-secondary shadow-t-xl sticky z-20 bottom-0">
            <label htmlFor="addRemote" className="btn">
              Add a new Remote
            </label>
          </div>
        </div>
        <div className="basis-1/3 bg-primary rounded-lg shadow-lg overflow-auto">
          <h1 className="text-white/80 font-semibold text-left sticky top-0 w-full p-3 px-4 shadow-lg z-10 bg-secondary">
            News/Updates
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
