import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section id="home" className="d-flex align-items-center vh-100 bg-dark text-white">
            <Container>
                <Row className="align-items-center justify-content-center text-center">
                    <Col lg={9} md={10}>
                        {/* Framer Motion wrapper for load-in animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <p className="text-info fw-bold tracking-wider mb-2 text-uppercase">
                                Welcome to my portfolio
                            </p>

                            <h1 className="display-2 fw-bolder mb-3">
                                Hi, I'm <span className="text-info">Rajkumar</span>.
                            </h1>

                            {/* Typewriter Effect Container */}
                            <div className="display-6 fw-normal text-secondary mb-4" style={{ minHeight: '60px' }}>
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

                            <p className="lead mb-5 px-md-5 text-light opacity-75">
                                I specialize in architecting scalable web applications using the MERN stack,
                                solving complex algorithmic challenges in C++, and building data-driven
                                predictive models with Python.
                            </p>

                            <div className="d-flex justify-content-center gap-3">
                                <Button variant="info" size="lg" href="#projects" className="px-4 py-2 fw-semibold">
                                    View My Projects
                                </Button>
                                <Button variant="outline-light" size="lg" href="#contact" className="px-4 py-2 fw-semibold">
                                    Get In Touch
                                </Button>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;

// import { Container, Row, Col, Button } from 'react-bootstrap';

// const Hero = () => {
//     return (
//         <section
//             id="home"
//             className="d-flex align-items-center vh-100 bg-dark text-white"
//         >
//             <Container>
//                 <Row className="align-items-center justify-content-center text-center">
//                     <Col lg={9} md={10}>
//                         {/* Greeting */}
//                         <p className="text-info fw-bold tracking-wider mb-2 text-uppercase">
//                             Welcome to my portfolio
//                         </p>

//                         {/* Name */}
//                         <h1 className="display-2 fw-bolder mb-3">
//                             Hi, I'm <span className="text-info">Rajkumar</span>.
//                         </h1>

//                         {/* Academic / Professional Title */}
//                         <h2 className="display-6 fw-normal text-secondary mb-4">
//                             3rd-Year B.Tech CSE Student
//                         </h2>

//                         {/* Brief Value Proposition */}
//                         <p className="lead mb-5 px-md-5 text-light opacity-75">
//                             I specialize in architecting scalable web applications using the MERN stack,
//                             solving complex algorithmic challenges in C++, and building data-driven
//                             predictive models with Python.
//                         </p>

//                         {/* Calls to Action */}
//                         <div className="d-flex justify-content-center gap-3">
//                             <Button
//                                 variant="info"
//                                 size="lg"
//                                 href="#projects"
//                                 className="px-4 py-2 fw-semibold"
//                             >
//                                 View My Projects
//                             </Button>
//                             <Button
//                                 variant="outline-light"
//                                 size="lg"
//                                 href="#contact"
//                                 className="px-4 py-2 fw-semibold"
//                             >
//                                 Get In Touch
//                             </Button>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default Hero;