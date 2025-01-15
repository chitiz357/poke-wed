import { usePokemonList } from "./hook.pokemonList";
import { Link } from "react-router";

export function PokemonListPage() {
	const list = usePokemonList();

	return (
		<div>
			<h1>list</h1>
			<div className="list-warper">
				{list.map((pokemon) => (
					<div className="card">
						<Link to={`/pokemon/${pokemon.id}`}>
							<img src={pokemon.sprites.front_default} alt="" />
							<p>{pokemon.name}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
