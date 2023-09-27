import React from "react";
import styles from "./Button.module.css";

function Button({ label, children }) {
  return (
    <button className={`${styles.button} ${styles.primary}`}>{children}</button>
  );
}

export default Button;
