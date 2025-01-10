import { useState, useEffect } from "react";
import { PokemonData } from "./models";
import { getPokemonData } from "./adapter";

export function usePokemonData(pokemonName = "0") {
	const [pokemonData, setPokemonData] = useState(emptyPokemonData);
	useEffect(() => {
		getPokemonData(pokemonName).then((data) => setPokemonData(data));
	}, []);
	return pokemonData;
}

export const emptyPokemonData: PokemonData = {
	abilities: [],
	base_experience: 0,
	cries: {
		latest: "",
		legacy: "",
	},
	forms: [],
	game_indices: [],
	height: 0,
	held_items: [],
	id: 0,
	is_default: false,
	location_area_encounters: "",
	moves: [],
	name: "",
	order: 0,
	past_abilities: [],
	past_types: [],
	species: {
		name: "",
		url: "",
	},
	sprites: {
		back_default: "",
		back_female: null,
		back_shiny: "",
		back_shiny_female: null,
		front_default: "",
		front_female: null,
		front_shiny: "",
		front_shiny_female: null,
	},
	stats: [],
	types: [],
	weight: 0,
};
