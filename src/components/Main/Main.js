import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import SpecialsImg1 from "../../assets/specials1.png";
import SpecialsImg2 from "../../assets/specials2.png";
import SpecialsImg3 from "../../assets/specials3.png";

import Person1 from "../../assets/testimonials/sergio-de-paula.jpg";
import Person2 from "../../assets/testimonials/jonas.jpg";
import Person3 from "../../assets/testimonials/christopher.jpg";

import styles from "./Main.module.css";
import Testimonial from "../Testimonial/Testimonial";

function Main() {
  return (
    <main className={styles.main}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "2rem 2rem",
          }}
        >
          <h2>This weeks specials!</h2>
          <Button>Online Menu</Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "2rem",
          }}
        >
          <Card
            title="Greek salad"
            subtitle="$12.99"
            coverImage={SpecialsImg1}
          />
          <Card title="Bruchetta" subtitle="$5.99" coverImage={SpecialsImg2} />
          <Card
            title="Lemon Dessert"
            subtitle="$5.00"
            coverImage={SpecialsImg3}
          />
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#D9D9D9",
          paddingTop: "5rem",
          paddingBottom: "7rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          Testimonials
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Testimonial
            rating="5/5"
            name="Daniel"
            reviewText="Delicious food!"
            picture={Person1}
          />
          <Testimonial
            rating="4/5"
            name="John"
            reviewText="Great service!"
            picture={Person2}
          />
          <Testimonial
            rating="4.5/5"
            name="Sarah"
            reviewText="Amazing flavors!"
            picture={Person3}
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
