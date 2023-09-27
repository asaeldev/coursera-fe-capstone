import "./App.css";
import Logo from "./assets/logo.png";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./components/Nav/Nav.module.css";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  return (
    <Router>
      <nav className={styles.navigation}>
        <img src={Logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
