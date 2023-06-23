import "./App.css";
import About from "./components/about/About";
import Brands from "./components/brands/Brands";
import Contact from "./components/contact/Contact";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Shows from "./components/shows/Shows";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Events />
      <About />
      <Shows />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
