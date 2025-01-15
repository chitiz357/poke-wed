import { PokemonListIndex } from "./models";

export async function getPokemonData(pokemonName: string) {
	const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
	return await data.json();
}


