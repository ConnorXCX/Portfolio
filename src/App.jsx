import { NavBar, Hero, Experience, Contact, Footer } from "./components";
import "./App.css";

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Hero />
      <Experience />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default App;
