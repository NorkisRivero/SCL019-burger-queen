import Inicio from './pages/Inicio'
import Mesero from './pages/Mesero'
import Cocina from './pages/Cocina'
import NotFound from './pages/NotFound';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {UseStates} from './UseContext/UserContent';



function App() {
  return (
    <UseStates> 
    

    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Mesero" element={<Mesero />} />
        <Route path="/Cocina" element={<Cocina />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
     </UseStates>
  );
}

export default App;
