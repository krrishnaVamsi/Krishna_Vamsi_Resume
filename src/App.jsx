import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import WorkExperience from "./sections/WorkExperience/WorkExperience";

function App() {
  return (
    <>
      <Hero></Hero>
      <WorkExperience />
      <Projects></Projects>
      <Skills> </Skills>
      <Contact></Contact>
      <Footer />
    </>
  );
}

export default App;
