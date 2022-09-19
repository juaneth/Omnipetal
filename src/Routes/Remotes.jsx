import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams, Link } from "react-router-dom";

import { getSettings, editSettings, resetSettings } from "../Config/Settings";
import { getServers, createServer, editServer } from "../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../Config/Remotes";
function Remotes() {
  const { id } = useParams();

  console.log(id)

  function RemotesElement() {
    try {
      const remotes = getRemotes().map((remote) => (
        <div
          key={remote.name}
          className="p-3 rounded-lg bg-primary shadow-lg flex flex-col justify-center items-center space-y-3 text-center w-fit"
        >
          <b>{remote.name}</b>

          <div className="flex flex-row justify-center items-center space-x-2">
            <p>{`IP: ${remote.ip} Port: ${remote.port}`}</p>

            <div className="bg-success h-3 w-3 rounded-full drop-shadow-xl"></div>
          </div>

          <Link
            to={`/remotes/${remote.name}/`}
            className="btn bg-info/80 hover:bg-info/50 w-48"
          >
            Manage
          </Link>
        </div>
      ));

      return <div className="flex flex-col space-y-2">{remotes}</div>;
    } catch {
      return <div className="text-sm opacity-50">No remotes Found</div>;
    }
  }

  return (
    <div className='main-content'>
      <RemotesElement></RemotesElement>
    </div>
  );
}

export default Remotes;
