// Importar las librerias necesarias
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Definicion de los componentes
function Home() {
    return <h2>Inicio</h2>;
}

function About() {
    return <h2>Acerca de</h2>;
}

function Dashboard() {
    return <h2>Panel de Control</h2>;
}

// Componente principal de la aplicacion
function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/about">Acerca de</Link>
                <Link to="/dashboard">Panel de Control</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

// Renderizar el componente App
ReactDOM.render(<App />, document.getElementById('root'));
