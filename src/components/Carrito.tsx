import axios from "axios";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const baseURL = "http://localhost:4000/actual/actual";

export default function Carrito() {
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
    e.target.reset();
  }
  return (
    <>
      <h1>carrito</h1>
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
              value={post.username}
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
    </>
  );
}
