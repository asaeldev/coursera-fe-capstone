import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "./BookingForm/BookingForm";
import Footer from "./Footer/Footer";

const AVAILABLE_TIMES = [
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const reducer = (state, action) => {
  if (action.type === "DATE_CHANGE") {
    console.log(action);
  }

  return state;
};

function BookingPage() {
  // const [availableTimes, setAvailableTimes] = useState(AVAILABLE_TIMES);
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [state, dispatch] = useReducer(reducer, AVAILABLE_TIMES);

  useEffect(() => {
    initializeTimes();
  }, []);

  const updateTimes = (date) => {
    //fetchAPI(date).then((response) => console.log(response));
    return AVAILABLE_TIMES;
  };

  const initializeTimes = () => {
    dispatch({
      type: "DATE_CHANGE",
      payload: AVAILABLE_TIMES,
    });
  };

  const handleResDate = (event) => {
    dispatch({
      type: "DATE_CHANGE",
      payload: updateTimes(event.target.value),
    });
    setResDate(event.target.value);
  };

  const handleResTime = (event) => {
    setResTime(event.target.value);
  };

  const handleGuests = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasion = (event) => {
    setOccasion(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Hello");
  };

  return (
    <>
      <div
        style={{
          padding: "2rem 2rem",
        }}
      >
        <BookingForm
          handleResDate={handleResDate}
          handleResTime={handleResTime}
          handleGuests={handleGuests}
          handleOccasion={handleOccasion}
          availableTimes={state}
          submitForm={submitForm}
        />
      </div>
      <Footer />
    </>
  );
}

export default BookingPage;
