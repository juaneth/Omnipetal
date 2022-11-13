import { useState, useRef, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { useParams, Link } from "react-router-dom";

import { getSettings } from "../../Config/Settings";
import { getServers } from "../../Config/Servers";
import { getRemotes, createRemote, editRemote } from "../../Config/Remotes";

import collapse from "../../Resources/icons/collapse.svg";

import RemoteModal from "./AddRemotesModal";

function Remotes() {
  const { id } = useParams();

  const [selectedRemote, setselectedRemote] = useState(id);
  const [menuVisibilty, setMenuVisibility] = useState(true);
  const [remotesList, setRemotes] = useState(getRemotes());

  useEffect(() => {
    setselectedRemote(id);
  });

  function RemoteListElement() {
    // Server Element
    try {
      const remotes = remotesList.map((remote) => (
        <div
          key={remote.name}
          className="rounded-lg bg-secondary shadow-lg p-4 flex flex-row justify-center items-center space-x-3 text-center w-full"
        >
          <div className="flex-1 text-left">
            <b>{remote.name}</b>

            <p>{`IP: ${remote.ip}, Port: ${remote.port}`}</p>
          </div>

          <Link
            to={`/remotes/${remote.name}/`}
            className={
              selectedRemote == remote.name
                ? "btn bg-success/80 hover:bg-success/50 w-32"
                : "btn bg-info/80 hover:bg-info/50 w-32"
            }
            onClick={() => {
              setselectedRemote(remote.name);
            }}
          >
            {selectedRemote == remote.name ? "Selected" : "Select"}
          </Link>
        </div>
      ));

      // Menu
      return (
        <div className="flex flex-col space-y-4">
          <div className="text-white/80 font-semibold flex flex-row text-left sticky top-0 w-full p-3 px-4 shadow-lg z-10 bg-secondary">
            <p className="grow text-lg">Your Remotes</p>
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

          <div className="p-3 space-y-3 pt-0">{remotes}</div>
        </div>
      );
    } catch {
      return (
        <div className="flex flex-col space-y-3">
          <div className="text-white/80 font-semibold flex flex-row text-left sticky top-0 w-full p-3 px-4 shadow-lg z-10 bg-secondary">
            <p className="grow text-lg">Your Remotes</p>
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

          <p className="text-sm opacity-50 ml-4">No remotes found</p>
        </div>
      );
    }
  }

  return (
    <div className="main-content">
      <RemoteModal></RemoteModal>
      <div className="flex flex-row space-x-3 m-6 mt-0">
        <div
          className={
            menuVisibilty == true
              ? "w-96 h-[calc(100vh_-_5.5rem)] flex flex-col space-y-4 transition"
              : "w-96 h-[calc(100vh_-_5.5rem)] flex flex-col space-y-4 -translate-x-72 transition"
          }
        >
          <div className="bg-primary h-full shadow-lg overflow-auto rounded-lg flex flex-col">
            <RemoteListElement></RemoteListElement>
          </div>

          <div className="divider mx-6">OR</div>

          <label htmlFor="addRemote" className="btn mt-3">
            Add a new Remote
          </label>
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
          Selected: {selectedRemote}
        </div>
      </div>
    </div>
  );
}

export default Remotes;
