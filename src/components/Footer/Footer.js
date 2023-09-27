import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <img
        src={Logo}
        alt="Little Lemon Logo"
        style={{
          width: "195px",
          height: "53px",
        }}
      />

      <div>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>

      <div>
        <h3>Contact</h3>
        <p>4180 Pringle Drive, Chicago, Illinois, 60606</p>
        <p>312-409-7314</p>
        <p>contact@littlelemon.com</p>
      </div>

      <div>
        <h3>Social Media</h3>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;
