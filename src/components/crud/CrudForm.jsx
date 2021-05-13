import React, { useState, useEffect } from "react";

const initialForm = {
	id: null,
	name: "",
	clan: "",
};

const CrudForm = () => {
	const [form, setForm] = useState({ initialForm });

	const handleChange = (e) => {};
	const handleSubmit = (e) => {};
	const handleReset = (e) => {};

	return (
		<div>
			<h3>Ingresa un personaje de Naruto</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={handleChange}
					value={form.name}
				/>
				<input
					type="text"
					name="clan"
					placeholder="Clan"
					onChange={handleChange}
					value={form.clan}
				/>
				<input type="submit" value="Submit" />
				<input type="reset" value="Reset" onClick={handleReset} />
			</form>
		</div>
	);
};

export default CrudForm;
