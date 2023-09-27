import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <BookingPage />
      <Footer />
    </>
  );
}

export default App;
