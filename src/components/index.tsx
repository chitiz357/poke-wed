import React from "react";
import { PokemonData } from "../models";

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

export function Containder({ children }: { children: React.ReactNode }) {
	return <article>{children}</article>;
}
