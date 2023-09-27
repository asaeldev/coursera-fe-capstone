import React from "react";
import styles from "./Testimonial.module.css";

function Testimonial({ name, rating, reviewText, picture }) {
  return (
    <div className={styles.testimonial}>
      <p>
        <b>Rating:</b> {rating}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img src={picture} alt="person picture" />
        <p className={styles.name}>{name}</p>
      </div>
      <p>
        <b>Testimonial:</b> {reviewText}
      </p>
    </div>
  );
}

export default Testimonial;
