import React, { useState } from 'react';

function LightSwitch() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center text-white">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`${
          isOn ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
        } text-white font-semibold py-2 px-4 rounded-lg`}
      >
        {isOn ? 'Encendido' : 'Apagado'}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className=" bg-gray-900 flex items-center justify-center">
      <LightSwitch />
    </div>
  );
}

export default App;
