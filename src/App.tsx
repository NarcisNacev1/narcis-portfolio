import Navbar from './components/Navbar.tsx';
import Intro from './sections/Intro.tsx';
import AboutMe from './sections/AboutMe.tsx';
import './styles/global.css';
import Resume from './sections/Resume.tsx';
import Skills from './sections/Skills.tsx';
import Projects from './sections/Projects.tsx';
import Footer from './components/Footer.tsx';
import VantaBackground from './styles/background/VantaBackground.tsx';
import AnimatedCursor from 'react-animated-cursor';

function App () {

    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                color="255, 0, 150"
                outerAlpha={0.4}
                innerScale={0.7}
                outerScale={2}
            />
            <VantaBackground />
            <Navbar />
            <Intro/>
            <AboutMe/>
            <Resume/>
            <Skills/>
            <Projects/>
            <Footer/>
        </>
    );
}

export default App;
