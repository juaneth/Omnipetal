import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="w-full h-screen w-screen">
      <Navbar></Navbar>

      <Outlet />
    </div>
  );
}

export default App;
