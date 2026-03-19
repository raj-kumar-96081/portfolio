import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    // Dynamically grab the current year so you never have to manually update it
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white py-4 mt-auto border-top border-secondary">
            <Container>
                <Row className="align-items-center">

                    {/* Brand & Brief Tagline */}
                    <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
                        <h5 className="fw-bold text-info mb-1">Rajkumar</h5>
                        <p className="text-muted small mb-0">
                            Building robust web solutions & scalable logic.
                        </p>
                    </Col>

                    {/* Social / Professional Links */}
                    <Col md={4} className="text-center mb-3 mb-md-0">
                        <div className="d-flex justify-content-center gap-4">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white social-icon"
                                aria-label="GitHub"
                            >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white social-icon"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={22} />
                            </a>
                            <a
                                href="https://leetcode.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-decoration-none fw-bold social-icon"
                                aria-label="Competitive Programming Profile"
                                title="LeetCode / Codeforces"
                            >
                                <span className="fs-5">{'</>'}</span>
                            </a>
                        </div>
                    </Col>

                    {/* Copyright & Tech Stack Nod */}
                    <Col md={4} className="text-center text-md-end">
                        <p className="text-muted small mb-0">
                            &copy; {currentYear} All Rights Reserved.
                        </p>
                        <p className="text-muted small mb-0 opacity-75">
                            Built with React & Bootstrap.
                        </p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;