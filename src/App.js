import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import About from "./About/About";
import "./App.css";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Banner />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
