import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Education from '../sections/Education';
import About from '../sections/About';
import Certificates from '../sections/Certificates';
import CodingProfiles from '../sections/CodingProfiles';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <CodingProfiles />
            <Certificates />
            <Contact />
        </main>
    );
};

export default Home;