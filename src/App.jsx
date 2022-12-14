import CharacterList from "./components/CharacterList";
import LogoutButton from "./components/Logout";
import LoginButton from "./components/Login";
import Authenticated from "./components/Authenticated";
import Navb from "./components/Navb";
function App() {
	return (
		<>
			<div className="  font-mono bg-gray-800  text-white grid grid-cols gap-12 place-items-center ">
				{Authenticated() ? (
					<div
						style={{
							backgroundImage: `url("https://i.ibb.co/wh52r7J/rick-and-morty-bglistch.jpg")`,
						}}
						className="bg-no-repeat bg-center bg-[length:1250px_2700px] place-items-center grid grid-cols gap-5 "
					>
						<Navb />
						<CharacterList />
					</div>
				) : (
					<div
						style={{
							backgroundImage: `url("https://i.ibb.co/qnQ0Pfx/Rick-Morty-login.jpg")`,
						}}
						className="grid grid-cols gap-5 w-screen  place-items-center  bg-origin-border bg-no-repeat bg-center bg-cover"
					>
						<LoginButton />
					</div>
				)}
			</div>
		</>
	);
}

export default App;
