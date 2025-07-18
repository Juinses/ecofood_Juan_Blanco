import React from 'react';

export function Header() {
  return (
    <header className="text-center mb-5 px-3">
      <h1 className="display-4 fw-bold" style={{ 
        fontSize: 'clamp(1.5rem, 5vw, 3rem)',  // fuente responsiva entre 1.5rem y 3rem
        color: '#2f7a20'
      }}>
        Bienvenido al sector de productos
      </h1>
    </header>
  );
}
