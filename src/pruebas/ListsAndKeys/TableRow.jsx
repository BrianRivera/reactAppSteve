import React from "react";

const TableRow = ({ el, idx }) => {
	return (
		<>
			<tr className={idx % 2 ? "tr-color" : ""}>
				<th>{el.nombre}</th>
				<th>{el.apellido}</th>
				<th>{el.edad}</th>
			</tr>
		</>
	);
};

export default TableRow;
