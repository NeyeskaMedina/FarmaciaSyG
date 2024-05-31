import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from "./context/ContextProvider.jsx";
import { FacebookProvider } from "react-facebook";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
        <FacebookProvider>
          <App />
        </FacebookProvider>
      </ContextProvider>
  </React.StrictMode>,
)