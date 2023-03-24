import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between" id="myNav">
      <Link to="/">
        <img className="logo" src="https://34.195.119.223/wp-content/uploads/star-wars.png" />
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button
              className=" dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => actions.AgrFavor(props.title, props.id)}
              title="Add to Favorites"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {store.favorites.map((value, index) => {
                return (
                  <li key={index} className="dropdown-item d-flex justify-content-between">
                    {value}
                    <button className="btn btn-sm btn-outline-danger" onClick={() => actions.ElimFavor(index)}>
                      Eliminar
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};