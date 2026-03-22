import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';

const Skills = () => {
    return (
        <section id="skills" className="py-5 skills-section-dark overflow-hidden">
            <Container className="py-5">

                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bolder text-uppercase skills-title-accent mb-3">
                        Technical Skills
                    </h2>
                    <div className="skills-title-underline mb-4"></div>
                </div>

                {/* The Grid of Skill Cards */}
                <Row className="g-4 justify-content-center">
                    {skillsData.map((skill, index) => {
                        // 🚀 FIX 1: React requires dynamic component references to be Capitalized
                        const IconComponent = skill.icon;

                        return (
                            <Col
                                key={index}
                                xs={6} sm={4} md={3} lg={2} // Grid configuration
                                as={motion.div}

                                // --- Scroll Arrival/Departure Animation ---
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                // once: false ensures it animates every time you scroll past it
                                viewport={{ once: false, amount: 0.1 }}
                                // (index % 6) ensures the stagger resets per row on desktop
                                transition={{ duration: 0.4, delay: (index % 6) * 0.1 }}

                                // --- Hover Interaction ---
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 300, damping: 15 }
                                }}
                                style={{ zIndex: 1 }}
                            >
                                {/* Clean Dark Skill Card */}
                                <div className="h-100 skill-card text-center shadow-sm p-4 d-flex flex-column align-items-center justify-content-center border border-secondary hover-border-cyan">

                                    {/* Official Icon with dynamic neon drop-shadow */}
                                    <div
                                        className="icon-container-glow mb-3"
                                        style={{ filter: `drop-shadow(0 0 12px ${skill.glowColor})` }}
                                    >
                                        <IconComponent />
                                    </div>

                                    {/* 🚀 FIX 2: Replaced Card.Text with standard <p> tag to prevent crash */}
                                    <p className="text-light fw-medium small mb-0 fs-6">
                                        {skill.name}
                                    </p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;


