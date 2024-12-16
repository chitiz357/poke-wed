import "./App.css";
import { usePokemonData } from "./context";
import { PokemonCard } from "./components";



function App() {
	const ditto = usePokemonData("ditto");
	return (
		<>
			<div>
				<h1>poke-wed</h1>
				{ditto.species ? <PokemonCard pokemonData={ditto} /> : <p>dsaf</p>}
			</div>
		</>
	);
}

export default App;
