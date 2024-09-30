import './App.css';
import AddTask from './components/AddTaskForm';
import TaskDetail from './components/TaskDetails';
import TaskList from './components/TaskList';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import taskData from "./data/tasks.json";

function App() {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState(taskData);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Router>
      <div className=" bg-gray-900 text-white min-h-screen">
        <nav className="fixed flex justify-end w-full bg-gray-800 p-4 shadow-md">
          <button
            className="mr-6 p-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition duration-300"
            onClick={() => setModal(true)}
          >
            Agregar Tareas
          </button>
        </nav>

        <main className="flex justify-center mt-20">
          <Routes>
            <Route
              path="/"
              element={<TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />}
            />
            <Route
              path="/tasks/:taskId"
              element={<TaskDetail tasks={tasks} />}
            />
          </Routes>
        </main>

        {modal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-white">Agregar Nueva Tarea</h2>
                <button
                  className="text-gray-400 hover:text-gray-600 text-xl font-bold"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <AddTask onAddTask={handleAddTask} closeModal={closeModal} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
