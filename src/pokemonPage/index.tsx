import { Link, useParams } from "react-router";
import { usePokemonData } from "../hooks";

export const PokemonPage = () => {
	const { id } = useParams();
	const pokemonData = usePokemonData(id);
	return (
		<main>
			<article>
				<h2>{pokemonData.species.name}</h2>
				<section>
					<img src={pokemonData.sprites.front_default} alt="" />
				</section>
				<section>
					<ul>
						{pokemonData.types.map
						((type) => {
							return <li className="type-card">{type.type.name}</li>;
						})}
					</ul>
				</section>
			</article>
			<Link to={`/pokemon/${Number(id) - 1}`}>prev</Link>
			<Link to={`/pokemon/${Number(id) + 1}`}>next</Link>
		</main>
	);
};
