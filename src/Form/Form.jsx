import React, { useState } from "react";
import "./Form.scss";
import asdlkj from "./../assets/jhghjk.jpg";

export const Form = () => {
	const [form, setForm] = useState({
		name: "Sebastian",
		lastName: "Godoy",
		year: 13,
	});
	const { name, lastName, year } = form;

	const inputGroup = [
		{
			title: "name",
			type: "text",
		},
		{
			title: "lastName",
			type: "text",
		},
		{
			title: "year",
			type: "number",
		},
	];

	const setFormValue = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleClick = () =>
		alert(`holi me llamo ${name} ${lastName} y tengo ${year} uwu <3`);

	return (
		<>
			<div className="">
				<div className="formContainer">
					<div className="formSeccion">
						{inputGroup.map((e, i) => (
							<div className="form" key={`${i}palomo`}>
								<p>{e.title}</p>
								<input
									type={e.type}
									name={e.title}
									onChange={setFormValue}
									value={form[e.title || ""]}
								/>
							</div>
						))}
					</div>
					<div className="formSeccion">
						<img src={asdlkj} alt="" />
					</div>
				</div>
				<div className="buttonContainer">
					<button onClick={handleClick}>uwu</button>
				</div>
			</div>
		</>
	);
};
