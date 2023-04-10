import React from "react";
import { states } from "../data/States";

// Composant comprenant la partie Fieldset du formulaire
export default function FormFieldset() {
  return (
    <fieldset className="address">
      <legend>Address</legend>

      <p>Street</p>
      <input id="street" type="text" />

      <p>City</p>
      <input id="city" type="text" />

      <p>State</p>
      <select className="select-form" id="state">
        {states.map((state) => (
          <option value={state.name} key={state.abbreviation}>
            {state.name}
          </option>
        ))}
      </select>

      <p>Zip Code</p>
      <input id="zip-code" type="number" />
    </fieldset>
  );
}
