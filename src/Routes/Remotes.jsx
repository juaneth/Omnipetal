import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams, Link } from "react-router-dom";

import { getSettings, editSettings, resetSettings } from "../Config/Settings";
import { getServers, createServer, editServer } from "../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../Config/Remotes";
function Remotes() {
  const { remote } = useParams();

  console.log(remote);

  function RemotesElement() {
    try {
      const remotes = getRemotes().map((server) => (
        <div
          key={server.name}
          className="p-3 rounded-lg bg-secondary shadow-lg flex flex-col space-y-2 text-center"
        >
          <b>{server.name}</b>

          <p>{server.ip + ":" + server.port}</p>

          <Link
            to={`/remotes/${server.name}`}
            className="btn bg-info/80 hover:bg-info/50"
          >
            Select
          </Link>
        </div>
      ));
    } catch {
      return <b className="text-bold">No Remotes Found</b>;
    }
    return <div className="flex flex-col space-y-2 mt-3">{remotes}</div>;
  }
  return (
    <div>
      <RemotesElement></RemotesElement>
    </div>
  );
}

export default Remotes;
