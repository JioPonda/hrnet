import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import EmployerListe from "./Pages/EmployerListe";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Page par default */}
          <Route index element={<Home />} />
          {/* Routage des pages */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Employer-Liste" element={<EmployerListe />} />
        </Route>
      </Routes>
    </>
  );
}
