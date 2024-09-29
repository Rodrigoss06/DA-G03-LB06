// src/components/EstadoConUseEffect.jsx
import React, { useState, useEffect } from 'react';

const EstadoConUseEffect = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Este código se ejecuta cada vez que el estado contador cambia
    document.title = `Contador: ${contador}`;
  }, [contador]); // Solo se ejecuta cuando contador cambia

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default EstadoConUseEffect;
    