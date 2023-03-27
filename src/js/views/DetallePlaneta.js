import React, { useState, useEffect, useContext } from "react";
import { LongCards } from "../component/cards";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const DetallePlaneta=()=>{

        const { id } = useParams();
        const [planetas, setPlanetas] = useState({});
    
        useEffect(() => {
            fetch("https://www.swapi.tech/api/planets/" + id)
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                setPlanetas(data.result);
              })
              .catch((error) => console.log(error));
          }, []);
    
          
    
    return <>
    <div className="container">
    <div className="row"> 
    <div className="col-5">
    <img src="https://lafuerzanoticias.files.wordpress.com/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1" width={500}/>
    
    </div>
    <div className="col">
        <h1>{planetas?.properties?.name}</h1>
        <p>{planetas?.description}</p>
    
    </div>
    </div>
    
    </div>
    <table>
        <tr>
            <td>diameter</td>
            <td>rotation_period</td>
            <td>orbital_period</td>
            <td>gravity</td>
            <td>population</td>
            <td>climate</td>
            <td>terrain</td>
            <td>surface_water</td>
        </tr>
        <tr>
            <td>{planetas?.properties?.diameter}</td>
            <td>{planetas?.properties?.rotation_period}</td>
            <td>{planetas?.properties?.orbital_period}</td>
            <td>{planetas?.properties?.gravity}</td>
            <td>{planetas?.properties?.population}</td>
            <td>{planetas?.properties?.climate}</td>
            <td>{planetas?.properties?.terrain}</td>
            <td>{planetas?.properties?.surface_water}</td>
        </tr>
    </table>
    
    </>
    
    
    }