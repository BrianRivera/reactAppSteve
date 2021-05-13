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
	const [dataToEdit, setDataToEdit] = useState(null);

	const createData = (data) => {};
	const updateData = (data) => {};
	const deleteData = (id) => {};

	return (
		<div>
			<CrudForm
				createData={createData}
				updateData={updateData}
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
			/>
			<CrudTable
				data={db}
				setDataToEdit={setDataToEdit}
				deleteData={deleteData}
			/>
		</div>
	);
};

export default CrudApp;
