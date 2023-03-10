import React from "react";

export function FormDepartement() {
  return (
    <>
      <label for="department">Department</label>
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
