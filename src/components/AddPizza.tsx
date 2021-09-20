import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const baseURL = "http://localhost:4000/productos";

export default function AddPizza() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [img, setImg] = useState("");
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.post(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);
  function createPost() {
    const frmdetails = {
      Name: nombre,
      Img: img,
      Precio: precio,
    };
    axios
      .post(baseURL, {
        nombre_producto: frmdetails["Name"],
        descripcion: "aaaaaaaaaaaaaa",
        precio: frmdetails["Precio"],
        imagen: frmdetails["Img"],
        active: true,
      })
      .then((response) => {
        setPost(response.data);
      });
    alert("Success");
  }

  return (
    <div>
        <h1>ADD PRODUCT</h1>

      <input
        type="text"
        placeholder="Pizza Name"
        onChange={(e) => setNombre(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Precio"
        onChange={(e) => setPrecio(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Img"
        onChange={(e) => setImg(e.target.value)}
      /><br /><br />
      <button onClick={createPost}>Submit</button>
    </div>
  );
}
