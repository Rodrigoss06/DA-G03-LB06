import React from 'react';

const ExternalLinksPage = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a mi página web</h1>
      <p className="mb-4">Visita los siguientes enlaces:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            ReactJS
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ExternalLinksPage;
