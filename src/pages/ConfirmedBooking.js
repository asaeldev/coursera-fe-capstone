import React from "react";
import Footer from "../components/Footer/Footer";

function ConfirmedBooking() {
  return (
    <>
      <div
        style={{
          padding: "4rem 2rem",
        }}
      >
        <h1>Your booking has been confirmed!</h1>
        <h2>
          Here is your reservation number:{" "}
          <b>#{Math.floor(Math.random() * (5000 - 1000) + 1000)}</b>
        </h2>
      </div>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;
