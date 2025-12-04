import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import WorkExperience from "./components/sections/experience";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WorkExperience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
