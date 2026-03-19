import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Simulate form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here is where you would hook up EmailJS or a backend endpoint
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after a few seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 4000);
    };

    return (
        <section id="contact" className="py-5 bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Get In Touch</h2>
                    <p className="text-muted lead">Open for software engineering internships and collaborative projects.</p>
                </div>

                <Row className="justify-content-center">
                    {/* Contact Information Column */}
                    <Col lg={4} md={5} className="mb-4 mb-md-0">
                        <motion.div
                            className="h-100 p-4 bg-light rounded shadow-sm border-0"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4 className="fw-bold mb-4">Contact Details</h4>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-info text-dark rounded-circle p-3 me-3 d-flex align-items-center justify-content-center">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="mb-0 text-muted small">Email</p>
                                    <a href="mailto:your.email@example.com" className="text-dark fw-semibold text-decoration-none">
                                        hello@rajkumar.dev
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="bg-info text-dark rounded-circle p-3 me-3 d-flex align-items-center justify-content-center">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="mb-0 text-muted small">Location</p>
                                    <p className="text-dark fw-semibold mb-0">India</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>

                    {/* The Form Column */}
                    <Col lg={6} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {isSubmitted && (
                                <Alert variant="success" className="mb-4">
                                    Message sent successfully! I will get back to you soon.
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit} className="p-4 bg-white shadow-sm border rounded">
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Label className="fw-semibold text-muted small">Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="bg-light border-0 py-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label className="fw-semibold text-muted small">Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="bg-light border-0 py-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label className="fw-semibold text-muted small">Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we work together?"
                                        required
                                        className="bg-light border-0"
                                    />
                                </Form.Group>

                                <Button variant="dark" type="submit" className="w-100 py-2 fw-bold d-flex align-items-center justify-content-center gap-2">
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