import React from "react";
import { NavLink } from "react-router-dom";

export default function EmployerContent() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <NavLink to="/Home">Home</NavLink>
    </div>
  );
}
