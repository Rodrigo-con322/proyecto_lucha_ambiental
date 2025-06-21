import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Admi from './pages/Admi';
import AdmiEstructura from './pages/AdmiEstructura';
import AdmiEmpleados from './pages/AdmiEmpleados';
import AdmiAreas from './pages/AdmiAreas';
import AdmiNiveles from './pages/AdmiNiveles';
import Indicaciones from './pages/Indicaciones';
import Pregunta1 from './pages/PreguntaPrimera';
import Pregunta2 from './pages/PreguntaIntermedia';
import Pregunta3 from './pages/PreguntaUltima';
import FinExamen from './pages/FinExamen';
import Retroalimentacion from './pages/Retroalimentacion';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Login/Admi" element={<Admi/>} />
      <Route path="/Login/Admi/Estructura" element={<AdmiEstructura />} />
      <Route path="/Login/Admi/Empleados" element={<AdmiEmpleados />} />
      <Route path="/Login/Admi/Areas" element={<AdmiAreas />} />
      <Route path="/Login/Admi/Niveles" element={<AdmiNiveles />} />
      <Route path="/Login/Usuario/Indicaciones" element={<Indicaciones />} />
      <Route path="/Login/Usuario/Examen/PreguntaPrimera" element={<Pregunta1 />} />
      <Route path="/Login/Usuario/Examen/PreguntaIntermedia" element={<Pregunta2 />} />
      <Route path="/Login/Usuario/Examen/PreguntaUltima" element={<Pregunta3 />} />
      <Route path="/Login/Usuario/Examen/Fin" element={<FinExamen />} />
      <Route path="/Login/Usuario/Examen/Fin/Retroalimentacion" element={<Retroalimentacion />} />
    </Routes>
  );
}

export default App;