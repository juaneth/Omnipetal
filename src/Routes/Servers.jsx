import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams, Link } from "react-router-dom";

import { getSettings, editSettings, resetSettings } from "../Config/Settings";
import { getServers, createServer, editServer } from "../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../Config/Remotes";

function Servers() {
  const { id } = useParams();

  console.log(id);

  if (id == undefined) {
    return <div>Select a Server</div>;
  }

  return <div>Server: {id}</div>;
}

export default Servers;
