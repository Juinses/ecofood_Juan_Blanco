import React from 'react';

export default function Profile() {
  // Datos de ejemplo, en una app real vendrían de contexto o API
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    joined: '2023-01-15',
  };

  const handleLogout = () => {
    alert('Sesión cerrada');
    // Aquí puedes agregar lógica para cerrar sesión (limpiar token, redirigir, etc.)
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Perfil de Usuario</h2>
      <div className="card p-3">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Miembro desde:</strong> {new Date(user.joined).toLocaleDateString()}</p>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
}
