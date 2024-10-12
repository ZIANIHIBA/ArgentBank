import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
//import { legacy_createStore } from 'redux'
//import reducer from './config/reducer'
import App from './App.jsx'
import './index.css'
import{store} from "./config/store"


createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>
)
