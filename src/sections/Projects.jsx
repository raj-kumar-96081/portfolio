import { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, ButtonGroup } from 'react-bootstrap';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // Importing AnimatePresence and motion
import { projects } from '../data/portfolioData';
import { Link } from 'react-router-dom';


const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('Major Projects');
    const categories = ['Major Projects', 'Minor Projects'];

    const filteredProjects = projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-5 projects-section-dark min-vh-100">
            <Container className="py-5">

                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bolder text-uppercase project-title-accent mb-3">Projects</h2>
                    <div className="title-underline mb-4"></div>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`filter-btn-custom ${activeFilter === category ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <Row className="g-5 justify-content-center">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => ( // Added 'index' for staggered delay
                            <Col
                                key={project.id}
                                lg={6}
                                md={12}
                                as={motion.div}

                                // --- 🚀 KEY UPDATES FOR SCROLL ANIMATION ---

                                // 1. Setup the Filtering (Exit/Layout) - Keep this
                                layout
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}

                                // 2. Setup standard State (Start completely invisible and lower down)
                                initial={{ opacity: 0, y: 100 }}

                                // 3. Setup Scroll 'Arrival' Animation
                                // This replaces the old 'animate' prop.
                                whileInView={{ opacity: 1, y: 0 }}

                                // 4. Configure how the Scroll triggers
                                viewport={{
                                    once: false,       // 🚀 IMPORTANT: Continuous triggering (Up/Down)
                                    amount: 0.2,       // Trigger when 20% of the card is in view
                                    margin: "-50px"    // Adds a little padding so it doesn't trigger *exactly* at the edge
                                }}

                                // 5. Refined Transition (Adding staggered delay based on index)
                                transition={{
                                    type: "spring",       // Springs look better for scroll animations
                                    stiffness: 70,
                                    damping: 15,
                                    delay: index * 0.15,  // Staggers the load-in (0.15s, 0.3s, etc.)
                                    opacity: { duration: 0.5 } // Keep opacity transition smooth
                                }}

                            // --- 🚀 END KEY UPDATES ---
                            >
                                <Card className="h-100 dark-project-card shadow-lg text-light pb-3">
                                    <div className="overflow-hidden"> {/* Added wrapper to prevent image overflow on hover */}
                                        <Card.Img variant="top" src={project.image} className="card-img-top-custom" />
                                    </div>

                                    <Card.Body className="p-4 d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <Card.Title className="fw-bold fs-3 text-cyan mb-0 pe-3">
                                                {project.title}
                                            </Card.Title>
                                            <div className="text-muted d-flex align-items-center text-nowrap" style={{ fontSize: '0.85rem' }}>
                                                <FaCalendarAlt className="me-2" />
                                                {project.date}
                                            </div>
                                        </div>

                                        <Card.Text className="text-light opacity-75 mb-4" style={{ fontSize: '0.95rem' }}>
                                            {project.description}
                                        </Card.Text>

                                        <div className="mb-4">
                                            <h5 className="text-cyan fw-semibold mb-3">Key Features:</h5>
                                            <ul className="list-unstyled mb-0">
                                                {project.keyFeatures.map((feature, idx) => (
                                                    <li key={idx} className="d-flex align-items-start mb-2 text-light opacity-75" style={{ fontSize: '0.9rem' }}>
                                                        <span className="text-cyan me-2 mt-1" style={{ fontSize: '0.7rem' }}>➔</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-auto">
                                            <h5 className="text-cyan fw-semibold mb-3">Technologies Used:</h5>
                                            <div className="d-flex flex-wrap gap-2">
                                                {project.technologies.map((tech, index) => (
                                                    <Badge bg="transparent" className="tech-badge-dark" key={index}>
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}

                                        <div className="mt-4 d-flex flex-column gap-2 px-3">

                                            <div className="d-flex gap-2 m-2 align-items-center">
                                                <Button variant="dark" className="flex-fill rounded-pill " href={project.github} target="_blank">
                                                    <FaGithub className="m-2 " /> GitHub
                                                </Button>
                                                <Button variant="outline-secondary" className="flex-fill rounded-pill " href={project.liveUrl} target="_blank">
                                                    <FaExternalLinkAlt className="m-2" /> Live Demo
                                                </Button>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </AnimatePresence>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;

