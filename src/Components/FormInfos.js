import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormInfos() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" />

      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" />

      <p>Date of Birth</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      <p>Start Date</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </>
  );
}
