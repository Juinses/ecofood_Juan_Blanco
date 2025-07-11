import React from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/formulario';
import { AgregarProductoModal } from './components/modalProducto';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e6f4ea' }}>
      <div className="text-center p-4 bg-white rounded shadow" style={{ width: '90%', maxWidth: '600px' }}>
        <Header />
        <Formulario />
        <AgregarProductoModal />
      </div>
    </div>
  );
}

export default App;
