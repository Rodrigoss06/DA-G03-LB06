import logo from './logo.svg';
import './App.css';
import SectionExp from './components/SectionExp';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      {/* <main className='flex flex-col gap-28 items-center'>
        <h1 className='text-2xl font-bold'>Experiencias Prácticas</h1>
      <SectionExp>
        <h1 className='text-2xl font-semibold font'>Experiencia Nro 1</h1>
        <p  className=''>aaaaaaaaaaaaaa</p>
      </SectionExp>
      </main> */}
      <Users/>
    </div>
  );
}

export default App;
