import React from "react";
import { Table } from "react-data-list-table-component";
import { data } from "./HomeContent";
// import { mockedData } from "../data/MockedData";

//Const servant a afficher un message si nos données sont vides
const emptyData = [
  {
    firstName: "",
    lastName: "",
    startDate: "",
    departement: "NO DATA WAS ENTERED",
    birthDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  },
];

//Composant comprenant le tableau des employées
export default function DataTable() {
  if (data.length === 0) {
    const emptytitle = Object.keys(emptyData[0]);
    return (
      <Table
        dataTable={emptyData}
        dataTitle={emptytitle}
        tableTitle={""}
        rowsPerTable={10}
        range={3}
        selectEntries
        backgroundThemePrimary={"#EAEAEA"}
        contentThemePrimary={"#000"}
        backgroundThemeSecondary={"#000"}
        contentThemeSecondary={"#EAEAEA"}
      />
    );
  } else {
    // const mockedTitle = Object.keys(mockedData[0]);
    const title = Object.keys(data[0]);
    return (
      <Table
        dataTable={data}
        dataTitle={title}
        tableTitle={""}
        rowsPerTable={10}
        range={3}
        selectEntries
        backgroundThemePrimary={"#EAEAEA"}
        contentThemePrimary={"#000"}
        backgroundThemeSecondary={"#000"}
        contentThemeSecondary={"#EAEAEA"}
      />
    );
  }
}
