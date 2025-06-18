import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;