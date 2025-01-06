import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { HomePage } from "./homePage";
import { Containder, Navbar } from "./components.tsx";
import { PokemonPage } from "./pokemonPage";
import { PokemonListPage } from "./pokemonListPage/index.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Navbar />
		<Containder>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/pokemon/:id" element={<PokemonPage />} />
				<Route path="/list/:page" element={<PokemonListPage />} />
			</Routes>
		</Containder>
	</BrowserRouter>
);
