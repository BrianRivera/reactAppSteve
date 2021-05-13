import React, { useState } from "react";
import CrudApp from "./components/crud/CrudApp.jsx";
import { App } from "./App";
import HookUseState from "./hooks/HookUseState.jsx";
import Properties from "./pruebas/Properties";
import ListsAndKeys from "./pruebas/ListsAndKeys/ListsAndKeys.jsx";
import "./NarutoApp.css";

export const NarutoApp = () => {
	return (
		<>
			<h1 className="h1-center">REACT TRAINING</h1>
			<ListsAndKeys />
			<hr />
			<h1>PROPERTIES</h1>
			<Properties
				number={15616}
				string="dasda"
				array={[2, 5, 13, 6]}
				arrayObjetos={[
					{
						id: "1",
						name: "primero",
					},
					{
						id: "2",
						name: "segundo",
					},
					{
						id: "3",
						name: "tercero",
					},
				]}
				object={{ nombre: "Esteban", apellido: "González" }}
				boolean={true}
				functionn={(a, b) => a + b}
			/>
			<HookUseState />
			<hr />
			<h1>CRUD OTAKU</h1>
			<CrudApp />
			<hr />
			<h1>FORMULARIO OTAKU</h1>
			<App />
		</>
	);
};
