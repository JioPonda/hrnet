import React from "react";
import { FormDepartement } from "./FormDepartement";
import FormFieldset from "./FormFieldset";
import FormInfos from "./FormInfos";

export function HomeForm() {
  return (
    <form action="#" id="create-employee">
      <FormInfos />
      <FormFieldset />
      <FormDepartement />
    </form>
  );
}
