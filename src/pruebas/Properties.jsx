import React from "react";
import PropTypes from "prop-types";

const Properties = ({
	number,
	string,
	array: [, dos],
	arrayObjetos: [, a2],
	object: { apellido },
	boolean,
	functionn,
}) => {
	return (
		<div className="div-center">
			<h1>{number}</h1>
			<h1>{string}</h1>
			<h1>{dos}</h1>
			<h1>{a2.name}</h1>
			<h1>{apellido}</h1>
			<h1>{boolean ? "true" : "false"}</h1>
			<h1>{functionn(1, 10)}</h1>
		</div>
	);
};

Properties.propTypes = {};

export default Properties;
