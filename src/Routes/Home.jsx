import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

import { getSettings, editSettings, resetSettings } from "../Config/Settings";
import { getServers, createServer, editServer } from "../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../Config/Remotes";

console.log("DEV", getServers());

function ServerElement() {
  const servers = getServers().map((server) => (
    <div
      key={server.name}
      className="p-3 rounded-lg bg-secondary shadow-lg flex flex-col space-y-2 text-center"
    >
      <b>{server.name}</b>

      <p>{server.software + ", " + server.version}</p>

      <Link
        to={`/servers/${server.name}/`}
        className="btn bg-info/80 hover:bg-info/50"
      >
        Manage
      </Link>
    </div>
  ));
  return <div className="flex flex-col space-y-2 mt-3">{servers}</div>;
}

function Home() {
  return (
    <div className="main-content">
      <p className="text-white/50 font-semibold text-left mt-4 ml-6 text-[11pt]">
        Welcome to Omnipetal, A functional, beautiful and specialised Minecraft
        Server Manager
      </p>

      <div className="flex flex-row space-x-3 h-full mx-6 my-2">
        <div className="basis-1/4 bg-primary p-4 rounded-lg shadow-lg">
          <h1 className="text-white/80 font-semibold text-left">
            Your Servers
          </h1>

          <ServerElement></ServerElement>
        </div>
        <div className="basis-2/4 bg-primary p-4 rounded-lg shadow-lg">
          <h1 className="text-white/80 font-semibold text-left">
            Create a new server
          </h1>
        </div>
        <div className="basis-1/4 bg-primary p-4 rounded-lg shadow-lg">
          <h1 className="text-white/80 font-semibold text-left">
            Your Remotes
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
