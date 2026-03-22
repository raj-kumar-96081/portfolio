import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Education from '../sections/Education';
import About from '../sections/About';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;