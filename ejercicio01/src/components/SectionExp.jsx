import React from 'react';

function SectionExp({ title, exercises }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg ">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="flex flex-col gap-4">
        {exercises.map((Exercise, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md"
          >
            {/* Etiqueta del ejercicio */}
            <span className="text-lg font-semibold text-white mr-4">Ejercicio {index + 1}:</span>
            {/* Componente del ejercicio */}
            <div className="flex-1 bg-gray-900 p-4 rounded-lg">
              <Exercise />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionExp;
