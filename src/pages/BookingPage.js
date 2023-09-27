import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import { fetchAPI, submitAPI } from "../api/FakeApi";

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
  if (action.type === "UPDATE_TIMES") {
    state = action.payload;
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
  const navigate = useNavigate();

  useEffect(() => {
    fetchAPI("9/27/2023").then((response) => {
      console.log(response);
      initializeTimes(response);
    });
  }, []);

  const updateTimes = async (date) => {
    const data = await fetchAPI(date);
    dispatch({
      type: "UPDATE_TIMES",
      payload: data,
    });
  };

  const initializeTimes = (availableTimes) => {
    dispatch({
      type: "UPDATE_TIMES",
      payload: availableTimes,
    });
  };

  const handleResDate = async (event) => {
    await updateTimes(event.target.value);
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

  const submitForm = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("date", resDate);
    data.append("time", resTime);
    data.append("numberOfGuests", guests);
    data.append("occasion", occasion);

    console.log(data);

    const response = await submitAPI(data);
    if (response.success) {
      navigate("/confirmed-booking");
    }
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
export { AVAILABLE_TIMES };
