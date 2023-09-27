import React from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import RestaurantFood from "../../assets/restauranfood.png";
import { Link } from "react-router-dom";

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

          <Link to="/booking">
            <Button ariaLabel="On Click">Reserve a table</Button>
          </Link>
        </div>

        <div>
          <img src={RestaurantFood} alt="header image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
