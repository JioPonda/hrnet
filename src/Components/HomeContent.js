import React from "react";
import { NavLink } from "react-router-dom";
import { HomeForm } from "./HomeForm";
import { displayModal, FormModal } from "./FormModal";

export function saveEmployee() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const dateOfBirth = document.getElementById("date-of-birth");
  const startDate = document.getElementById("start-date");
  const department = document.getElementById("department");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.querySelector(".select-form");
  const zipCode = document.getElementById("zip-code");

  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = {
    firstName: firstName.value,
    lastName: lastName.value,
    dateOfBirth: dateOfBirth.value,
    startDate: startDate.value,
    department: department.value,
    street: street.value,
    city: city.value,
    state: state.value,
    zipCode: zipCode.value,
  };
  employees.push(employee);
  localStorage.setItem("employees", JSON.stringify(employees));
  displayModal();
}

export default function HomeContent() {
  return (
    <main className="container">
      <NavLink to="/Employer-Liste">View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <HomeForm />
      <button className="button" onClick={saveEmployee}>
        Save
      </button>
      <FormModal />
    </main>
  );
}
