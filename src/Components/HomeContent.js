import React from "react";
import { NavLink } from "react-router-dom";
import { HomeForm } from "./HomeForm";
import { displayModal, FormModal } from "./FormModal";
import { dataTable } from "./RcTable";

export function saveEmployee() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const dateOfBirth = document.getElementById("date-of-birth");
  const startDate = document.getElementById("start-date");
  const department = document.getElementById("department");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const zipCode = document.getElementById("zip-code");

  const employee = {
    firstNameIndex: firstName.value,
    lastNameIndex: lastName.value,
    startDateIndex: startDate.value,
    departmentIndex: department.value,
    dateOfBirthIndex: dateOfBirth.value,
    streetIndex: street.value,
    cityIndex: city.value,
    stateIndex: state.value,
    zipCodeIndex: zipCode.value,
  };
  employee.push(dataTable);
}

export default function HomeContent() {
  return (
    <main className="container">
      <NavLink to="/Employer-Liste" className="employer-link">
        View Current Employees
      </NavLink>
      <h2>Create Employee</h2>
      <HomeForm />
      <button className="button" onClick={(displayModal, saveEmployee)}>
        Save
      </button>
      <FormModal />
    </main>
  );
}
