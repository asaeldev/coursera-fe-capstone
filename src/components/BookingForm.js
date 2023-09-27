import React, { useState } from "react";

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
      <h1>Book Now</h1>
      <form
        onSubmit={submitForm}
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleResDate} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " onChange={handleResTime}>
          {availableTimes !== undefined &&
            availableTimes.map((time) => <option key={time}>{time}</option>)}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={handleGuests}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handleOccasion}>
          <option key="Birthday">Birthday</option>
          <option key="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
