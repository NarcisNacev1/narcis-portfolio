import Navbar from "./components/Navbar.tsx";
import Intro from "./sections/Intro.tsx";
import AboutMe from "./sections/AboutMe.tsx"
import "./styles/global.css";
import Resume from "./sections/Resume.tsx";

function App() {

    return (
    <>
      <Navbar />
        <Intro/>
        <AboutMe/>
        <Resume/>
    </>
  )
}

export default App
