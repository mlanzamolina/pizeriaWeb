import { useHistory } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import Header from "./Header";
import { GoogleLogin, GoogleLogout } from "react-google-login";



export default function Login(props: any) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    history.push('/Order');
  }
  const clientId =
    "1088533658659-ehe9onncj8fcm7vsncgaoeocr6alsp8c.apps.googleusercontent.com";
  const history = useHistory();
  const [Login, setLogin] = useState<any[]>([]);
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [showName, setName] = useState(false);
  const [profile, setProfile] = useState<string>();
 var name;
 
  useEffect(() => {
    function getLogin() {
      fetch("http://localhost:4000/usuarios")
        .then((data) => data.json())
        .then((data) => setLogin(data));
    }
    getLogin();
  }, []);

  const onLoginSuccess = (res: any) => {
    console.log("Login Success:", res.profileObj);
    console.log("Login Success:", res.profileObj.name);
    setShowloginButton(false);
    setShowlogoutButton(true);
    setName(true);
    setProfile(JSON.stringify(res.profileObj.name));
  };
 
  const onLoginFailure = (res: any) => {
    console.log("Login Failed:", res);
  };
   
  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    setName(false);
  };
 
  function handleReg(){
    history.push("/Register");
  }

  return (
    <div className="cover">

     
      {showName ? (
          <h1 id="name">Name: {profile}</h1>
        ): null}
      <div className="loginDiv">
    
      <div className="login-wrapper">
      <h1>Login</h1><br />
    
        <label>Username</label>
        <input type="text" {...username} autoComplete="new-password" />
        <br />
 
      <label>Password</label>
        <input type="password" {...password} autoComplete="new-password" />
      
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      <button onClick={handleReg}>Register</button>
      <br /><br />
        {showloginButton ? (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : null
         }

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
const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = (e: { target: { value: any; }; }) => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
