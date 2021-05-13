import React from "react";
import PropTypes from "prop-types";

const HookUseEffect = (props) => {
	// Calculadora, cuando la suma de dos numeros sea par, mandar una alerta

	// Cargar un video en react, se demora en cargar un video, y hay que estar pendiente como va la carga del video, si el await está listo o no | axios te muestra el % de avance de carga que tiene el video,
	//con un use effect hay que estar pendiente de las variables que estan cambiando siempre desde el axios, loading o el avance, y cuando el porcentaje llegue sea 100, a la propiedad loading, le pones false, y que aparezca un spinner, o una barra que diga el porcentaje de la carga que lleva.
	useEffect(() => {
		effect;
		return () => {
			cleanup;
		};
	}, [input]);

	return <div></div>;
};

HookUseEffect.propTypes = {};

export default HookUseEffect;
