import { useHistory } from "react-router-dom";
import Header from "./Header";
import React, { useState, useEffect, Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:4000/actual/actual";
const baseURLOrdenes = "http://localhost:4000/ordenes";
const baseURLCarrito = "http://localhost:4000/carritos";
const URLproductos = "http://localhost:4000/productos";
const Order = () => {
  const history = useHistory();
  const [productos, setProductos] = useState<any[]>([]);
  const [cantidad, setCantidad] = useState("");
  const [text, setText] = React.useState("");
  const [precio, setPrecio] = useState<any>();
  const [id, setID] = useState<any>();
  const [nombre, setNombre] = useState<any>();
  const [imagen, setImagen] = useState<any>();
  const [subtotal, setSubtotal] = useState<any>();
  const [post, setPost] = useState({
    user_id: 0,
    nombre: "",
    clave: "",
    admin: "",
    apellido: "",
    username: "",
  });
  useEffect(() => {
    async function getProfile() {
      const response = await axios.get(`${baseURL}`);
      setPost(response.data[0]);
    }
    getProfile();
  }, []);

  async function handleAgregar() {
    try {
      await axios.post(`${baseURLCarrito}`, {
        nombre_producto: nombre,
        precio: precio,
        cantidad: cantidad,
        imagen: imagen,
        idproducto: id,
        user_id: 1,
      });
    } catch (error) {}
  }

  function handleSubmit() {
    const val = document.querySelectorAll("[value]");
    console.log(val);
    const frmdetails = {
      Cantidad: cantidad,
      Precio: precio,
    };
    console.log(frmdetails["Cantidad"]);
    console.log(frmdetails["Precio"]);
    setSubtotal(
      parseInt(frmdetails["Precio"]) * parseInt(frmdetails["Cantidad"])
    );
  }

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
      <h1>Orders</h1>
      <h1>{subtotal}</h1>
      {console.log(productos)}
      <CardGroup>
        {productos.map((item, index) => {
          return (
            <>
              {item.active ? (
                //<h1>{item.nombre_producto}</h1>
                <Card style={{ width: "18rem", margin: "10px" }}>
                  <img
                    id="imgOrder"
                    src={item.imagen}
                    alt={item.nombre_producto}
                  />
                  <Card.Body>
                    <form>
                      <Link to={`/Reviews/${item.idproducto}`}>Reviews</Link>
                      <Card.Title>{item.nombre_producto}</Card.Title>
                      <Card.Text>{item.descripcion}</Card.Text>
                      <Card.Text> Precio {item.precio} Lempiras</Card.Text>

                      <h6>Quantity:</h6>
                      <input
                       
                        placeholder="0"
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="0"
                        max="100"
                        onChange={(event) => {
                          setCantidad(event.target.value);
                          setPrecio(item.precio);
                        }}
                        onBlur={() => {
                          handleSubmit();
                          setPrecio(item.precio);
                          setID(item.idproducto);
                          setNombre(item.nombre_producto);
                          setImagen(item.imagen);
                        }}
                      ></input>
                      {/*<button onClick={() => 
                      {handleSubmit();
                        setPrecio(item.precio);

                        }}>Submit</button>*/}
                    </form>
                  </Card.Body>
                </Card>
              ) : null}
              <br />
            </>
          );
        })}
      </CardGroup>
      <button className="registerbtn"
        onClick={() => {
          handleAgregar();
          history.push(`/Carrito`);
        }}
      >
        Agregar a carrito
      </button>

      <button
        id="btn-1"
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
