import "./App.css";
import About from "./components/about/About";
import Events from "./components/events/Events";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Events />
      <About />
    </>
  );
}

export default App;
