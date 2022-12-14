function Character({ character }) {
	return (
		<div
			
			className=" py-5 px-8 relative flex flex-col bg-clip-border bg-slate-700 hover:bg-slate-600 text-white rounded-2xl shadow-lg shadow-lime-900 "
		>
			<h2 className="pb-2 text-center font-semibold text-xl">
				{character.name}
			</h2>
			<img
				className="rounded-full p-3"
				src={character.image}
				alt={character.name}
			/>
			<p className="font-semibold">Origen: {character.origin.name}</p>
			<p className="font-semibold">Ubicacion: {character.location.name}</p>
		</div>
	);
}

export default Character;
