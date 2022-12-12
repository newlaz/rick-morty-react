import CharacterList from "./components/CharacterList";

function App() {
	return (
		<div className="font-mono bg-gray-800  text-white">
			<h1 className=" text-center p-10 pb-0 text-6xl font-bold">
				The Rick and Morty
			</h1>
			<CharacterList />
		</div>
	);
}

export default App;
