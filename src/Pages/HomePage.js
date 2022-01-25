import React, { useState, useEffect } from "react";
import { Container, CardDeck } from "react-bootstrap";
import Detalle from "../Components/Detalle";
import FormGroup from "../Components/Forms/FormGroup";
function HomePage() {
  const [productos, setProductos] = useState([]);

  const [buscar, setBuscar] = useState("");
  useEffect(() => {
    let queryBuscar = "";
    if (buscar) {
      queryBuscar = "?buscar=" + buscar;
    }
    fetch("http://localhost:3000/productos/" + queryBuscar, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          setProductos(data);
        }


      });
  }, [buscar]);
  const handleChange = (e) => {
    console.log("Buscar");
    setBuscar(e.target.value);
  };
  return (
    <Container>
      <FormGroup
        label="Buscar"
        type="text"
        placeholder="Buscar"
        name="buscar"
        value={buscar}
        onChange={handleChange}
      />
      <CardDeck>
        {productos.map((producto,) => (

          <Detalle key={producto._id} producto={producto} verDetalle={true} />

        ))}
      </CardDeck>
    </Container>
  );
}

export default HomePage;
