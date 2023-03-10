import React from "react";
import Logo from "../Assets/HrnetLogo.png";

export default function NavBar() {
  return (
    <nav className="title">
      <img className="logo" src={Logo} alt="Logo" />
      <h1>HRnet</h1>
    </nav>
  );
}
