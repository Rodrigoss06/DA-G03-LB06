import React from 'react';

function Card() {
  return (
    <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden max-w-sm">
      <div className="p-6">
        <h5 className="text-2xl font-bold mb-4">Mi Tarjeta TailwindCSS</h5>
        <p className="text-gray-300 mb-4">
          Esta es una tarjeta creada con TailwindCSS en React.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Ir a algún lugar
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex items-center justify-center bg-gray-900">
      <header>
        <Card />
      </header>
    </div>
  );
}

export default App;
