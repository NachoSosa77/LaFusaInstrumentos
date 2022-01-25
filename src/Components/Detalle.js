import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Detalle(props) {
  const { producto, verDetalle } = props;
  console.log("producto", producto);
  return (
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>{producto.precio}</Card.Text>
        <Card.Text>{producto.precio_oferta}</Card.Text>
        <Card.Text>{producto.cantidad}</Card.Text>
      </Card.Body>
      { verDetalle &&
        <Link to={"/producto/"+producto._id}>
          <Button variant="dark">Ver Detalle</Button>
        </Link>
}
    </Card>
  );
}

export default Detalle;
