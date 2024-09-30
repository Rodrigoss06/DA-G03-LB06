import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Services() {
  return <h2 className="text-2xl text-white">Servicios que ofrecemos</h2>;
}

function Contact() {
  return <h2 className="text-2xl text-white">Contáctanos</h2>;
}

function Exp06_02() {
  return (
    <Router>
      <div className="bg-gray-900  p-10">
        <nav className="flex justify-around p-4 bg-gray-800 rounded-lg shadow-lg">
          <Link to="/services" className="text-xl text-green-400 hover:underline">
            Servicios
          </Link>
          <Link to="/contact" className="text-xl text-green-400 hover:underline">
            Contacto
          </Link>
        </nav>
        <div className="mt-10">
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Exp06_02;
