import { useHistory, useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import React from "react";
import { json } from "stream/consumers";
import emailjs from "emailjs-com";

const baseURL = "http://localhost:4000/actual/actual";
const activeURL = "http://localhost:4000/active";

export default function Header() {
  const path = window.location.href;
  const history = useHistory();
  const [Login, setLogin] = useState(true);
  const [post, setPost] = useState({
    user_id: 0,
    nombre: "",
    clave: "",
    admin: "",
    apellido: "",
    username: "",
  });
  React.useEffect(() => {
    async function getProfile() {
      const response = await axios.get(`${baseURL}`);
      setPost(response.data[0]);
      if (path === "http://localhost:3000/Login") {
        setLogin(false);
      } else {
        setLogin(true);
      }
    }
    getProfile();
  }, []);

  const [validate, setValidate] = useState(false);
  function handleLogIn() {
    /*
   
    */
    //const stringifiedUser = JSON.stringify(post.nombre);
    try {
      if (post.nombre === "actual") {
        /*
        if (path === "http://localhost:4000/Login") {
          setLogin(true);
        }*/
        console.log(path);
        setValidate(true);
      } else {
        history.push("/Login");
      }
    } catch (error) {
      history.push("/Login");
    }
  }
  function handleLogOut() {
    axios.put(`${activeURL}/${post.username}`, {
      nombre: "",
    });
    setValidate(false);
    window.location.reload();
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
        {Login ? (
          validate ? (
            <button onClick={handleLogOut}>Logout</button>
          ) : (
            <button onClick={handleLogIn}>Login</button>
          )
        ) : null}

        {validate ? <h2>{post.username}</h2> : null}
      </div>
    </>
  );
}
