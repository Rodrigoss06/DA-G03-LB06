import React, { useEffect, useState } from 'react';

function Message() {
  const [message, setMessage] = useState('Esperando...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('¡Datos recibidos!');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center text-white text-2xl p-6 bg-gray-800 rounded-lg shadow-md">
      {message}
    </div>
  );
}

function App() {
  return (
    <div className=" bg-gray-900 flex items-center justify-center">
      <Message />
    </div>
  );
}

export default App;
