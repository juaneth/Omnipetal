import { useState, useRef, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams, Link } from "react-router-dom";

import { getSettings, editSettings, resetSettings } from "../Config/Settings";
import { getServers, createServer, editServer } from "../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../Config/Remotes";

function Servers() {
  const { id } = useParams();

  const [selectedServer, setSelectedServer] = useState(id);

  function ServersListElement() {
    try {
      const servers = getServers().map((server) => (
        <div
          key={server.name}
          className="p-3 rounded-lg bg-secondary shadow-lg flex flex-col justify-center items-center space-y-3 text-center w-full"
        >
          <b>{server.name}</b>
  
          <p>{server.software + ", " + server.version}</p>
  
          <Link
            to={`/servers/${server.name}/`}
            className={
              selectedServer == server.name
                ? "btn bg-success/80 hover:bg-success/50 w-full"
                : "btn bg-info/80 hover:bg-info/50 w-full"
            }
            onClick={() => {
              setSelectedServer(server.name)
            }}
          >
            {
              selectedServer == server.name
              ? "Selected"
              : "Select"
            }
          </Link>
        </div>
      ));
  
      return <div className="flex flex-col space-y-4">
          <h1 className="text-white/80 font-semibold text-left sticky top-0 bg-base-100 w-fit p-2 px-3 rounded-lg shadow-lg z-10">
            Your Servers
          </h1>

          {servers}
        </div>;
    } catch {
      return <div className="flex flex-col space-y-3">
        <h1 className="text-white/80 font-semibold text-left sticky top-0 bg-base-100 w-fit p-2 px-3 rounded-lg shadow-lg z-10">
          Your Servers
        </h1>

        <p className="text-sm opacity-50 ml-0.5">No servers found</p>
      </div>;
    }
  }

  return(
    <div className='main-content'>
      <div className="flex flex-row space-x-3 m-6">
        <div className="w-1/4 h-[calc(100vh_-_7rem)] flex flex-col space-y-4">
          <div className="bg-primary p-4 h-full shadow-lg overflow-auto rounded-lg relative flex flex-col">
            <ServersListElement></ServersListElement>
          </div>

          <div className="divider mx-6">OR</div>

          <button className="btn mt-3">Create A New Server</button>
        </div>
        

        <div className="divider divider-horizontal w-1 mx-0"></div>

        <div className="w-3/4 h-full">
          Selected: { selectedServer }
        </div>
      </div>
    </div>
  )
}

export default Servers;
