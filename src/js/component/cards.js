import { checkPropTypes } from "prop-types";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Cards = (props) => {
  const { actions } = useContext(Context);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <img src="https://styles.redditmedia.com/t5_2qi4s/styles/communityIcon_0ls09l47f1561.png?width=256&v=enabled&s=f8c9fc78e80caf822b4ea8e45b525e5836e4e22d"></img>
        <Link to={props.ruta}>
          <a href="#" class="btn btn-primary">
            {props.boton}
          </a>
        </Link>
        <div className="col">
          <button className="favorito" onClick={() => actions.AgrFavor(props.title, props.id)}>
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
