import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { codingProfilesData } from '../data/codingProfilesData';

const CodingProfiles = () => {
    return (
        <section id="coding" className="py-5 coding-section-dark overflow-hidden">
            <Container className="py-5">

                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bolder text-uppercase skills-title-accent mb-3">
                        Coding Profiles
                    </h2>
                    <div className="skills-title-underline mb-4"></div>
                    <p className="text-light lead" style={{ fontSize: '1.05rem' }}>
                        My competitive programming journey and algorithmic problem-solving stats.
                    </p>
                </div>

                <Row className="justify-content-center g-4 mt-3">
                    {codingProfilesData.map((profile, index) => {
                        const IconComponent = profile.icon;

                        return (
                            <Col
                                key={profile.id}
                                lg={5}
                                md={6}
                                as={motion.div}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="h-100 coding-card-dark d-flex flex-column">

                                    {/* Header: Icon, Platform Name, and Link */}
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="fs-1"
                                                style={{ color: '#e5e7eb', filter: `drop-shadow(0 0 10px ${profile.glowColor})` }}
                                            >
                                                <IconComponent />
                                            </div>
                                            <div>
                                                <h4 className="fw-bold text-light mb-0">{profile.platform}</h4>
                                                <p className="text-light small mb-0">{profile.username}</p>
                                            </div>
                                        </div>

                                        <a
                                            href={profile.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-cyan p-2 rounded-circle hover-bg-cyan"
                                            style={{ background: 'rgba(34, 211, 238, 0.1)' }}
                                        >
                                            <FaExternalLinkAlt size={16} />
                                        </a>
                                    </div>

                                    {/* Stats Grid */}
                                    <Row className="g-3 mt-auto">
                                        {profile.stats.map((stat, i) => (
                                            <Col xs={4} key={i}>
                                                <div className="stat-box-dark h-100">
                                                    <div className="stat-value">{stat.value}</div>
                                                    <div className="stat-label">{stat.label}</div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>

                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default CodingProfiles;