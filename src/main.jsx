import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home'
import './index.css'
import { HashRouter, Route, Routes } from "react-router-dom";

// Routes
import CreateServer from './Routes/Servers'
import Servers from './Routes/Servers'
import Remotes from './Routes/Remotes'
import Settings from './Routes/Settings'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="servers" element={<CreateServer/>} />
    <Route path="remotes" element={<Remotes/>} />
    <Route path="settings" element={<Settings/>} />
    </Routes>
  </HashRouter>
)
