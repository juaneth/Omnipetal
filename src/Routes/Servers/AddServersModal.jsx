import { getRemotes, createRemote, editRemote } from "../../Config/Remotes";

import React, { useRef } from "react";

function ServerModal() {
  const NameRef = useRef();
  const RemoteRef = useRef();
  const SoftwareRef = useRef();
  const VersionRef = useRef();

  function addServerPush() {
    createRemote(
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
          <div className="flex flex-row w-full space-x-6 mt-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered basis-1/4"
              ref={NameRef}
            />

            <input
              type="select"
              placeholder="IP Address"
              className="input input-bordered "
              ref={RemoteRef}
            />

            <select
              defaultValue={"DEFAULT"}
              className="select select-bordered basis-1/4"
              ref={RemoteRef}
            >
              <option disabled value={"DEFAULT"}>
                Select remote
              </option>
            </select>

            <input
              type="text"
              placeholder="Port"
              className="input input-bordered basis-1/4"
              ref={SoftwareRef}
            />

            <input
              type="text"
              placeholder="Passkey"
              className="input input-bordered basis-1/4"
              ref={VersionRef}
            />
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
