import React from "react";
import { DataTable } from "react-basic-datatable";
import { data } from "./HomeContent";
// Define columns, each field's name should match the data
const columns = [
  { label: "First Name", field: "firstName" },
  { label: "Last Name", field: "lastName" },
  { label: "Start Date", field: "startDate" },
  { label: "Departement", field: "departement" },
  { label: "Date of Birth", field: "birthDate" },
  { label: "Street", field: "street" },
  { label: "City", field: "city" },
  { label: "State", field: "state" },
  { label: "Zip Code", field: "zipCode" },
];

// Define your data rows
const mockedData = [
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/1992",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "980023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    startDate: "10/02/2022",
    departement: "Sales",
    birthDate: "02/28/1997",
    street: "25 rue du chemin rouge",
    city: "Indianapolis",
    state: "Alabama",
    zipCode: "890023",
  },
  {
    firstName: "Barbara",
    lastName: "Gold",
    startDate: "10/20/2022",
    departement: "Sales",
    birthDate: "07/5/2001",
    street: "25 rue du chemin jaune",
    city: "Los Angeles",
    state: "California",
    zipCode: "100023",
  },
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/1992",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "980023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    startDate: "10/02/2022",
    departement: "Sales",
    birthDate: "02/28/1997",
    street: "25 rue du chemin rouge",
    city: "Indianapolis",
    state: "Alabama",
    zipCode: "890023",
  },
  {
    firstName: "Barbara",
    lastName: "Gold",
    startDate: "10/20/2022",
    departement: "Sales",
    birthDate: "07/5/2001",
    street: "25 rue du chemin jaune",
    city: "Los Angeles",
    state: "California",
    zipCode: "100023",
  },
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/1992",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "980023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    startDate: "10/02/2022",
    departement: "Sales",
    birthDate: "02/28/1997",
    street: "25 rue du chemin rouge",
    city: "Indianapolis",
    state: "Alabama",
    zipCode: "890023",
  },
  {
    firstName: "Barbara",
    lastName: "Gold",
    startDate: "10/20/2022",
    departement: "Sales",
    birthDate: "07/5/2001",
    street: "25 rue du chemin jaune",
    city: "Los Angeles",
    state: "California",
    zipCode: "100023",
  },
];

// (Optional) Show entries per page, default is [10, 25, 50, 100]
const showingLength = [5, 10, 15];

export default function Table() {
  return (
    <DataTable
      columns={columns}
      // rows={data}
      rows={mockedData}
      showingLength={showingLength}
    />
  );
}
