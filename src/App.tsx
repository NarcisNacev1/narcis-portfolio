import Navbar from "./components/Navbar.tsx";
import Intro from "./sections/Intro.tsx";
import AboutMe from "./sections/AboutMe.tsx"
import "./styles/global.css";

function App() {

    return (
    <>
      <Navbar />
        <Intro/>
        <AboutMe/>
    </>
  )
}

export default App
