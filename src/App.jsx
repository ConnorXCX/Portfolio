import {
  Canvas,
  NavBar,
  Hero,
  Skills,
  Projects,
  Books,
  Experience,
  Contact,
  Footer,
  Certifications,
} from "./components";

const App = () => (
  <div>
    <Canvas />
    <NavBar />
    <div className="max-w-[1300px] relative mx-auto my-0 xl:px-6 xl:py-0">
      <Hero />

      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Certifications />
      {/* <Books /> */}
      <Contact />
    </div>
    <Footer />
  </div>
);

export default App;
