import { NavBar, Hero, Experience } from "./components";
import "./App.css";

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Hero />
      <Experience />
    </div>
  </div>
);

export default App;
