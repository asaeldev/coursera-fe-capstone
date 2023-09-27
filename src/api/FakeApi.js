/**
 * This fake API was created to replace the API that
 * the course provided but is not available anymore.
 */

import { AVAILABLE_TIMES } from "../pages/BookingPage";

// This function accepts a date as a parameter and returns an
// array of available reservation times for the provided date
const fetchAPI = (date) => {
  const times = [];
  const rand = Math.floor(Math.random() * (22 - 11) + 11);

  for (let i = 11; i < rand; i++) {
    times.push(`${i}:00`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(times);
    }, 1500);
  });
};

// This function accepts the booking form data as a parameter
// and will return true if the data was successfully submitted.
const submitAPI = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 1500);
  });
};

export { fetchAPI, submitAPI };
