import Calculator from "./components/Calculator";
import './index.css';
function App() {
  return (
    <>
      <h1 className="font-mi-fuente-personalizada text-4xl">Calcupipo</h1>
      <Calculator />
      <div className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Fondo rojo con texto blanco</div>
    </>
  );
}

export default App;
