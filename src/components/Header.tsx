import { useHistory } from "react-router";

export default function Header() {
  return (
    <div className="nav-bar">
        <a href="/">
      <div className="left-bar">
        
        <h1>Crunchy Royal Pizza</h1>
      </div></a>
      <div className="logo">
    
        <img id="logo" src="img/logoPizza.png" alt="logo" ></img>
       
        <a href="/Login">Login</a>
        <a href="/">Home</a>
        <a href="/Carrito">Carrito</a>
        <a href="/Admin">Admin tools</a>
      </div>

    </div>
  );
}
