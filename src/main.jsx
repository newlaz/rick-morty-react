import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-t2pmv2st5h8xyk6n.us.auth0.com"
			clientId="iadl8dVzFrzvxJRD61Xl8MQNzEchuvS4"
			redirectUri={window.location.origin}
		>
			<App /> 
		</Auth0Provider>
	</React.StrictMode>,
);
