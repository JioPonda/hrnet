import React from "react";
import { NavLink } from "react-router-dom";
import { HomeForm } from "./HomeForm";
import { FormModal } from "./FormModal";

export default function HomeContent() {
  return (
    <main class="container">
      <NavLink to="/Employer-Liste">View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <HomeForm />
      <button onclick="saveEmployee()">Save</button>
      <FormModal />
    </main>
  );
}
