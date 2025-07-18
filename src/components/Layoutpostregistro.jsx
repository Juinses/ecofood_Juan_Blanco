import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Layoutpost() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Sidebar */}
      <nav
        className="p-4"
        style={{ 
          width: '240px', 
          minHeight: '100vh', 
          background: 'linear-gradient(180deg, #1b5e20, #388e3c)', // degradado verde oscuro a medio
          color: 'white',
          boxSizing: 'border-box',
          overflowY: 'auto',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
        }}
      >
        <h2 className="mb-4" style={{ fontWeight: '700', letterSpacing: '1px' }}>EcoFood</h2>
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <Link 
              to="/" 
              className="nav-link"
              style={{
                color: 'rgba(255,255,255,0.9)', 
                fontWeight: '600',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'background-color 0.3s',
                textDecoration: 'none'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Inicio
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link 
              to="/profile" 
              className="nav-link"
              style={{
                color: 'rgba(255,255,255,0.9)', 
                fontWeight: '600',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'background-color 0.3s',
                textDecoration: 'none'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Perfil
            </Link>
          </li>
          {/* Más enlaces si quieres */}
        </ul>
      </nav>

      {/* Contenido principal */}
      <main 
        style={{ 
          flex: 1, 
          padding: '30px', 
          backgroundColor: '#e6f4ea',  // verde muy suave para fondo
          overflowY: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#2f7a20', fontWeight: '700' }}> !Nos alegra tu presencia disfruta en nuestra pagina principal! </h1>
          <hr style={{ borderColor: '#4caf50', borderWidth: '2px', maxWidth: '120px', marginLeft: 0 }} />
        </header>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
    </div>
  );
}
