import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link, useHistory, useParams } from "react-router-dom";
import { CardGroup, Card } from "react-bootstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const baseURL = "http://localhost:4000/actual/actual";
const producto = "http://localhost:4000/productos/";
const carritosURL = "http://localhost:4000/carritos";

export default function Carrito() {
  const history = useHistory();
  const [precio, setPrecio] = useState<any>();
  const [cantidad, setCantidad] = useState("");
  const [ide, setID] = useState<any>();
  const [subtotal, setSubtotal] = useState<any>();

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
  const [item, setProducto] = useState({
    idproducto: 0,
    nombre_producto: "",
    descripcion: "",
    precio: 0,
    imagen: "",
    active: true,
  });

  const [carrito, setCarrito] = useState<any[]>([]);
  const storedValueAsNumber = Number(localStorage.getItem("count"));
  const [count, setCount] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  );
  const [vender, setVender] = useState("");
  useEffect(() => {
    localStorage.setItem("count", String(count));

    //window.location.reload();
  }, [count]);
  const [arrayPrecio, setAPrecio] = useState([]);

  const { id } = useParams<{ id: string }>();
  React.useEffect(() => {
    async function getProfile() {
      const response = await axios.get(`${producto}${id}`);
      setProducto(response.data[0]);
    }
    getProfile();
  }, []);

  useEffect(() => {
    function getLogin() {
      fetch("http://localhost:4000/carritos")
        .then((data) => data.json())
        .then((data) => setCarrito(data));
    }
    getLogin();
  }, []);
  function getFunc() {
    let calc = 0;
    for (let index = 0; index < carrito.length; index++) {
      calc += carrito[index].cantidad * carrito[index].precio;
    }
    console.log(calc);
    setCount(calc);
    setVender(calc.toString());
  }
  /*
  function mas() {
    setTotal(total + 500);
  }
  function menos() {
    setTotal(total - 500);
  }*/

  const [post, setPost] = useState({
    user_id: 0,
    nombre: "",
    clave: "",
    admin: "",
    apellido: "",
    username: "",
  });
  async function email() {
    const response = await axios.get(`${baseURL}`);
    setPost(response.data[0]);
  }
  const form = useRef();
  async function sendEmail(e: any) {
    e.preventDefault();
    email();
    console.log(post.username);
    emailjs
      .sendForm(
        "service_i6yo08f",
        "template_kcszlvl",
        e.target,
        "user_swdEcicIxbn0pfLvSx9HE"
      )
      .then(
        (result) => {
          console.log(e.target);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert(`Su orden esta en camino! Mira tu correo ${post.username}`);
    e.target.reset();
    
  }
  let popup = (
    <div>
     <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Orden realizada, revisa tu correo!</div>
      </Popup>
    </div>
  );

  return (
    <>
      <h1>Subtotal:{count}</h1>
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="hidden"
              className="form-control"
              placeholder="Name"
              name="name"
              value={post.username}
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="hidden"
              className="form-control"
              name="subject"
              value={count}
            />
          </div>

          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-info"
              value="Confirmar Orden"
            ></input>
          </div>
        </div>
      </form>
      <br /> <br />
      <CardGroup>
        <br />
        <br />

        {carrito.map((item, index) => {
          return (
            <>
              <Card>
                <img
                  id="imgOrder"
                  src={item.imagen}
                  alt={item.nombre_producto}
                />
                <Card.Body>
                  <form>
                    <Link to={`/Reviews/${item.idproducto}`}>Reviews</Link>
                    <Card.Title>{item.nombre_producto}</Card.Title>
                    <Card.Text> Precio {item.precio} Lempiras</Card.Text>

                    <h6>Quantity:</h6>
                    <input
                      style={{ width: "100px" }}
                      value={item.cantidad}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                      max="100"
                      onChange={(event) => {}}
                    ></input>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => {
                        axios.put(`${carritosURL}/${item.idcarrito}`, {
                          precio: item.precio,
                          cantidad: item.cantidad + 1,
                        });
                      }}
                    >
                      <img
                        src="img/plus.png"
                        alt="carrito"
                        id="btncarrito"
                      ></img>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => {
                        axios.put(`${carritosURL}/${item.idcarrito}`, {
                          precio: item.precio,
                          cantidad: item.cantidad - 1,
                        });
                      }}
                    >
                      <img
                        src="img/minus.png"
                        alt="carrito"
                        id="btncarrito"
                      ></img>
                    </button>
                    <br />
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => {
                        axios.delete(`${carritosURL}/${item.idcarrito}`);
                        setCount(0);
                        window.location.reload();
                      }}
                    >
                      <img
                        src="img/garbage.png"
                        alt="carrito"
                        id="btncarrito"
                      ></img>
                    </button>

                    {/*<button onClick={() => 
                      {handleSubmit();
                        setPrecio(item.precio);

                        }}>Submit</button>*/}
                  </form>
                </Card.Body>
              </Card>
              <br />
            </>
          );
        })}
      </CardGroup>
      <button
        className="registerbtn"
        onClick={() => {
          getFunc();
          window.location.reload();
        }}
      >
        subtotal
      </button>
      <br />
      <button
        className="registerbtn"
        onClick={() => {
          axios.delete(`${carritosURL}`);
          setCount(0);
          history.push("/Order");
        }}
      >
        Limpiar carrito
      </button>
      <button
        id="btn-1"
        onClick={() => {
          history.push("/Order");
        }}
      >
        Orders
      </button>
    </>
  );
}
