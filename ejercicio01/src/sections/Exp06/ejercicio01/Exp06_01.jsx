import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h2 className="text-2xl text-white">Bienvenido al Home</h2>;
}

function About() {
  return <h2 className="text-2xl text-white">Sobre Nosotros</h2>;
}

function Exp06_01() {
  return (
    <Router>
      <div className="bg-gray-900  p-10">
        <nav className="flex justify-around p-4 bg-gray-800 rounded-lg shadow-lg">
          <Link to="/" className="text-xl text-blue-400 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-xl text-blue-400 hover:underline">
            About
          </Link>
        </nav>
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Exp06_01;
