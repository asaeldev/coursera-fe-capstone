import React from "react";
import styles from "./SelectInput.module.css";

function SelectInput({ id, onChange, children }) {
  return (
    <select id={id} onChange={onChange}>
      {children}
    </select>
  );
}

export default SelectInput;
