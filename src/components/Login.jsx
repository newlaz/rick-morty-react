import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
	const { loginWithRedirect } = useAuth0();
	return (
		<div className="p-56 grid grid-cols">
			<h1 className="text-center p-10 pb-5 text-6xl font-bold">
				The Rick and Morty
			</h1>
			<button
				className="justify-self-center p-10 bg-slate-700 hover:bg-slate-600 text-white font-bold py-0 px-4 border-b-4 border-slate-700 hover:border-slate-600 rounded "
				onClick={() => loginWithRedirect()}
			>
				Iniciar Sesión
			</button>
		</div>
	);
}

export default LoginButton;
