import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
	const { user, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<>
				<img
					src={user.picture}
					alt={user.name}
					className="rounded-full h-6 mr-3 sm:h-9"
				/>
			</>
		)
	);
}
export default Profile;
