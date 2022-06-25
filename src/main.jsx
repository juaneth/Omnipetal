import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Routes
import CreateServer from './Routes/CreateServer'
import Servers from './Routes/Servers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="createServer" element={<CreateServer/>} />
    <Route path="Servers" element={<Servers/>} />
    </Routes>
  </BrowserRouter>
)
