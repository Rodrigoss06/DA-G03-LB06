import React from 'react';

function UserProfile({ name, age }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Perfil de Usuario</h2>
      <p className="text-lg">Nombre: {name}</p>
      <p className="text-lg">Edad: {age}</p>
    </div>
  );
}

function Exp02_02() {
  return (
    <div className=" bg-gray-900 flex items-center justify-center p-10">
      <UserProfile name="Ana" age={28} />
    </div>
  );
}

export default Exp02_02;
