import React from 'react';
import { Outlet } from 'react-router-dom';

export function Layoutpre() {
  return (
    <div 
      className="container mt-5 p-4"
      style={{ 
        backgroundColor: '#e6f4ea', // verde muy suave, agradable
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(46, 125, 50, 0.15)', // sombra ligera verde
        maxWidth: '480px',
        margin: '40px auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2e7d32', fontWeight: '700', fontSize: '2.2rem' }}>
          Registrándose en EcoFood
        </h1>
        <hr 
          style={{ 
            borderColor: '#81c784', 
            borderWidth: '3px', 
            width: '90px', 
            margin: '12px auto 0',
            borderRadius: '4px'
          }} 
        />
      </header>

      <main>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
    </div>
  );
}
