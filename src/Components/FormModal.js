import React from "react";

// fonction d'affichage de la modale
export function displayModal() {
  const modal = document.querySelector("#confirmation");
  modal.style.display = "block";
}
// fonction de cache de la modale
export function hideModal() {
  const modal = document.querySelector("#confirmation");
  modal.style.display = "none";
}

// Composant contenant la modal
export function FormModal() {
  return (
    <div
      id="confirmation"
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "115%",
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
          zIndex: 2,
          position: "fixed",
          borderRadius: 20,
          padding: "5px 9px",
          marginTop: 490,
          marginLeft: "65%",
          backgroundColor: "black",
          color: "white",
          fontWeight: 900,
          "@media screen and (maxWidth: 1440px)": {
            marginLeft: "73.5%",
          },
        }}
      >
        X
      </p>

      <p
        style={{
          position: "fixed",
          maxWidth: 500,
          width: "90%",
          background: "white",
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 30,
          paddingRigth: 30,
          borderRadius: 8,
          textAlign: "left",
          marginTop: 500,
          marginLeft: "38%",
        }}
      >
        Employee Created!
      </p>
    </div>
  );
}
