// Importar las librerias necesarias
const { useState, useEffect } = React;

// Componente principal de la aplicacion
function App() {
  const [count, setCount] = useState(0);

  // Hook useEffect para actualizar el titulo del documento
  useEffect(() => {
    document.title = `Has hecho clic ${count} veces`;
  }, [count]); // Dependencia de count

  return (
    <div>
      <h1>Hello, CodePen!</h1>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </div>
  );
}

// Renderizar el componente App
ReactDOM.render(<App />, document.getElementById('root'));
