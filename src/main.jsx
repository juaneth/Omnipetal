import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Routes
import Servers from './Routes/Servers'
import Remotes from './Routes/Remotes'
import Settings from './Routes/Settings'

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/servers' element={<Servers />}></Route>
      <Route path='/remotes' element={<Remotes />}></Route>
      <Route path='/settings' element={<Settings />}></Route>
    </Routes>
  </HashRouter>
)
