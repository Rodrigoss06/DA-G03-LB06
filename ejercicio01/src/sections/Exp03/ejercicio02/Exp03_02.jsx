import React from 'react';

function Product({ name, price }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-lg">Precio: ${price}</p>
    </div>
  );
}

function App() {
  return (
    <div className=" bg-gray-900 flex flex-col items-center justify-center p-10 gap-6">
      <Product name="Laptop" price={999.99} />
      <Product name="Teléfono" price={799.99} />
    </div>
  );
}

export default App;
