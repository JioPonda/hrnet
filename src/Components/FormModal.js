import React from "react";

export function displayModal() {
  const modal = document.querySelector("#confirmation");
  modal.style.display = "block";
}

export function hideModal() {
  const modal = document.querySelector("#confirmation");
  modal.style.display = "none";
}

export function FormModal() {
  return (
    <div
      id="confirmation"
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "110%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        display: "none",
        margin: 0,
      }}
    >
      <p
        onClick={hideModal}
        className="close-modal"
        style={{
          position: "absolute",
          bordeRadius: 50,
          paddingTop: 5,
          paddingBottom: 10,
          marginTop: "49vh",
          marginLeft: "63vw",
          backgroundColor: "black",
          color: "white",
          fontWeight: 900,
        }}
      >
        X
      </p>

      <p
        style={{
          position: "relative",
          maxWidth: 500,
          boxSizing: "border - box",
          width: "90%",
          background: "white",
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 30,
          paddingRigth: 30,
          borderRadius: 8,
          textAlign: "left",
          marginTop: "50vh",
          marginLeft: "38vh",
        }}
      >
        Employee Created!
      </p>
    </div>
  );
}
