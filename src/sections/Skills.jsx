import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaServer, FaBrain, FaCode, FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Full-Stack Development',
            icon: <FaServer className="text-info mb-3" size={40} />,
            skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST APIs'],
            description: 'Building responsive, scalable web applications with the MERN stack.'
        },
        {
            title: 'Machine Learning & Data',
            icon: <FaBrain className="text-info mb-3" size={40} />,
            skills: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis', 'Predictive Modeling'],
            description: 'Analyzing datasets and building models to forecast trends and outcomes.'
        },
        {
            title: 'Competitive Programming',
            icon: <FaCode className="text-info mb-3" size={40} />,
            skills: ['C++', 'Data Structures', 'Algorithms', 'OOP'],
            description: 'Solving complex algorithmic challenges and optimizing code performance.'
        },
        {
            title: 'Beyond the Screen',
            icon: <FaDumbbell className="text-info mb-3" size={40} />,
            skills: ['Powerlifting', 'Discipline', 'Time Management', 'Problem Solving'],
            description: 'Applying the same consistency and heavy lifting to personal growth as I do to code.'
        }
    ];

    return (
        <section id="skills" className="py-5 bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Technical Arsenal</h2>
                    <p className="text-muted lead">Tools and technologies I use to build solutions.</p>
                </div>

                <Row className="g-4">
                    {skillCategories.map((category, index) => (
                        // Framer motion integration applied directly to the Bootstrap Col
                        <Col
                            key={index}
                            lg={3}
                            md={6}
                            as={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }} // Staggers the animation
                        >
                            <Card className="h-100 border-0 shadow-sm text-center p-4 hover-lift">
                                <Card.Body>
                                    {category.icon}
                                    <Card.Title className="fw-bold mb-3">{category.title}</Card.Title>
                                    <Card.Text className="text-muted small mb-4">
                                        {category.description}
                                    </Card.Text>
                                    <div className="d-flex flex-wrap justify-content-center gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <Badge bg="light" text="dark" className="border" key={skillIndex}>
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;

// import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
// import { FaServer, FaBrain, FaCode, FaDumbbell } from 'react-icons/fa';

// const Skills = () => {
//     const skillCategories = [
//         {
//             title: 'Full-Stack Development',
//             icon: <FaServer className="text-info mb-3" size={40} />,
//             skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST APIs'],
//             description: 'Building responsive, scalable web applications with the MERN stack.'
//         },
//         {
//             title: 'Machine Learning & Data',
//             icon: <FaBrain className="text-info mb-3" size={40} />,
//             skills: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis', 'Predictive Modeling'],
//             description: 'Analyzing datasets and building models to forecast trends and outcomes.'
//         },
//         {
//             title: 'Competitive Programming',
//             icon: <FaCode className="text-info mb-3" size={40} />,
//             skills: ['C++', 'Data Structures', 'Algorithms', 'Object-Oriented Programming'],
//             description: 'Solving complex algorithmic challenges and optimizing code performance.'
//         },
//         {
//             title: 'Beyond the Screen',
//             icon: <FaDumbbell className="text-info mb-3" size={40} />,
//             skills: ['Powerlifting', 'Discipline', 'Time Management', 'Problem Solving'],
//             description: 'Applying the same consistency and heavy lifting to personal growth as I do to code.'
//         }
//     ];

//     return (
//         <section id="skills" className="py-5 bg-white">
//             <Container>
//                 <div className="text-center mb-5">
//                     <h2 className="fw-bold">Technical Arsenal</h2>
//                     <p className="text-muted lead">Tools and technologies I use to build solutions.</p>
//                 </div>

//                 <Row className="g-4">
//                     {skillCategories.map((category, index) => (
//                         <Col key={index} lg={3} md={6}>
//                             <Card className="h-100 border-0 shadow-sm text-center p-4 hover-lift">
//                                 <Card.Body>
//                                     {category.icon}
//                                     <Card.Title className="fw-bold mb-3">{category.title}</Card.Title>
//                                     <Card.Text className="text-muted small mb-4">
//                                         {category.description}
//                                     </Card.Text>
//                                     <div className="d-flex flex-wrap justify-content-center gap-2">
//                                         {category.skills.map((skill, skillIndex) => (
//                                             <Badge bg="light" text="dark" className="border" key={skillIndex}>
//                                                 {skill}
//                                             </Badge>
//                                         ))}
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

// export default Skills;