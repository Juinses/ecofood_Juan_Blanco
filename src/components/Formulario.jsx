import { useState } from "react";

export function Formulario() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por registrarte, ${nombre}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <button type="submit">Registrarse</button>
    </form>
  );
}
