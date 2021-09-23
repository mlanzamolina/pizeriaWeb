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
    admin: false,
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
  const [validateAdmin, setValidateAdmin] = useState(false);
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
        setValidateAdmin(post.admin);
        console.log(post.admin);
      } else {
        history.push("/Register");
      }
    } catch (error) {
      history.push("/Register");
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
      <nav className="navbar">
        <ul>
          <li className="active">
            {" "}
            <Link to="/">
              <div className="left-bar">
                <h1>Crunchy Royal Pizza</h1>
              </div>
            </Link>
          </li>
          <li>
            <img id="logo" src="img/logoPizza.png" alt="logo"></img>
          </li>

          <li>
            {" "}
            {validateAdmin ? <Link id="links"to="/Admin">Admin tools</Link> : null}
          </li>
          <li>
            <Link to="/Carrito">
              <img id="carrito" src="img/carrito.png" alt="carrito"></img>
            </Link>
          </li>
          <li>
            <div className="login">
              {Login ? (
                validate ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="btnlogin"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="btnlogin"
                    onClick={handleLogIn}
                  >
                    Sign-In
                  </button>
                )
              ) : null}

             
            </div>
          </li>
        </ul>
      </nav>
      {validate ? <h2>{post.username}</h2> : null}
    </>
  );
}
