import React, { useState, useEffect, useContext } from "react";
import { Link } from "react";
import { LongCards } from "../component/longcards";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetas = () => {
	const { store, actions } = useContext(Context);
	return <div className="container">
		<h1>Planetas</h1>
		<div className="row">
            <h1>soylukas</h1>
			{store.planetas.map((objeto, index) => {
				return <LongCards titulo={objeto.name} 
				rutaDetalle={"/detalle/DetallePlaneta/"+ objeto.uid}
				boton="❤️" 
				img="https://lafuerzanoticias.files.wordpress.com/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1"/>
			})}
		</div>
		

	</div>}