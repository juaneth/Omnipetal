import { getRemotes, createRemote, editRemote } from "../../Config/Remotes";

import React, { useRef } from "react";

function RemoteModal() {
  const NameRef = useRef();
  const IpRef = useRef();
  const PortRef = useRef();
  const PasskeyRef = useRef();

  function addRemotePush() {
    window.location.reload();
    createRemote(
      NameRef.current.value,
      IpRef.current.value,
      PortRef.current.value,
      PasskeyRef.current.value
    );
  }

  return (
    <div>
      <input type="checkbox" id="addRemote" className="modal-toggle" />
      <div className="modal transition in-out w-full">
        <div className="modal-box">
          <h1 className="text-lg font-bold">Add Remote</h1>
          <div className="flex flex-row w-full space-x-6 mt-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered basis-1/4"
              ref={NameRef}
            />

            <input
              type="text"
              placeholder="IP Address"
              className="input input-bordered basis-1/4"
              ref={IpRef}
            />

            <input
              type="text"
              placeholder="Port"
              className="input input-bordered basis-1/4"
              ref={PortRef}
            />

            <input
              type="text"
              placeholder="Passkey"
              className="input input-bordered basis-1/4"
              ref={PasskeyRef}
            />
          </div>
          <div className="modal-action">
            <label htmlFor="addRemote" className="btn">
              Cancel
            </label>
            <label
              htmlFor="addRemote"
              className="btn btn bg-info/80 hover:bg-info/50"
              onClick={addRemotePush}
            >
              Add Remote
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoteModal;
