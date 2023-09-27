import React from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import RestaurantFood from "../../assets/restauranfood.png";

function Header() {
  return (
    <header className={styles.header}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Button>Reserve a table</Button>
        </div>

        <div>
          <img src={RestaurantFood} alt="header image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
