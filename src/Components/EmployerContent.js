import React from "react";
import { NavLink } from "react-router-dom";
import Table from "./Table";

// Composant d'affichage du contenu de la page employee
export default function EmployerContent() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <NavLink to="/Home" className="home-link">
        Home
      </NavLink>
      {/* le composant RcTable sert a afficher un tableau ou nos infos sont envoyé */}
      <Table />
    </div>
  );
}
