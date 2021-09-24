import { useHistory } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import Header from "./Header";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";

const baseURL = "http://localhost:4000/usuarios";
const validateURL = "http://localhost:4000/validate";
const setActiveURL = "http://localhost:4000/active";

export default function Login(props: any) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [actual, setActual] = useState({
    user_id: 0,
    nombre: "",
    clave: "",
    admin: "",
    apellido: "",
    username: "",
  });
  const [validate, setValidate] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    history.push("/Order");
  };
  const clientId =
    "1088533658659-ehe9onncj8fcm7vsncgaoeocr6alsp8c.apps.googleusercontent.com";
  const history = useHistory();
  const [Login, setLogin] = useState<any[]>([]);
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [validateUser, setvalidateUser] = useState(false);
  const [showName, setName] = useState(false);
  const [profile, setProfile] = useState("");

  async function handleform() {
    //window.location.reload();
    console.log(pass);
    const response = await axios.get(`${validateURL}/${user}`);
    setvalidateUser(response.data.exist);

    const responseUser = await axios.get(`${baseURL}/${user}`);
    setActual(responseUser.data[0]);

    if (response.data.exist) {
      if (pass === actual.clave) {
        axios.put(`${setActiveURL}/${user}`, {
          nombre: "actual",
        });
        setName(true);
        setValidate(true);
        setProfile(user);
        history.push("/Order");
      } else {
        alert("user o pass incorrecta");
      }
    } else {
      setValidate(false);
    }
    setUser("");
    setPass("");
    //window.location.reload();
  }

  const onLoginSuccess = (res: any) => {
    console.log("Login Success:", res.profileObj);
    console.log("Login Success:", res.profileObj.name);
    setShowloginButton(false);
    setShowlogoutButton(true);
    setName(true);
    setUser("");
    setProfile(res.profileObj.email);
  };

  const onLoginFailure = (res: any) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");

    setShowloginButton(true);
    setShowlogoutButton(false);
    setName(false);
    setUser("");
  };

  function handleReg() {
    history.push("/Register");
  }
  function handleOrders() {
    history.push("/Order");
  }
  async function handleUser() {
    const response = await axios.get(`${validateURL}/${user}`);
    setvalidateUser(response.data.exist);
    console.log(validateUser);
  }

  return (
    <div className="container">
      {showName ? <h1 id="name">Name: {profile}</h1> : null}
      <div className="loginDiv">
        <div className="login-wrapper">
          <h1>Login</h1>
          <br />

          <label id="username">
            <h3>Username </h3>
            <br />
          </label>
          <input
            onChange={(e) => {
              setUser(e.target.value);
              handleUser();
            }}
            type="text"
            value={user}
            placeholder="Enter Username"
            required
          />
          <label id="username">
            <h3>Password </h3>
            <br />
          </label>
          <input
            onChange={(e) => {
              setPass(e.target.value);
              handleUser();
            }}
            type="password"
            placeholder="Enter Password"
            required
          />

          <br />
          <button onClick={handleform} className="registerbtn">
            Login
          </button>
          <button onClick={handleReg} className="registerbtn">
            Register
          </button>
          <br />
          <br />
          {showloginButton ? (
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign In"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          ) : null}

          {showlogoutButton ? (
            <GoogleLogout
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}
          <br />
        </div>
      </div>
    </div>
  );
}
