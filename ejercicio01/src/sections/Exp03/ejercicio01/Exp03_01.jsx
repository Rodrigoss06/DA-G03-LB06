import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-6">
      <ul className="flex justify-around">
        <li className="hover:underline cursor-pointer">Inicio</li>
        <li className="hover:underline cursor-pointer">Acerca de</li>
        <li className="hover:underline cursor-pointer">Contacto</li>
      </ul>
    </nav>
  );
}

function Sidebar() {
  return (
    <aside className="bg-gray-700 text-white p-4 rounded-lg shadow-lg">
      Barra Lateral
    </aside>
  );
}

function Exp03_01() {
  return (
    <div className=" bg-gray-900 flex flex-col items-center p-10 gap-6">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Exp03_01;
