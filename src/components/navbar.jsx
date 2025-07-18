import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2e7d32' }}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/" style={{ fontSize: '1.5rem' }}>
          Barra de navegacion de Ecofood
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'white' }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/auth/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/auth/register">Registro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
