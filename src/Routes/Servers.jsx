import { useState, useRef, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams, Link } from "react-router-dom";

import { getSettings, editSettings, resetSettings } from "../Config/Settings";
import { getServers, createServer, editServer } from "../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../Config/Remotes";

import collapse from "../Resources/icons/collapse.svg";

function Servers() {
  const { id } = useParams();

  const [selectedServer, setSelectedServer] = useState(id);
  const [menuVisibilty, setMenuVisibility] = useState(true);

  useEffect(() => {
    setSelectedServer(id);
  });

  function collapseMenu() {}

  function ServersListElement() {
    try {
      const servers = getServers().map((server) => (
        <div
          key={server.name}
          className="rounded-lg bg-secondary shadow-lg p-4 flex flex-row justify-center items-center space-x-3 text-center w-full"
        >
          <div className="flex-1 text-left">
            <b>{server.name}</b>

            <p>{server.software + ", " + server.version}</p>
          </div>

          <Link
            to={`/servers/${server.name}/`}
            className={
              selectedServer == server.name
                ? "btn bg-success/80 hover:bg-success/50 w-32"
                : "btn bg-info/80 hover:bg-info/50 w-32"
            }
            onClick={() => {
              setSelectedServer(server.name);
            }}
          >
            {selectedServer == server.name ? "Selected" : "Select"}
          </Link>
        </div>
      ));

      return (
        <div className="flex flex-col space-y-4">
          <div className="text-white/80 font-semibold flex flex-row text-left sticky top-0 w-full p-3 px-4 shadow-lg z-10 bg-secondary">
            <p className="grow text-lg">Your Servers</p>
            <div
              className={
                menuVisibilty == true
                  ? "btn btn-circle bg-neutral/80 hover:bg-neutral/50 btn-sm p-0"
                  : "btn btn-circle bg-neutral/80 hover:bg-neutral/50 btn-sm p-0 rotate-180"
              }
              onClick={() => {
                setMenuVisibility(!menuVisibilty);
              }}
            >
              <img
                src={collapse}
                alt="Close Panel"
                className="h-5 w-5 m-0 p-0"
              />
            </div>
          </div>

          <div className="p-3 space-y-3 pt-0">{servers}</div>
        </div>
      );
    } catch {
      return (
        <div className="flex flex-col space-y-3">
          <h1 className="text-white/80 font-semibold text-left sticky top-0 bg-base-100 w-fit p-2 px-3 rounded-lg shadow-lg z-10">
            Your Servers
          </h1>

          <p className="text-sm opacity-50 ml-0.5">No servers found</p>
        </div>
      );
    }
  }

  return (
    <div className="main-content">
      <div className="flex flex-row space-x-3 m-6">
        <div
          className={
            menuVisibilty == true
              ? "w-96 h-[calc(100vh_-_7rem)] flex flex-col space-y-4l transition"
              : "w-96 h-[calc(100vh_-_7rem)] flex flex-col space-y-4 -translate-x-72 transition"
          }
        >
          <div className="bg-primary h-full shadow-lg overflow-auto rounded-lg flex flex-col">
            <ServersListElement></ServersListElement>
          </div>

          <div className="divider mx-6">OR</div>

          <button className="btn mt-3">Create A New Server</button>
        </div>

        <div
          className={
            menuVisibilty == true
              ? "divider divider-horizontal w-1 mx-0 transition"
              : "divider divider-horizontal w-1 mx-0 -translate-x-72 transition"
          }
        ></div>

        <div
          className={
            menuVisibilty == true
              ? "h-full transition"
              : "h-full -translate-x-72 transition"
          }
        >
          {" "}
          Selected: {selectedServer}
        </div>
      </div>
    </div>
  );
}

export default Servers;
