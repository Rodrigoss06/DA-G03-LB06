import React from 'react';
import { Link } from 'react-router-dom';

function TaskItem({ task, onDeleteTask }) {
  return (
    <li className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col space-y-4">
      {/* Contenedor del título y botones */}
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-semibold text-white">{task.title}</h3>
        <div className="flex space-x-4">
          <Link
            to={`/tasks/${task.id}`}
            className="text-indigo-400 hover:underline"
          >
            Ver Detalles
          </Link>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="text-red-400 hover:underline"
          >
            Eliminar
          </button>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-400 text-base">{task.description}</p>

      {/* Estado */}
      <p className={`text-sm font-semibold ${task.status ? 'text-green-400' : 'text-yellow-400'}`}>
        Estado: {task.status ? 'Completado' : 'Pendiente'}
      </p>
    </li>
  );
}

export default TaskItem;
