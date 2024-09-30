import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Datos cargados' });
    }, 2000);
  }, []);

  return (
    <div className="text-center text-white text-2xl p-6 bg-gray-800 rounded-lg shadow-md">
      {data ? data.message : 'Cargando...'}
    </div>
  );
}

export default DataFetcher;
