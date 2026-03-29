import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-dark py-4">
            <Container>
                <Row className="align-items-center flex-column flex-md-row gap-3 gap-md-0">

                    {/* Copyright Info */}
                    <Col md={4} className="text-center text-md-start">
                        <p className="text-light mb-0 small">
                            &copy; {currentYear} Rajkumar. All rights reserved.
                        </p>
                    </Col>

                    {/* Built With Sign-off */}
                    <Col md={4} className="text-center">
                        <p className="text-light mb-0 small d-flex align-items-center justify-content-center gap-1">
                            Built with <FaHeart className="text-danger mx-1" /> using MERN & React-Bootstrap
                        </p>
                    </Col>

                    {/* Glowing Social Links */}
                    <Col md={4} className="text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-4">
                            <a href="https://github.com/raj-kumar-96081/" target="_blank" rel="noreferrer" className="footer-social-link">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/raj-kumar-gupta-39c/" target="_blank" rel="noreferrer" className="footer-social-link">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:rl7031177@gmail.com" className="footer-social-link">
                                <FaEnvelope />
                            </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;



