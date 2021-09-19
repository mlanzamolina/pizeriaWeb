import { useHistory } from "react-router-dom";
import Header from "./Header";
import React, { useState, useEffect, Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";

const Order = () => {
  const history = useHistory();
  const [productos, setProductos] = useState<any[]>([]);
 

  var name;

  useEffect(() => {
    function getLogin() {
      fetch("http://localhost:4000/productos")
        .then((data) => data.json())
        .then((data) => setProductos(data));
    }
    getLogin();
  }, []);

  return (
    <div className="cover">
      <Header></Header>
      <h1>Orders Maleate</h1>

      <CardGroup>
        {productos.map((item, index) => {
          return (
            <>
              {item.active ? (
                //<h1>{item.nombre_producto}</h1>

                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.imagen} />
                  <Card.Body>
                    <Card.Title>{item.nombre_producto}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                    <Card.Text> Precio {item.precio} Lempiras</Card.Text>
                    <button>Agregar al carrito</button>
                    <form>
                      <label htmlFor="quantity">Quantity (between 1 and 5):</label>
                      <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                    </form>

                    <Button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><Link to={`/Reviews/${item.idproducto}`}>Review</Link></Button>

                  </Card.Body>
                </Card>
              ) : null}
              <br />
            </>
          );
        })}
      </CardGroup>

      <button
        id="btn-3"
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Order;
