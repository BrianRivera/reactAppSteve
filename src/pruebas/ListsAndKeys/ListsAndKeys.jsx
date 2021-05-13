import React from "react";
import TableRow from "./TableRow";
import { v4 as uuidv4 } from "uuid";
import TableRowcss from "./TableRow.css";
import datos from "./datos.json";

const ListsAndKeys = () => {
	//Crear una tabla con datos provenientes de un JSON en donde cada fila tenga un color distinto

	//Datos de ejemplo | reemplazados por un JSON

	// const dbExample = [
	// 	{
	// 		id: uuidv4(),
	// 		nombre: "palomo",
	// 		apellido: "adsas",
	// 		edad: 1221,
	// 	},
	// 	{
	// 		id: uuidv4(),
	// 		nombre: "brian",
	// 		apellido: "bfdad",
	// 		edad: 5211,
	// 	},
	// 	{
	// 		id: uuidv4(),
	// 		nombre: "kazu",
	// 		apellido: "cfadg",
	// 		edad: 5124,
	// 	},
	// ];

	return (
		<>
			<hr />
			<h1 className="h1-center">LIST AND KEYS</h1>
			<div className="div-center">
				<table>
					<thead>
						<tr className="th-color">
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Edad</th>
						</tr>
					</thead>
					<tbody>
						{!datos.length ? (
							<tr>
								<th colSpan="3">No hay datos</th>
							</tr>
						) : (
							// Sin ID se puede usar el índice del array, pero esto puede generar un error a futuro, o puede realentizar demasiado la aplicación con una enorme cantidad de datos.
							//  dbExample.map((el, idx) => <TableRow key={idx} el={el} />)
							// Después de haber instalado UUID, para generar una id aleatoria
							datos.map((el, idx) => <TableRow el={el} key={el.id} idx={idx} />)
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ListsAndKeys;
