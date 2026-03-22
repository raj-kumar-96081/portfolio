import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarCheck } from 'react-icons/fa';
import { certificatesData } from '../data/certificatesData';

const Certificates = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', 'Technical', 'Non-Technical'];

    const filteredCerts = activeFilter === 'All'
        ? certificatesData
        : certificatesData.filter(cert => cert.category === activeFilter);

    return (
        <section id="certificates" className="py-5 cert-section-dark overflow-hidden min-vh-100">
            <Container className="py-5">

                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bolder text-uppercase skills-title-accent mb-3">
                        Certifications
                    </h2>
                    <div className="skills-title-underline mb-4"></div>

                    {/* Interactive Filter Buttons (Reusing your existing custom classes) */}
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

                {/* Certificates Grid */}
                <Row className="g-4 justify-content-center">
                    <AnimatePresence mode="popLayout">
                        {filteredCerts.map((cert, index) => {
                            const SkillIcon = cert.skillIcon;
                            const IssuerIcon = cert.issuerIcon;

                            return (
                                <Col
                                    key={cert.id}
                                    lg={4}
                                    md={6}
                                    as={motion.div}
                                    layout
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="h-100 p-4 cert-card-dark d-flex flex-column">

                                        <div className="d-flex justify-content-between align-items-start">
                                            <div className="cert-icon-glow">
                                                <SkillIcon />
                                            </div>
                                            <div className="text-muted small d-flex align-items-center gap-1">
                                                <FaCalendarCheck className="text-cyan" /> {cert.date}
                                            </div>
                                        </div>

                                        <h4 className="fw-bold text-light mb-2">{cert.title}</h4>

                                        <div className="d-flex align-items-center gap-2 text-light mb-4 mt-2">
                                            <IssuerIcon size={18} />
                                            <span className="fw-medium">{cert.issuer}</span>
                                        </div>

                                        {/* View Credential Button positioned at the bottom */}
                                        <div className="mt-auto pt-3 border-top border-secondary">
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none text-cyan fw-semibold d-flex align-items-center gap-2 hover-text-white"
                                                style={{ transition: 'color 0.3s ease' }}
                                            >
                                                Verify Credential <FaExternalLinkAlt size={12} />
                                            </a>
                                        </div>

                                    </div>
                                </Col>
                            );
                        })}
                    </AnimatePresence>
                </Row>

            </Container>
        </section>
    );
};

export default Certificates;