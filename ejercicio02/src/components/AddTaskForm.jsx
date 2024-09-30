import React, { useState } from 'react';

function AddTask({ onAddTask, closeModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
    };

    onAddTask(newTask);
    closeModal();
    setTitle('');
    setDescription('');
    setStatus(false); // Reiniciar el estado
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
          Título
        </label>
        <input
          id="title"
          type="text"
          className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
          Descripción
        </label>
        <textarea
          id="description"
          className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Estado */}
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="status">
          Estado de la tarea
        </label>
        <select
          id="status"
          className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
          value={status}
          onChange={(e) => setStatus(e.target.value === 'true')}
        >
          <option value="false">Pendiente</option>
          <option value="true">Completado</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline transition duration-300"
      >
        Agregar Tarea
      </button>
    </form>
  );
}

export default AddTask;
