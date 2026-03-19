import { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(item => item.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Projects</h2>
          
          {/* Interactive Filter Buttons */}
          <div className="mt-4">
            <ButtonGroup className="flex-wrap shadow-sm">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeFilter === category ? 'info' : 'white'}
                  className={`border-info fw-semibold ${activeFilter === category ? 'text-dark' : 'text-secondary'}`}
                  onClick={() => setActiveFilter(category)}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
        
        {/* AnimatePresence allows elements to animate out when removed from the DOM */}
        <Row className="g-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <Col 
                key={project.id} 
                lg={4} 
                md={6}
                as={motion.div}
                layout // This magic prop smoothly animates layout changes
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-100 shadow-sm border-0 hover-lift">
                  <Card.Body className="d-flex flex-column p-4">
                    <Card.Title className="fw-bold fs-4 mb-2">{project.title}</Card.Title>
                    <Card.Subtitle className="mb-3 text-info fw-semibold">
                      {project.category}
                    </Card.Subtitle>
                    <Card.Text className="flex-grow-1 text-muted">
                      {project.description.length > 100 
                        ? `${project.description.substring(0, 100)}...` 
                        : project.description}
                    </Card.Text>
                    
                    <div className="mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge bg="secondary" className="me-2 mb-2 fw-normal" key={index}>
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge bg="light" text="dark" className="border mb-2 fw-normal">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="mt-auto d-flex flex-column gap-2">
                      <Link to={`/project/${project.id}`} className="btn btn-info w-100 fw-semibold text-dark">
                        View Project Details
                      </Link>
                      <div className="d-flex gap-2 mt-1">
                        <Button variant="dark" className="flex-fill" href={project.github} target="_blank">
                          GitHub
                        </Button>
                        <Button variant="outline-secondary" className="flex-fill" href={project.liveUrl} target="_blank" disabled={project.liveUrl === '#'}>
                          Demo
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


// import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { projects } from '../data/portfolioData';

// const Projects = () => {
//     return (
//         <section id="projects" className="py-5 bg-light">
//             <Container>
//                 <div className="text-center mb-5">
//                     <h2 className="fw-bold">Featured Projects</h2>
//                     <p className="text-muted lead">A selection of my recent work and technical experiments.</p>
//                 </div>

//                 <Row className="g-4">
//                     {projects.map((project) => (
//                         <Col key={project.id} lg={4} md={6}>
//                             <Card className="h-100 shadow-sm border-0 hover-lift">
//                                 <Card.Body className="d-flex flex-column p-4">
//                                     <div className="d-flex justify-content-between align-items-start mb-2">
//                                         <Card.Title className="fw-bold fs-4">{project.title}</Card.Title>
//                                     </div>

//                                     <Card.Subtitle className="mb-3 text-info fw-semibold">
//                                         {project.category}
//                                     </Card.Subtitle>

//                                     <Card.Text className="flex-grow-1 text-muted">
//                                         {/* Truncate the description slightly for the grid view */}
//                                         {project.description.length > 100
//                                             ? `${project.description.substring(0, 100)}...`
//                                             : project.description}
//                                     </Card.Text>

//                                     {/* Tech Stack Badges */}
//                                     <div className="mb-4">
//                                         {/* Only show the first 3 tech tags to keep cards uniform */}
//                                         {project.technologies.slice(0, 3).map((tech, index) => (
//                                             <Badge bg="secondary" className="me-2 mb-2 fw-normal" key={index}>
//                                                 {tech}
//                                             </Badge>
//                                         ))}
//                                         {project.technologies.length > 3 && (
//                                             <Badge bg="light" text="dark" className="border mb-2 fw-normal">
//                                                 +{project.technologies.length - 3} more
//                                             </Badge>
//                                         )}
//                                     </div>

//                                     {/* Action Buttons */}
//                                     <div className="mt-auto d-flex flex-column gap-2">
//                                         {/* The SPA Link to the Details Page */}
//                                         <Link
//                                             to={`/project/${project.id}`}
//                                             className="btn btn-info w-100 fw-semibold text-dark"
//                                         >
//                                             View Project Details
//                                         </Link>

//                                         <div className="d-flex gap-2 mt-1">
//                                             <Button
//                                                 variant="dark"
//                                                 className="flex-fill"
//                                                 href={project.github}
//                                                 target="_blank"
//                                             >
//                                                 GitHub
//                                             </Button>
//                                             <Button
//                                                 variant="outline-secondary"
//                                                 className="flex-fill"
//                                                 href={project.liveUrl}
//                                                 target="_blank"
//                                                 disabled={project.liveUrl === '#'}
//                                             >
//                                                 Demo
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default Projects;