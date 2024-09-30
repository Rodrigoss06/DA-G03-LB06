/* Actividad 1a*/
/* App.css */
body {
  background-color: #282c34;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

h1 {
  font-size: 2.5rem;
  color: #61dafb;
  margin-bottom: 20px;
  text-align: center;
}

a {
  color: #ffcc00;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #ffcc00;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a:hover {
  background-color: #ffcc00;
  color: #282c34;
}

.container {
  text-align: center;
}

/* App.js */
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Mi primera página con React - made by: Edson</h1>
      <a href="https://reactjs.org/">Aprende más sobre React</a>
    </div>
  );
}

export default App;

------------------------------------------------------------------------------------------------------------------------------------
/* Actividad 1b, código de la actividad 1b completo */

/* App.css */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  background-color: #282c34;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: background-color 0.5s ease;
}

h1 {
  font-size: 2.5rem;
  color: #61dafb;
  margin-bottom: 20px;
  text-align: center;
  animation: fadeIn 2s ease-in-out; /* Añadimos animación */
}

a {
  color: #ffcc00;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #ffcc00;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a:hover {
  background-color: #ffcc00;
  color: #282c34;
  transform: scale(1.05); /* Efecto de hover */
}

.react-icon {
  font-size: 4rem;
  color: #61dafb;
  margin-bottom: 20px;
  animation: rotate 5s infinite linear; /* Animación de rotación */
}

.container {
  text-align: center;
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* App.js */
import React from 'react';
import './App.css';
import { FaReact } from 'react-icons/fa';  // Icono de React
import { FiExternalLink } from 'react-icons/fi';  // Icono de link externo

function App() {
  return (
    <div className="container">
      <FaReact className="react-icon" /> {/* Icono de React */}
      <h1>Mi primera página con React - made by: Edson</h1>
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        Aprende más sobre React <FiExternalLink /> {/* Icono de link externo */}
      </a>
    </div>
  );
}

export default App;


