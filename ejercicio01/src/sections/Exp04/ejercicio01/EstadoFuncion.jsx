import React, { useState } from 'react';

const EstadoFuncion = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center text-white">
      <h1 className="text-2xl mb-4">Contador (Función): {contador}</h1>
      <button
        onClick={incrementar}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Incrementar
      </button>
    </div>
  );
};

export default EstadoFuncion;
