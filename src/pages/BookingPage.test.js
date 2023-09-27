import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

test("Check the correct title is in the Booking Page.", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
