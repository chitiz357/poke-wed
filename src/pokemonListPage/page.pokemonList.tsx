import { usePokemonList } from "./hook.pokemonList";
import { Link, useParams } from "react-router";

export function PokemonListPage() {
	const { page } = useParams();
	const list = usePokemonList(Number(page));

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
			<div>
				<Link to={`/list/${Number(page) - 1}`}>prev</Link>
				<Link to={`/list/${Number(page) + 1}`}>next</Link>
			</div>
		</div>
	);
}
