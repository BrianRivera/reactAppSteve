import React from "react";
import CrudTableRow from "./CrudTableRow.jsx";

const CrudTable = ({ data }) => {
	return (
		<div>
			<h3>Characters Table</h3>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Clan</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.lenght === 0 ? (
						<tr>
							<td colSpan="3">Sin Datos</td>
						</tr>
					) : (
						data.map((el) => <CrudTableRow key={el.id} el={el} />)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTable;
