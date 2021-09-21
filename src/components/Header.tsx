import { useHistory, useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import React from "react";
import { json } from "stream/consumers";
import emailjs from "emailjs-com";

const baseURL = "http://localhost:4000/actual/actual";

export default function Header() {
  const path = window.location.href;
  const history = useHistory();
  const [Login, setLogin] = useState(false);
  const [post, setPost] = useState({
    user_id: 0,
    nombre: "",
    clave: "",
    admin: "",
    apellido: "",
    username: "",
  });
  const [validate, setValidate] = useState(false);
  async function handleLogIn() {
    const response = await axios.get(`${baseURL}`);
    setPost(response.data[0]);
    //const stringifiedUser = JSON.stringify(post.nombre);
    if (post.nombre === "actual") {
      if (path === "http://localhost:4000/Login") {
        setLogin(true);
      }
      console.log(path);
      setValidate(true);
    } else {
      history.push("/Login");
    }
  }
  async function handleLogOut() {
    setValidate(false);
  }

  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <div className="left-bar">
            <h1>Crunchy Royal Pizza</h1>
          </div>
        </Link>
        <div className="logo">
          <img id="logo" src="img/logoPizza.png" alt="logo"></img>

          <div className="right">
            <Link to="/Carrito">
              <img id="carrito" src="img/carrito.png" alt="carrito"></img>
            </Link>
            <Link to="/Admin">Admin tools</Link>
          </div>
        </div>
      </div>
      <div className="login">
        {validate ? (
          <button onClick={handleLogOut}>Logout</button>
        ) : (
          <button onClick={handleLogIn}>Login</button>
        )}

        {validate ? <h2>{post.username}</h2> : null}
      </div>
    </>
  );
}
