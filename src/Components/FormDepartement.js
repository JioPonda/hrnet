import React from "react";

// Composant de la partie Departement du formulaire
export function FormDepartement() {
  return (
    <>
      <p>Department</p>
      <select name="department" id="department">
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
    </>
  );
}
