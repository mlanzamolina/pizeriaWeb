import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:4000/productos";

export default function Admin() {
  const [post, setPost] = React.useState(null);
  const [productos, setProductos] = useState<any[]>([]);
  const [cantidad, setCantidad] = useState("");
  const [id, setId] = useState("");
  const [stateF, setStatF] = useState(false);
  const [stateT, setStatT] = useState(true);
  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  useEffect(() => {
    function getLogin() {
      fetch("http://localhost:4000/productos")
        .then((data) => data.json())
        .then((data) => setProductos(data));
    }
    getLogin();
  }, []);
  function handlestateT() {
    axios
      .put(`http://localhost:4000/productos/${id}`, {
        precio: cantidad,
        active: stateT,
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  function handlestateF() {
    axios
      .put(`http://localhost:4000/productos/${id}`, {
        precio: cantidad,
        active: stateF,
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  return (
    <>
      <div className="cover">
        <CardGroup>
          {productos.map((item, index) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.imagen} />
                  <Card.Body>
                    <form>
                      <Link to={`/Reviews/${item.idproducto}`}>Reviews</Link>
                      <Card.Title>{item.nombre_producto}</Card.Title>
                      <Card.Text>{item.descripcion}</Card.Text>
                      <Card.Text>
                        {" "}
                        Precio{" "}
                        <input
                          placeholder={item.precio}
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="0"
                          max="10000"
                          onChange={(event) => {
                            setCantidad(event.target.value);
                            setId(item.idproducto);
                          }}
                        ></input>
                        Lempiras
                      </Card.Text>

                      <button
                        onClick={() => {
                            
                            setStatF(false);
                            handlestateF();

                        }}
                      >
                        Deactivate
                      </button>
                     <Card.Text>
                     <button
                        onClick={() => {
                            setStatT(true);
                            handlestateT();

                        }}
                      >
                        Activate
                      </button>
                         Estado Actual: {item.active.toString()}
                     </Card.Text>
                    </form>
                  </Card.Body>
                </Card>

                <br />
              </>
            );
          })}
        </CardGroup>
      </div>
      <Link to="/addPizza">Agregar Producto</Link>
    </>
  );
}
