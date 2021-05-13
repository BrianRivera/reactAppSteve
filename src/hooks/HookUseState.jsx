import React, { useState } from "react";

const HookUseState = () => {
	const [motor, setMotor] = useState(false);
	return (
		<div>
			<hr />
			<h1 className="h1-center">HOOK useState</h1>
			<h1 className="h1-center">
				El motor está: {motor ? "Encendido" : "Apagado"}
			</h1>
			<button onClick={() => setMotor(!motor)}>Encender/Apagar</button>
		</div>
	);
};

export default HookUseState;
