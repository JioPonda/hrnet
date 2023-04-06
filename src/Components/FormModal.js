import React from "react";
import "../modal.css";

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
    <div id="confirmation" className="modal">
      <p onClick={hideModal} className="close-modal">
        X
      </p>

      <p className="text-modal">Employee Created!</p>
    </div>
  );
}
