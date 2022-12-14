import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
	const { logout } = useAuth0();

	return (
		<>
			<button
				className=" p-10 bg-slate-700 hover:bg-slate-600 text-white font-bold py-0 px-4 border-b-4 border-slate-700 hover:border-slate-600 rounded "
				onClick={() => logout({ returnTo: window.location.origin })}
			>
				Cerrar Sesion
			</button>
		</>
	);
}

export default LogoutButton;
