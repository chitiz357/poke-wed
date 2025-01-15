import { PokemonListIndex } from "../models";
import { getPokemonData } from "../services";

export async function getPokemonDataList() {
	const data = await fetch(
		`https://pokeapi.co/api/v2/pokemon/?limit=50&?offset=0`
	);
	const list: PokemonListIndex = await data.json();
	const res = list.results.map((r) => getPokemonData(r.name));
	return await Promise.all(res);
}
