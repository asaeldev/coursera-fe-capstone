import React from "react";
import styles from "./Input.module.css";

function Input({ id, type, placeholder, min, max, handleOnChange }) {
  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        min={min}
        max={max}
        type={type}
        onChange={handleOnChange}
      />
    </>
  );
}

export default Input;
