import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="101961828065-ge9ktthv316d67mdrrbtc47c866dp7i4.apps.googleusercontent.com">

        <App />

    </GoogleOAuthProvider>
  </React.StrictMode>
);
