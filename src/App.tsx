import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage';
import AdminPage from './pages/adminpage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link to="/" className="text-white text-lg">Home</Link>
            </li>
            <li>
              <Link to="/admin" className="text-white text-lg">Admin</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
