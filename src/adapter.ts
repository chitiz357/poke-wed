export function getPokemonData(pokemonName: string) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
		(data) => data.json()
	);
}