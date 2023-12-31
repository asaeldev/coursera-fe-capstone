import React from "react";
import styles from "./Card.module.css";
import { FaMotorcycle } from "react-icons/fa6";

function Card({ title, subtitle, coverImage }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      className={styles.card}
    >
      <img src={coverImage} alt="week special image" />
      <div className={styles.body}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <div
          className={styles.footer}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <a href="#">Order a delivery</a>
          &nbsp;
          <FaMotorcycle />
        </div>
      </div>
    </div>
  );
}

export default Card;
