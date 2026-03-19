import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Import Global Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      {/* d-flex flex-column min-vh-100 ensures the page takes up at least 
        the full height of the screen, pushing the footer to the bottom. 
      */}
      <div className="d-flex flex-column min-vh-100">

        {/* The Navbar stays at the top across all routes */}
        <Navigation />

        {/* flex-grow-1 makes the main content expand to fill available space */}
        <div className="flex-grow-1">
          <Routes>
            {/* The main landing page */}
            <Route path="/" element={<Home />} />

            {/* The dynamic project details page */}
            <Route path="/project/:id" element={<ProjectDetails />} />

            {/* Fallback route for 404s (Redirects to Home) */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* The Footer anchors the bottom across all routes */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;