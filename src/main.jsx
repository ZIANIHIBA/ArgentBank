import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import {provider} from 'react-redux';
//import { legacy_createStore } from 'redux'
//import reducer from './config/reducer'
import App from './App.jsx'
import './index.css'

//const store=legacy_createStore(reducer)

createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>
)
