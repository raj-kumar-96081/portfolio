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
                            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="footer-social-link">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="footer-social-link">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:hello@rajkumar.dev" className="footer-social-link">
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



// import { Container, Row, Col } from 'react-bootstrap';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//     // Dynamically grab the current year so you never have to manually update it
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="bg-dark text-white py-4 mt-auto border-top border-secondary">
//             <Container>
//                 <Row className="align-items-center">

//                     {/* Brand & Brief Tagline */}
//                     <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
//                         <h5 className="fw-bold text-info mb-1">Rajkumar</h5>
//                         <p className="text-light small mb-0">
//                             Building robust web solutions & scalable logic.
//                         </p>
//                     </Col>

//                     {/* Social / Professional Links */}
//                     <Col md={4} className="text-center mb-3 mb-md-0">
//                         <div className="d-flex justify-content-center gap-4">
//                             <a
//                                 href="https://github.com/yourusername"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-white social-icon"
//                                 aria-label="GitHub"
//                             >
//                                 <FaGithub size={22} />
//                             </a>
//                             <a
//                                 href="https://linkedin.com/in/yourusername"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-white social-icon"
//                                 aria-label="LinkedIn"
//                             >
//                                 <FaLinkedin size={22} />
//                             </a>
//                             <a
//                                 href="https://leetcode.com/yourusername"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-white text-decoration-none fw-bold social-icon"
//                                 aria-label="Competitive Programming Profile"
//                                 title="LeetCode / Codeforces"
//                             >
//                                 <span className="fs-5">{'</>'}</span>
//                             </a>
//                         </div>
//                     </Col>

//                     {/* Copyright & Tech Stack Nod */}
//                     <Col md={4} className="text-center text-md-end">
//                         <p className="text-light small mb-0">
//                             &copy; {currentYear} All Rights Reserved.
//                         </p>
//                         <p className="text-light small mb-0 opacity-75">
//                             Built with React & Bootstrap.
//                         </p>
//                     </Col>

//                 </Row>
//             </Container>
//         </footer>
//     );
// };

// export default Footer;