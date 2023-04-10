import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Composant contenant la partie des information du formulaire
export default function FormInfos() {
  const [startBirthDate, setStartBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <p>First Name</p>
      <input type="text" id="first-name" />

      <p>Last Name</p>
      <input type="text" id="last-name" />

      <p>Date of Birth</p>
      <DatePicker
        selected={startBirthDate}
        onChange={(date) => setStartBirthDate(date)}
        id="date-of-birth"
        dateFormat="dd/MM/yyyy"
      />

      <p>Start Date</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        id="start-date"
        dateFormat="dd/MM/yyyy"
      />
    </>
  );
}
