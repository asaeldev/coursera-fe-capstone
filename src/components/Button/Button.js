import React from "react";
import styles from "./Button.module.css";

function Button({ children, type, ariaLabel }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles.primary}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
