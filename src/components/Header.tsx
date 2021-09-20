import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
export default function Header() {
  return (
    <div className="nav-bar">
      <a href="/">
        <div className="left-bar">
          <h1>Crunchy Royal Pizza</h1>
        </div>
      </a>
      <div className="logo">
        <img id="logo" src="img/logoPizza.png" alt="logo"></img>

        <div className="right">
        <a href="/Login">Login</a>
        <a href="/Carrito">
          <img id="carrito" src="img/carrito.png" alt="carrito"></img>
        </a>
        <a href="/Admin">Admin tools</a>
        
        </div>
      </div>
    </div>
  );
}
