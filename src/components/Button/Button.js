import React from "react";
import styles from "./Button.module.css";

function Button({ children, type }) {
  return (
    <button type={type} className={`${styles.button} ${styles.primary}`}>
      {children}
    </button>
  );
}

export default Button;
