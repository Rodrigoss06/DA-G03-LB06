import React, { useState } from 'react';

const NodeNpmPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador con Node.js y NPM</h1>
      <p>El valor actual es: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default NodeNpmPage;
