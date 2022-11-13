import { getServers, createServer, editServer } from "../../Config/Servers";

import React, { useRef } from "react";

function ServerModal() {
  const NameRef = useRef();
  const RemoteRef = useRef();
  const SoftwareRef = useRef();
  const VersionRef = useRef();

  function addServerPush() {
    createServer(
      NameRef.current.value,
      RemoteRef.current.value,
      SoftwareRef.current.value,
      VersionRef.current.value
    );
    window.location.reload();
  }

  return (
    <div>
      <input type="checkbox" id="addServer" className="modal-toggle" />
      <div className="modal transition in-out w-full">
        <div className="modal-box">
          <h1 className="text-lg font-bold">Create a Server</h1>
          <div className="flex flex-col w-full space-y-3 mt-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              ref={NameRef}
            />

            <select
              defaultValue={"DEFAULT"}
              className="select select-bordered"
              ref={RemoteRef}
            >
              <option disabled value={"DEFAULT"}>
                Select remote
              </option>
            </select>

            <div className="flex flex-row space-x-4">
              <select
                defaultValue={"DEFAULT"}
                className="select select-bordered flex-grow"
                ref={RemoteRef}
              >
                <option disabled value={"DEFAULT"}>
                  Software
                </option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                className="select select-bordered flex-grow"
                ref={RemoteRef}
              >
                <option disabled value={"DEFAULT"}>
                  Version
                </option>
              </select>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="addServer" className="btn">
              Cancel
            </label>
            <label
              htmlFor="addServer"
              className="btn btn bg-info/80 hover:bg-info/50"
              onClick={addServerPush}
            >
              Add Server
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerModal;
