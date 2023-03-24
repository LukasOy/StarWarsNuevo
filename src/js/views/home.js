import React, { useContext } from "react";
import { Context } from "../store/appContext";
/* import gg1 from "../../img/gg1.jpg";
import gg2 from "../../img/gg2.jpg";
import gg3 from "../../img/gg3.jpg"; */
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { LongCards } from "../component/cards";

export const Home = () => {

  const {store, actions} = useContext(Context)
  
  return (
    <div className="container">
      <div className="text-center">
        <h1> Planetas </h1>
        <div className="row">
          <div className="col">
            <Cards titulo="Planeta1" ruta="./planetas" boton="Learn More!" />
          </div>
         
        </div>
      </div> 

      <div className="text-center">
        <h1>Personajes </h1>
        <div className="row">
        {store.PersonDetalle.map((objeto, index)=>{
        
        return (
        <Cards title={objeto.name} id={objeto.uid} ruta={"/detalle/persondetalle/"+ objeto.uid} boton="Learn More!"/>
        
        )
        })}
        </div>
      </div> 
    </div>
  );
};
