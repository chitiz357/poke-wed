import React from "react";
import { Link } from "react-router";

export function Navbar() {
	return (
		<nav>
			<form>
				<input type="text" name="" id="pokemon" />
				<button>search</button>
				<Link to={"/"}>home</Link>
				<Link to={"/list/1"}>list</Link>
			</form>
		</nav>
	);
}
