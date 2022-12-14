import { useEffect, useState } from "react";
import Character from "./Character";

function Navpage({ page, setPage }) {
	return (
		<div className="px-20 py-5 grid grid-flow-col justify-items-stretch">
			<button
				className="  justify-self-start  bg-slate-700 hover:bg-slate-600 text-white font-bold py-0 px-4 border-b-4 border-slate-700 hover:border-slate-600 rounded "
				onClick={() => {
					if (page === 1) {
						page;
					}
					setPage(page - 1);
				}}
			>
				&#60;- prev
			</button>
			<button
				className="  justify-self-end  bg-slate-700 hover:bg-slate-600 text-white font-bold py-0 px-4 border-b-4 border-slate-700 hover:border-slate-600 rounded "
				onClick={() => setPage(page + 1)}
			>
				nex -&gt;
			</button>
		</div>
	);
}

function CharacterList() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://rickandmortyapi.com/api/character?page=" + page,
			);
			const data = await response.json();
			setLoading(false);
			setCharacters(data.results);
		}
		fetchData();
	}, [page]);

	return (
		<div>
			<br />
			<br />
			<Navpage page={page} setPage={setPage} />
			{loading ? (
				<h1 className="text-xl">Loading</h1>
			) : (
				<div className=" p-20 pt-10 grid gap-6 grid-cols-4">
					{characters.map((character) => {
						return <Character key={character.id} character={character} />;
					})}
				</div>
			)}
			<Navpage page={page} setPage={setPage} />
		</div>
	);
}

export default CharacterList;
