import { useState } from "react";

export function Formulario() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por registrarte, ${nombre}`);
    setNombre("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-4 gap-2">
      <input
        type="text"
        className="form-control"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <button type="submit" className="btn btn-dark">
        Registrarse
      </button>
    </form>
  );
}
