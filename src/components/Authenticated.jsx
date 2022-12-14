import { useAuth0 } from "@auth0/auth0-react";

function Authenticated() {
	const { isAuthenticated } = useAuth0();
	return isAuthenticated;
}

export default Authenticated;
