import { Routes, Route } from 'react-router-dom';
import { Layoutpost } from './components/Layoutpostregistro'; 
import { Layoutpre } from './components/Layoutpreregistro';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas con Layoutpost para la raíz */}
      <Route path="/" element={<Layoutpost />}>
        <Route index element={<Home />} />
      </Route>

      {/* Rutas con Layoutpre para login y registro */}
      <Route path="/auth" element={<Layoutpre />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
