import React from "react";

const CrudTableRow = ({ el }) => {
	return (
		<tr>
			<th>{el.name}</th>
			<th>{el.clan}</th>
			<th>
				<button>Update</button>
				<button>Delete</button>
			</th>
		</tr>
	);
};

export default CrudTableRow;
