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
    {/* TODO: Fix margins / padding for NavbBar so anchor tags navigate to top of each section correctly. */}
    <NavBar />
    <div className="container">
      <Hero />
      {/* <Skills />
      <Projects /> */}
      <Experience />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default App;
