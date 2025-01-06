import { PokemonData } from "./models";

export const PokemonCard = ({ pokemonData }: { pokemonData: PokemonData }) => {
	return (
		<main>
			<article>
				<section>
					<img src={pokemonData.sprites.front_default} alt="" />
				</section>
				<section>
					<p>{pokemonData.species.name}</p>
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
