import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { LongCards } from "../component/cards";
import "../../styles/home.css";

import { useParams } from "react-router-dom";

export const DetallePersona = () => {
	const {store, action}= useContext(Context)
	
	return (
		<div> hello Detalle Persona</div>
	)
}