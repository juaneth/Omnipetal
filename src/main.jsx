import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Routes
import Home from "./Routes/Home/Home.jsx";
import Servers from "./Routes/Servers/Servers.jsx";
import Remotes from "./Routes/Remotes/Remotes.jsx";
import Settings from "./Routes/Settings/Settings.jsx";

import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/servers" element={<Servers />}></Route>
        <Route path="/servers/:id/" element={<Servers />}></Route>
        <Route path="/remotes" element={<Remotes />}></Route>
        <Route path="/remotes/:id/" element={<Remotes />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Route>
    </Routes>
  </HashRouter>
);
