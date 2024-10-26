import Navbar from "./components/Navbar.tsx";
import Intro from "./sections/Intro.tsx";
import AboutMe from "./sections/AboutMe.tsx"
import "./styles/global.css";
import Resume from "./sections/Resume.tsx";
import Skills from "./sections/Skills.tsx";

function App() {

    return (
    <>
      <Navbar />
        <Intro/>
        <AboutMe/>
        <Resume/>
        <Skills/>
    </>
  )
}

export default App
