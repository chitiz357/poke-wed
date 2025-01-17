import { PokemonListIndex } from "../models";
import { getPokemonData } from "../services";

export async function getPokemonDataList(page = 1) {
	const url = `https://pokeapi.co/api/v2/pokemon/?offset=${
		(page - 1) * 50
	}&limit=50`;
	const data = await fetch(url);
	const list: PokemonListIndex = await data.json();
	const res = list.results.map((r) => getPokemonData(r.name));
	return await Promise.all(res);
}
