import React from "react";
import CrudApp from "./components/crud/CrudApp.jsx";
import { App } from "./App";
import "./NarutoApp.css";

export const NarutoApp = () => {
	return (
		<div className="">
			<h1>REACT TRAINING</h1>
			<hr />
			<h1>CRUD OTAKU</h1>
			<CrudApp />
			<hr />
			<h1>FORMULARIO OTAKU</h1>
			<App />
		</div>
	);
};
