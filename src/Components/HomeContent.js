import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HomeForm } from "./HomeForm";
import { displayModal, FormModal } from "./FormModal";

// export const dataTable = [
//   {
//     firstNameIndex: "Jack",
//     lastNameIndex: "Bauer",
//     startDateIndex: "06/11/2001",
//     departementIndex: "Sales",
//     dateOfBirthIndex: "18/02/1966",
//     streetIndex: "Chrono Street",
//     cityIndex: "Los Angeles",
//     stateIndex: "California",
//     zipCodeIndex: "900002",
//   },
//   {
//     firstNameIndex: "John",
//     lastNameIndex: "Wick",
//     startDateIndex: "20/10/2014",
//     departementIndex: "Human Ressources",
//     dateOfBirthIndex: "18/02/1969",
//     streetIndex: "Dog's Avenue",
//     cityIndex: "New York",
//     stateIndex: "New York",
//     zipCodeIndex: "10010",
//   },
//   {
//     firstNameIndex: "John",
//     lastNameIndex: "Rambo",
//     startDateIndex: "04/02/2008",
//     departementIndex: "Engineering",
//     dateOfBirthIndex: "06/07/1947",
//     streetIndex: "Arrow Street",
//     cityIndex: "Montgomery",
//     stateIndex: "Alabama",
//     zipCodeIndex: "36043",
//   },
//   {
//     firstNameIndex: "Gary",
//     lastNameIndex: "Unwin",
//     startDateIndex: "18/02/2015",
//     departementIndex: "Sales",
//     dateOfBirthIndex: "03/06/1992",
//     streetIndex: "Kingsman Street",
//     cityIndex: "Boston",
//     stateIndex: "Massachusetts",
//     zipCodeIndex: "02108",
//   },
// ];

// export const [dataTable, setDataTable] = useState([]);

export const dataTable = [];

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
    firstNameIndex: firstName.value,
    lastNameIndex: lastName.value,
    dateOfBirthIndex: dateOfBirth.value,
    startDateIndex: startDate.value,
    departementIndex: department.value,
    streetIndex: street.value,
    cityIndex: city.value,
    stateIndex: state.value,
    zipCodeIndex: zipCode.value,
  };

  dataTable.push(formData);
  console.log(dataTable);
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
