import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-glass" variant="dark">
      <Container>
        {/* Brand Logo / Name */}
        <Navbar.Brand href="#home" className="fw-bold fs-4 tracking-wider">
          <span className="text-light">&lt;</span>
          <span className="text-gradient-cyan">Raj Kumar Gupta</span>
          <span className="text-light"> /&gt;</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#education" className="nav-link-custom">Education</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>

            {/* Optional: A small highlighted button for Resume right in the nav */}
            <Nav.Link
              href="src\assets\Specialized cv updated.pdf"
              target="_blank"
              className="btn btn-outline-info rounded-pill px-4 ms-lg-3 mt-2 mt-lg-0 fw-semibold"
              style={{ padding: '6px 16px' }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import { useState, useEffect } from 'react';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';

// const Navigation = () => {
//     const [isScrolled, setIsScrolled] = useState(false);

//     // Dynamic scroll effect for industry-grade polish
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <Navbar
//             expand="lg"
//             fixed="top"
//             variant="dark"
//             className={`transition-all duration-300 ${isScrolled ? 'bg-dark shadow-sm py-2' : 'bg-transparent py-3'}`}
//             style={{ transition: 'all 0.3s ease-in-out' }}
//         >
//             <Container>
//                 {/* Brand / Logo */}
//                 <Navbar.Brand href="#home" className="fw-bold fs-4 tracking-wider">
//                     <span className="text-info">&lt;</span> Rajkumar <span className="text-info">/&gt;</span>
//                 </Navbar.Brand>

//                 {/* Hamburger Menu Toggle for Mobile */}
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

//                 {/* Navigation Links */}
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto align-items-center">
//                         <Nav.Link href="#home" className="mx-2 text-uppercase fs-6 fw-semibold">Home</Nav.Link>
//                         <Nav.Link href="#skills" className="mx-2 text-uppercase fs-6 fw-semibold">Skills</Nav.Link>
//                         <Nav.Link href="#projects" className="mx-2 text-uppercase fs-6 fw-semibold">Projects</Nav.Link>
//                         <Nav.Link href="#contact" className="mx-2 text-uppercase fs-6 fw-semibold">Contact</Nav.Link>

//                         {/* Call to Action - Resume Download */}
//                         <Button
//                             variant="outline-info"
//                             className="ms-lg-3 mt-3 mt-lg-0 px-4 rounded-pill fw-bold"
//                             href="/resume.pdf"
//                             target="_blank"
//                         >
//                             Resume
//                         </Button>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default Navigation;