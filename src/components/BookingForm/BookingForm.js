import React, { useState } from "react";
import Input from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import Button from "../Button/Button";
import { FaCalendarAlt } from "react-icons/fa";
import styles from "./BookingForm.module.css";

function BookingForm({
  handleResDate,
  handleResTime,
  handleGuests,
  handleOccasion,
  submitForm,
  availableTimes,
}) {
  return (
    <div>
      <h1>
        Book Now <FaCalendarAlt />
      </h1>
      <h3>
        Kindly review the following instructions to complete your restaurant
        booking form accurately. Your attention to detail will help us provide
        you with the best dining experience.
      </h3>
      <form
        onSubmit={submitForm}
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <Input id="res-date" type="date" onChange={handleResDate} required />

        <label htmlFor="res-time">Choose time</label>
        <SelectInput id="res-time" onChange={handleResTime} required>
          {availableTimes !== undefined &&
            availableTimes.map((time) => <option key={time}>{time}</option>)}
        </SelectInput>

        <label htmlFor="guests">Number of guests</label>
        <Input
          id="guests"
          type="number"
          placeholder="1"
          min="1"
          max="5"
          onChange={handleGuests}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handleOccasion}>
          <option key="Birthday">Birthday</option>
          <option key="Anniversary">Anniversary</option>
        </select>

        <Button type="submit" ariaLabel="On Click">
          Make Your reservation
        </Button>
      </form>
    </div>
  );
}

export default BookingForm;
