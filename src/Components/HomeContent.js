import React from "react";
import { NavLink } from "react-router-dom";
import { HomeForm } from "./HomeForm";
// import { displayModal, Modal } from "./FormModal";
import { Modal, displayModal } from "@jioponda/modalhrnet";

export const data = [];

export function saveEmployee() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const dateOfBirth = document.getElementById("date-of-birth");
  const startDate = document.getElementById("start-date");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const zipCode = document.getElementById("zip-code");
  const department = document.getElementById("department");

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    startDate: startDate.value,
    departement: department.value,
    birthDate: dateOfBirth.value,
    street: street.value,
    city: city.value,
    state: state.value,
    zipCode: zipCode.value,
  };

  data.push(formData);
  console.log(data);
  displayModal();
}

export default function HomeContent() {
  return (
    <main className="container">
      <NavLink to="/Employer-Liste" className="employer-link">
        View Current Employees
      </NavLink>
      <h2>Create Employee</h2>
      <HomeForm />
      <button className="button" onClick={saveEmployee}>
        Save
      </button>
      <Modal />
    </main>
  );
}
