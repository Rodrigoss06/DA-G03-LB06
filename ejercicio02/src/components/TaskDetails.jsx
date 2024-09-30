import React from 'react';
import { useParams } from 'react-router-dom';

function TaskDetail({ tasks }) {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === parseInt(taskId));

  if (!task) {
    return <p className="text-gray-300 text-center">Tarea no encontrada.</p>;
  }

  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg mt-36">
      <h2 className="text-3xl font-bold text-white mb-6">{task.title}</h2>
      <p className="text-gray-400 text-lg mb-4">{task.description}</p>
      <p className="mt-6 text-sm text-gray-500">
        <span className="font-semibold">Estado:</span> {task.status ? 'Completado' : 'Pendiente'}
      </p>
    </div>
  );
}

export default TaskDetail;
