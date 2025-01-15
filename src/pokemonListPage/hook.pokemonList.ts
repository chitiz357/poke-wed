import { useEffect, useState } from "react";
import { getPokemonDataList } from "./services.pokemonList";
import { emptyPokemonData } from "../hooks";

export const usePokemonList = () => {
	const [pokemonDataList, setPokemonDataList] = useState([emptyPokemonData]);

	useEffect(() => {
		getPokemonDataList().then((list) => setPokemonDataList(list));
	}, []);

	return pokemonDataList;
};
