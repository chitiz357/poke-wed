import { useParams } from "react-router";
import { PokemonData } from "./models";
import { usePokemonData } from "./context";

export const PokemonCard = ({ pokemonData }: { pokemonData: PokemonData }) => {
	return (
		<main>
			<article>
				<h2>{pokemonData.species.name}</h2>
				<section>
					<img src={pokemonData.sprites.front_default} alt="" />
				</section>
				<section>
					<ul>
						{pokemonData.types.map((type) => {
							return <li>{type.type.name}</li>;
						})}
					</ul>
				</section>
			</article>
		</main>
	);
};
