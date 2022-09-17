import { useState } from "react";
import Navbar from "../Components/Navbar";

import { getSettings, editSettings, resetSettings } from "../Config/Settings";
import { getServers, createServer, editServer } from "../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../Config/Remotes";

function Remotes() {
  const [selectedRemote, setSelectedRemote] = useState("this-device");

  function RemotesElement() {
    const servers = getRemotes().map((server) => (
      <div
        key={server.name}
        className="p-3 rounded-lg bg-secondary shadow-lg flex flex-col space-y-2 text-center"
      >
        <b>{server.name}</b>

        <p>{server.software + ", " + server.version}</p>

        <button className="btn bg-info/80 hover:bg-info/50">Select</button>
      </div>
    ));
    return <div className="flex flex-col space-y-2 mt-3">{servers}</div>;
  }
  return (
    <div>
      <h1>Hi</h1>
      <RemotesElement></RemotesElement>
    </div>
  );
}

export default Remotes;
