import React from "react";
import Table from "rc-table";
import { dataTable } from "./HomeContent";

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
