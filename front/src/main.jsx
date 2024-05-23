import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/navBar/NavBar.jsx'
import { Provider } from "react-redux"
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
)
