import {
  NavBar,
  Hero,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from "./components";
import "./App.css";

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default App;
