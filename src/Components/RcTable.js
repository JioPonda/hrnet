import React from "react";
import Table from "rc-table";

export const columnsTable = [
  {
    title: "First Name",
    dataIndex: "firstNameIndex",
    key: "firstnameKey",
    width: 150,
  },
  {
    title: "Last Name",
    dataIndex: "lastNameIndex",
    key: "lastNamKey",
    width: 150,
  },
  {
    title: "Start Date",
    dataIndex: "startDateIndex",
    key: "startDateKey",
    width: 150,
  },
  {
    title: "Departement",
    dataIndex: "departementIndex",
    key: "departementKey",
    width: 150,
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirthIndex",
    key: "dateOfBirthKey",
    width: 150,
  },
  {
    title: "Street",
    dataIndex: "streetIndex",
    key: "streetKey",
    width: 150,
  },
  {
    title: "City",
    dataIndex: "cityIndex",
    key: "cityKey",
    width: 150,
  },
  {
    title: "State",
    dataIndex: "stateIndex",
    key: "stateKey",
    width: 150,
  },
  {
    title: "Zip Code",
    dataIndex: "zipCodeIndex",
    key: "zipCodeKey",
    width: 150,
  },
];

export const dataTable = [
  {
    firstNameIndex: "Jack",
    lastNameIndex: "Bauer",
    startDateIndex: "06/11/2001",
    departementIndex: "Sales",
    dateOfBirthIndex: "18/02/1966",
    streetIndex: "Chrono Street",
    cityIndex: "Los Angeles",
    stateIndex: "California",
    zipCodeIndex: "900002",
  },
  {
    firstNameIndex: "John",
    lastNameIndex: "Wick",
    startDateIndex: "20/10/2014",
    departementIndex: "Human Ressources",
    dateOfBirthIndex: "18/02/1969",
    streetIndex: "Dog's Avenue",
    cityIndex: "New York",
    stateIndex: "New York",
    zipCodeIndex: "10010",
  },
  {
    firstNameIndex: "John",
    lastNameIndex: "Rambo",
    startDateIndex: "04/02/2008",
    departementIndex: "Engineering",
    dateOfBirthIndex: "06/07/1947",
    streetIndex: "Arrow Street",
    cityIndex: "Montgomery",
    stateIndex: "Alabama",
    zipCodeIndex: "36043",
  },
  {
    firstNameIndex: "Gary",
    lastNameIndex: "Unwin",
    startDateIndex: "18/02/2015",
    departementIndex: "Sales",
    dateOfBirthIndex: "03/06/1992",
    streetIndex: "Kingsman Street",
    cityIndex: "Boston",
    stateIndex: "Massachusetts",
    zipCodeIndex: "02108",
  },
];

export default function Rctable() {
  return (
    <Table
      className="table"
      columns={columnsTable}
      data={dataTable}
      tableLayout="auto"
    />
  );
}
