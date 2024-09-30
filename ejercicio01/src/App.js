import React from 'react';
import SectionExp from './components/SectionExp';

// Importar los ejercicios de la Experiencia 1
import Exp01_01 from './sections/Exp01/ejercicio01/Exp01_01';
import Exp01_02 from './sections/Exp01/ejercicio02/Exp01_02';

// Importar los ejercicios de la Experiencia 2
import Exp02_01 from './sections/Exp02/ejercicio01/Exp02_01';
import Exp02_02 from './sections/Exp02/ejercicio02/Exp02_02';

// Importar los ejercicios de la Experiencia 3
import Exp03_01 from './sections/Exp03/ejercicio01/Exp03_01';
import Exp03_02 from './sections/Exp03/ejercicio02/Exp03_02';

// Importar los ejercicios de la Experiencia 4
import Exp04_01 from './sections/Exp04/ejercicio01/Exp04_01';
import Exp04_02 from './sections/Exp04/ejercicio02/Exp04_02';

// Importar los ejercicios de la Experiencia 5
import Exp05_01 from './sections/Exp05/ejercicio01/Exp05_01';
import Exp05_02 from './sections/Exp05/ejercicio02/Exp05_02';

// Importar los ejercicios de la Experiencia 6
import Exp06_01 from './sections/Exp06/ejercicio01/Exp06_01';
import Exp06_02 from './sections/Exp06/ejercicio02/Exp06_02';

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen p-10">
        <h1 className="text-4xl font-bold col-span-full text-center mb-10">
          Experiencias Prácticas
        </h1>
      <main className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center p-10">

        {/* Experiencia 1 */}
        <SectionExp
          title="Experiencia Nro 1"
          exercises={[Exp01_01, Exp01_02]}
        />

        {/* Experiencia 2 */}
        <SectionExp
          title="Experiencia Nro 2"
          exercises={[Exp02_01, Exp02_02]}
        />

        {/* Experiencia 3 */}
        <SectionExp
          title="Experiencia Nro 3"
          exercises={[Exp03_01, Exp03_02]}
        />

        {/* Experiencia 4 */}
        <SectionExp
          title="Experiencia Nro 4"
          exercises={[Exp04_01, Exp04_02]}
        />

        {/* Experiencia 5 */}
        <SectionExp
          title="Experiencia Nro 5"
          exercises={[Exp05_01, Exp05_02]}
        />

        {/* Experiencia 6 */}
        <SectionExp
          title="Experiencia Nro 6"
          exercises={[Exp06_01, Exp06_02]}
        />
      </main>
    </div>
  );
}

export default App;
