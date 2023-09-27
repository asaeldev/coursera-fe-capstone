import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./BookingPage";

const AVAILABLE_TIMES = [
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

test("Validate initializeTimes function", () => {
  render(<BookingPage />);

  expect(headingElement).toBeInTheDocument();
});
