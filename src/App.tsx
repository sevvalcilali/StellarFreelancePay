import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployerPage from './pages/EmployerPage';
import FreelancerPage from './pages/FreelancerPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/employer">Employer</Link> | <Link to="/freelancer">Freelancer</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Welcome! Go to <Link to="/employer">Employer</Link></div>} />
        <Route path="/employer" element={<EmployerPage />} />
        <Route path="/freelancer" element={<FreelancerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
