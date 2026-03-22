import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaArrowRight, FaCode } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="d-flex align-items-center vh-100 hero-section-dark">

            {/* The Ambient Background Glow */}
            <div className="hero-glow"></div>

            <Container className="position-relative z-1">
                <Row className="align-items-center justify-content-center text-center">
                    <Col lg={10} md={12}>

                        {/* Main Content Animation Wrapper */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >

                            {/* Top accent badge */}
                            <motion.div
                                className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
                                style={{ background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.2)' }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <span className="text-cyan small"><span className="fw-bold">HELLO</span> WORLD</span>
                            </motion.div>

                            <h1 className="display-2 fw-bolder mb-3 text-white tracking-tight">
                                Hi, I'm <span className="text-gradient-cyan">Rajkumar</span>.
                            </h1>

                            {/* Typewriter Effect */}
                            <div className="display-6 fw-semibold mb-4" style={{ minHeight: '60px', color: '#9ca3af' }}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            '3rd-Year B.Tech CSE Student',
                                            'MERN Stack Developer',
                                            'Competitive Programmer',
                                            'Machine Learning Enthusiast'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        delay: 50,
                                    }}
                                />
                            </div>

                            <p className="lead mb-5 px-md-5 mx-auto" style={{ maxWidth: '800px', color: '#6b7280', lineHeight: '1.8' }}>
                                I specialize in architecting scalable web applications using the MERN stack,
                                solving complex algorithmic challenges in C++, and building data-driven
                                predictive models.
                            </p>

                            {/* Call to Action Buttons */}
                            <motion.div
                                className="d-flex flex-wrap justify-content-center gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <a href="#projects" className="btn btn-cyan-gradient btn-lg px-4 py-3 rounded-pill d-flex align-items-center gap-2 text-decoration-none">
                                    <FaCode /> View My Projects
                                </a>
                                <a href="#contact" className="btn btn-glass btn-lg px-4 py-3 rounded-pill d-flex align-items-center gap-2 text-decoration-none">
                                    Get In Touch <FaArrowRight />
                                </a>
                            </motion.div>

                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;


