import Inicio from './pages/Inicio'
import Mesero from './pages/Mesero'
import Cocina from './pages/Cocina'
import NotFound from './pages/NotFound';
import './App.css';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Mesero" element={<Mesero />} />
        <Route path="/Cocina" element={<Cocina />} />
        <Route path="*" element={<NotFound />} />
     </Routes>

  );
}

export default App;
