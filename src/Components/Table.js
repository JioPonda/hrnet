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
    birthDate: "11/30/2001",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    birthDate: "12/31/1997",
    startDate: "10/23/2022",
    departement: "Sales",
    street: "25 rue du chemin bleu",
    city: "Indianapolis",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/2001",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    birthDate: "12/31/1997",
    startDate: "10/23/2022",
    departement: "Sales",
    street: "25 rue du chemin bleu",
    city: "Indianapolis",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/2001",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    birthDate: "12/31/1997",
    startDate: "10/23/2022",
    departement: "Sales",
    street: "25 rue du chemin bleu",
    city: "Indianapolis",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/2001",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    birthDate: "12/31/1997",
    startDate: "10/23/2022",
    departement: "Sales",
    street: "25 rue du chemin bleu",
    city: "Indianapolis",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/2001",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    birthDate: "12/31/1997",
    startDate: "10/23/2022",
    departement: "Sales",
    street: "25 rue du chemin bleu",
    city: "Indianapolis",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/2001",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    birthDate: "12/31/1997",
    startDate: "10/23/2022",
    departement: "Sales",
    street: "25 rue du chemin bleu",
    city: "Indianapolis",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Molli",
    lastName: "Keeton",
    startDate: "10/23/2022",
    departement: "Sales",
    birthDate: "11/30/2001",
    street: "25 rue du chemin bleu",
    city: "Washington",
    state: "Washington",
    zipCode: "890023",
  },
  {
    firstName: "Norris",
    lastName: "Langridge",
    birthDate: "12/31/1997",
    startDate: "10/23/2022",
    departement: "Sales",
    street: "25 rue du chemin bleu",
    city: "Indianapolis",
    state: "Washington",
    zipCode: "890023",
  },
];

// (Optional) Show entries per page, default is [10, 25, 50, 100]
const showingLength = [5, 10, 15];

export default function Table() {
  return (
    <DataTable
      columns={columns}
      rows={mockedData}
      // rows={data}
      showingLength={showingLength}
    />
  );
}
