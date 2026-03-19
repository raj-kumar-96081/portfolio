import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const ProjectDetails = () => {
  // Grab the dynamic ID from the URL (e.g., /project/ride-share)
  const { id } = useParams();
  
  // Find the matching project in our data array
  const project = projects.find((p) => p.id === id);

  // Fallback UI if a user navigates to a broken link
  if (!project) {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center mt-5">
        <h1 className="display-4 fw-bold text-dark">404</h1>
        <h2 className="mb-4">Project Not Found</h2>
        <Link to="/" className="btn btn-info px-4 py-2 fw-semibold rounded-pill">
          <FaArrowLeft className="me-2" /> Return Home
        </Link>
      </Container>
    );
  }

  return (
    <main className="py-5 mt-5 bg-light min-vh-100">
      <Container className="pt-4">
        {/* Breadcrumb / Back Navigation */}
        <Link to="/" className="text-decoration-none text-secondary d-inline-flex align-items-center mb-4 hover-info">
          <FaArrowLeft className="me-2" /> Back to Portfolio
        </Link>

        <Row className="justify-content-center">
          <Col lg={10}>
            {/* Project Header */}
            <div className="bg-white p-5 rounded shadow-sm border-0 mb-4">
              <Badge bg="info" className="mb-3 fs-6 px-3 py-2 text-dark rounded-pill">
                {project.category}
              </Badge>
              <h1 className="fw-bolder display-5 mb-3">{project.title}</h1>
              <p className="lead text-muted mb-4">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="mb-5">
                <h5 className="fw-bold mb-3">Technologies Used</h5>
                <div className="d-flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge bg="dark" className="fs-6 px-3 py-2 fw-normal" key={index}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 border-top pt-4">
                <Button 
                  variant="dark" 
                  size="lg" 
                  href={project.github} 
                  target="_blank"
                  className="d-flex align-items-center px-4"
                >
                  <FaGithub className="me-2" /> View Source
                </Button>
                
                {/* Only render Live Demo button if a URL exists */}
                {project.liveUrl !== '#' && (
                  <Button 
                    variant="outline-info" 
                    size="lg" 
                    href={project.liveUrl} 
                    target="_blank"
                    className="d-flex align-items-center px-4"
                  >
                    <FaExternalLinkAlt className="me-2" /> Live Demo
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProjectDetails;