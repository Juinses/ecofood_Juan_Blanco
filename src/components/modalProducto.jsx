import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { ProductCard } from './ProductoCard';

export function AgregarProductoModal() {
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setErrores({});
    setTitulo('');
    setImagen('');
    setDescripcion('');
  };

  // Validar URL simple
  const validarURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!titulo.trim()) nuevosErrores.titulo = 'El título es obligatorio.';
    if (!imagen.trim()) {
      nuevosErrores.imagen = 'La URL de la imagen es obligatoria.';
    } else if (!validarURL(imagen.trim())) {
      nuevosErrores.imagen = 'La URL de la imagen no es válida.';
    }
    if (!descripcion.trim()) nuevosErrores.descripcion = 'La descripción es obligatoria.';

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    const nuevoProducto = {
      title: titulo,
      image: imagen,
      description: descripcion,
    };

    setProductos([...productos, nuevoProducto]);
    setMensajeExito('¡Producto agregado con éxito!');
    handleClose();
  };

  // Limpiar mensaje de éxito después de 3 segundos
  useEffect(() => {
    if (mensajeExito) {
      const timer = setTimeout(() => setMensajeExito(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensajeExito]);

  return (
    <div className="text-center">
      <Button variant="primary" onClick={handleShow} className="mb-4">
        Agregar Producto
      </Button>

      {mensajeExito && <Alert variant="success" className="mx-auto w-50">{mensajeExito}</Alert>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleGuardar}>
            <Form.Group className="mb-3">
              <Form.Label>Título del producto</Form.Label>
              <Form.Control
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                isInvalid={!!errores.titulo}
              />
              <Form.Control.Feedback type="invalid">{errores.titulo}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control
                type="text"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                isInvalid={!!errores.imagen}
              />
              <Form.Control.Feedback type="invalid">{errores.imagen}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                isInvalid={!!errores.descripcion}
              />
              <Form.Control.Feedback type="invalid">{errores.descripcion}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="success" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="d-flex flex-wrap justify-content-center mt-4">
        {productos.map((producto, idx) => (
          <ProductCard
            key={idx}
            title={producto.title}
            image={producto.image}
            description={producto.description}
          />
        ))}
      </div>
    </div>
  );
}
