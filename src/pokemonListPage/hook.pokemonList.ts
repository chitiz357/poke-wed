import { useEffect, useState } from "react";
import { getPokemonDataList } from "./services.pokemonList";
import { emptyPokemonData } from "../hooks";

export const usePokemonList = (page: number) => {
	const [pokemonDataList, setPokemonDataList] = useState([emptyPokemonData]);

	useEffect(() => {
		getPokemonDataList(page).then((list) => setPokemonDataList(list));
	}, [pokemonDataList]);

	return pokemonDataList;
};
