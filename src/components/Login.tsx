import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function Login() {
  const history = useHistory();
  const [Login,setLogin]=useState<any[]>([]);

  useEffect(() => {
    function getLogin() {
      fetch("http://localhost:4000/usuarios")
        .then((data) => data.json())
        .then((data) => setLogin(data));
    }
    getLogin();
  }, []);
  return (
    <div className="cover">
      <Header></Header>
      <h1>Login Maleate</h1>
      {Login.map((item, index) => {
        return (
          <>
            <h1>User ID:{item.user_id}</h1>
            <h1>nombre:{item.nombre}</h1>
            <h1>clove:{item.clave}</h1>
            <h1>Admin:{item.admin} </h1>
            <h1>apellido:{item.apellido} </h1>
            <h1>username:{item.username} </h1>
            <br />
          </>
        );
      })}
     
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
}
