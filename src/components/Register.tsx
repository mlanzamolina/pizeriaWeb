import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";

const baseURL = "http://localhost:4000/usuarios";
const validateURL = "http://localhost:4000/validate";
export default function Register() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [Confirmpass, setConfirmPass] = useState("");
  const [validate, setValidate] = useState(false);
  const [validatePass, setValidatePass] = useState(false);

  async function handleform() {
    Validate();
    const response = await axios.get(`${validateURL}/${user}`);
    if (response.data.exist && validatePass) {
      setValidate(true);
      console.log(user);
    } else {
      console.log(user);
      await axios.post(baseURL, {
        nombre: "",
        clave: pass,
        admin: false,
        apellido: "",
        username: user,
      });
      setValidate(false);
    }
    setUser("");
    setPass("");
    setConfirmPass("");
  }
  function Validate() {
    if (pass !== Confirmpass) {
      alert("Passwords do not match.");
      return setValidatePass(false);
    }
    return setValidatePass(true);
  }

  return (
    <div>
      <div className="container">
        <h1>Register</h1>
        <h3>Please fill in this form to create an account.</h3>

        <label id="username">
          <b>UserName</b>
        </label>
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
          type="text"
          value={user}
          placeholder="Enter Username"
          required
        />

        <label>
          <b>Password</b>
        </label>
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          value={pass}
          placeholder="Enter Password"
          required
        />

        <label>
          <b>Confirm Password</b>
        </label>
        <input
          onChange={(e) => {
            setConfirmPass(e.target.value);
          }}
          type="password"
          value={Confirmpass}
          placeholder="Confirm Password"
          required
        />

        <h3>
          By creating an account you agree to our{" "}
          <a href="https://www.dummies.com/terms-of-use/" target="_blank">
            Terms & Privacy
          </a>
          .
        </h3>
        <button onClick={handleform} className="registerbtn">
          Register
        </button>
        <script type="text/javascript">{}</script>

        {validate ? <h1> Username Invalido ya existe </h1> : null}
      </div>

      <div className="container signin">
        <p>
          Already have an account? <a href="/Login">Sign in</a>.
        </p>
      </div>
    </div>
  );
}
