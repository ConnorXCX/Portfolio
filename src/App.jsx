import {
  NavBar,
  Hero,
  Skills,
  Projects,
  Readings,
  Experience,
  Contact,
  Footer,
  Certifications,
} from "./components";
import "./App.css";

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Hero />
      <Skills />
      <Certifications />
      {/* <Projects /> */}
      {/* <Readings /> */}
      <Experience />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default App;
