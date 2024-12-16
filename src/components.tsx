import { PokemonData } from "./models";

export const PokemonCard = ({ pokemonData }: { pokemonData: PokemonData }) => {
	return (
		<section>
			<p>{pokemonData.species.name}</p>
			<img src={pokemonData.sprites.front_default} alt="" />
		</section>
	);
};
