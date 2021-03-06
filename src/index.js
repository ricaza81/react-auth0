import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-gy7q6ixj.us.auth0.com"
      clientId="PGvBrNzMmf9HRHFVnX61Zw6cK2Dt7cor"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
