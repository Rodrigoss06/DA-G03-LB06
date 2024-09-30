import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-6">Mis Tareas</h2>
      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No hay tareas disponibles.</p>
      )}
    </div>
  );
}

export default TaskList;
