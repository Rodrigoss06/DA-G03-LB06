import React, { useState } from 'react';

const NodeNpmPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Contador con Node.js y NPM</h1>
      <p className="text-lg mb-4">El valor actual es: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Incrementar
      </button>
    </div>
  );
}

export default NodeNpmPage;
