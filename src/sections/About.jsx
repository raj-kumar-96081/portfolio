import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaDownload, FaUserAlt } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-5 about-section-dark overflow-hidden min-vh-100 d-flex align-items-center">
            <Container className="py-5">

                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bolder text-uppercase project-title-accent mb-3">About Me</h2>
                    <div className="title-underline mb-5"></div>
                </div>

                <Row className="align-items-center justify-content-between g-5">

                    {/* Image Column - Slides in from the left */}
                    <Col lg={5} md={12} className="text-center"
                        as={motion.div}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-image-wrapper mx-auto" style={{ maxWidth: '420px' }}>
                            <img
                                // REPLACE THIS LINK WITH YOUR ACTUAL IMAGE PATH
                                src="src\assets\InShot_20260329_202214517.jpg.jpeg"
                                alt="Rajkumar"
                                className="about-image shadow"
                            />
                        </div>
                    </Col>

                    {/* Text Column - Slides in from the right */}
                    <Col lg={6} md={12}
                        as={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="fw-bold mb-4 text-light display-6">
                            Hi, I'm <span className="about-highlight">Rajkumar</span>
                        </h3>

                        <p className="text-light mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            I am a passionate <span className="text-light fw-medium">3rd-year B.Tech Computer Science and Engineering</span> student at Lovely Professional University. My journey in tech is driven by a deep fascination with how complex logic can be transformed into seamless digital experiences.
                        </p>

                        <p className="text-light mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            I specialize in full-stack development using the <span className="text-light fw-medium">MERN stack</span>, building everything from dynamic ride-sharing platforms to secure financial expense trackers. Beyond web development, I am heavily invested in <span className="text-light fw-medium">Machine Learning</span> and solving complex algorithmic puzzles through <span className="text-light fw-medium">Competitive Programming</span> in C++.
                        </p>

                        {/* <p className="text-light mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            When I'm not writing code or analyzing data models, you can find me <span className="text-light fw-medium">powerlifting</span>—applying the same discipline, consistency, and drive for incremental progress that I bring to my software engineering projects.
                        </p> */}

                        {/* Action Buttons */}
                        <div className="d-flex flex-wrap gap-3">
                            <Button
                                href="#contact"
                                className="px-4 py-2 fw-bold d-flex align-items-center rounded-pill border-0"
                                style={{ backgroundColor: '#0dcaf0', color: '#111827' }}
                            >
                                <FaUserAlt className="me-2" /> Let's Connect
                            </Button>

                            <Button
                                variant="outline-info"
                                href="/Rajkumar_Resume.pdf" // Ensure your resume is in the public folder
                                target="_blank"
                                className="px-4 py-2 fw-bold d-flex align-items-center rounded-pill"
                            >
                                <FaDownload className="me-2" /> Download Resume
                            </Button>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default About;