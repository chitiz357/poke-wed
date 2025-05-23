import { usePokemonData } from "./hooks";
import { PokemonCard } from "./components";

function App() {
	const ditto = usePokemonData("1");
	const charizard = usePokemonData("charizard");
	return (
		<>
			<div>
				<h1>poke-wed</h1>
				{ditto.species ? <PokemonCard pokemonData={ditto} /> : <p>dsaf</p>}
				{charizard.species ? (
					<PokemonCard pokemonData={charizard} />
				) : (
					<p>dsaf</p>
				)}
			</div>
		</>
	);
}

export default App;
