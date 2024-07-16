import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from "./context/ContextGlobal.jsx";
import { FacebookProvider } from "react-facebook";
import { AuthProvider } from "./context/useAuth.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
        <AuthProvider>
          <FacebookProvider>
            <App />
          </FacebookProvider>
        </AuthProvider>
      </ContextProvider>
  </React.StrictMode>,
)