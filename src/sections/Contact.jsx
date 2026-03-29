import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 4000);
    };

    return (
        <section id="contact" className="py-5 contact-section-dark min-vh-100 d-flex align-items-center">
            <Container className="py-5">

                {/* Section Header */}
                <div className="text-center mb-5">
                    {/* Reusing the Copper/Cyan title styles */}
                    <h2 className="fw-bolder text-uppercase skills-title-accent mb-3">Get In Touch</h2>
                    <div className="skills-title-underline mb-4"></div>
                    <p className="text-white lead" style={{ fontSize: '1.05rem' }}>
                        Open for opportunities, internships, and collaborative projects.
                    </p>
                    <div className='align-items-left'>
                        <h1 className='display-5 fw-bold text-light '>Let's Build Something</h1>
                        <span className="text-gradient-cyan font-size-lg fw-bold display-3 m-2" >Great</span> <span className='display-5 fw-bold text-light'>Together!</span>

                    </div>

                </div>

                <Row className="justify-content-center g-4">

                    {/* Contact Information Column - Slides in from the left */}
                    <Col lg={4} md={5}>
                        <motion.div
                            className="h-100 p-4 contact-card-dark d-flex flex-column"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4 className="fw-bold mb-4 text-light">Contact Details</h4>

                            <div className="d-flex align-items-center mb-4">
                                <div className="icon-box-glow me-3">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="mb-0 text-muted small">Email</p>
                                    <a href="mailto:rl7031177@gmail.com" className="text-info fw-semibold text-decoration-none">
                                        Raj Kumar Gupta
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-5">
                                <div className="icon-box-glow me-3">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="mb-0 text-muted small">Location</p>
                                    <p className="text-light fw-semibold mb-0">India</p>
                                </div>
                            </div>

                            <hr className="border-secondary mb-4" />

                            <h5 className="text-light fw-semibold mb-3">Social Profiles</h5>
                            <div className="d-flex gap-3 mt-auto">
                                <a href="https://github.com/raj-kumar-96081/" target="_blank" rel="noreferrer" className="icon-box-glow text-decoration-none">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/raj-kumar-gupta-39c/" target="_blank" rel="noreferrer" className="icon-box-glow text-decoration-none">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </motion.div>
                    </Col>

                    {/* The Form Column - Slides in from the right */}
                    <Col lg={6} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {isSubmitted && (
                                <Alert variant="info" className="mb-4 bg-info bg-opacity-10 border-info text-info">
                                    Message sent successfully! I will get back to you soon.
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit} className="p-4 p-md-5 contact-card-dark">
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group className="mb-4" controlId="formName">
                                            <Form.Label className="fw-medium text-light small mb-2">Your Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="custom-input-dark shadow-none"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group className="mb-4" controlId="formEmail">
                                            <Form.Label className="fw-medium text-light small mb-2">Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="custom-input-dark shadow-none"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-5" controlId="formMessage">
                                    <Form.Label className="fw-medium text-light small mb-2">Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we work together?"
                                        required
                                        className="custom-input-dark shadow-none"
                                    />
                                </Form.Group>

                                <Button type="submit" className="w-100 py-3 btn-cyan-gradient rounded-pill d-flex align-items-center justify-content-center gap-2">
                                    <FaPaperPlane /> Send Message
                                </Button>
                            </Form>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;


