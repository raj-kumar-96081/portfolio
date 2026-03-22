import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { educationData } from '../data/educationData';

const Education = () => {
    return (
        <section id="education" className="py-5 education-section-dark overflow-hidden">
            <Container className="py-5">

                {/* Section Header */}
                <div className="text-center mb-5">
                    {/* Reusing your copper title classes */}
                    <h2 className="fw-bolder text-uppercase skills-title-accent mb-3">
                        Education
                    </h2>
                    <div className="skills-title-underline mb-5"></div>
                </div>

                <Row className="justify-content-center">
                    <Col lg={8} md={10}>
                        {/* The Timeline Wrapper */}
                        <div className="education-timeline">

                            {educationData.map((item, index) => {
                                const IconComponent = item.icon;

                                return (
                                    // Framer motion wrapper for the entire timeline item
                                    <motion.div
                                        key={item.id}
                                        className="position-relative mb-5"
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                    >

                                        {/* The glowing icon on the line */}
                                        <div className="timeline-icon-container">
                                            <IconComponent />
                                        </div>

                                        {/* The Dark Card */}
                                        <div className="education-card">
                                            <h4 className="fw-bold text-light mb-2">
                                                {item.degree}
                                            </h4>
                                            <p className="text-light mb-0" style={{ fontSize: '1.05rem' }}>
                                                {item.institution}
                                            </p>
                                            <div className="score-text">
                                                {item.score}
                                            </div>
                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Education;