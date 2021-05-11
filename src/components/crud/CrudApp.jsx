import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
const CrudApp = () => {
	const initialDB = [
		{ id: 1, name: "Shikamaru", clan: "Nara" },
		{ id: 1, name: "Itachi", clan: "Uchiha" },
		{ id: 1, name: "Nagato", clan: "Uzumaki" },
		{ id: 1, name: "Hashirama", clan: "Senju" },
	];

	const [db, setDb] = useState(initialDB);

	return (
		<div>
			<h2>Hola?</h2>
			<CrudForm />
			<CrudTable data={db} />
		</div>
	);
};

export default CrudApp;
