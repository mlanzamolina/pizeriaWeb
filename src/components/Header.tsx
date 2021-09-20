import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <div className="left-bar">
          <h1>Crunchy Royal Pizza</h1>
        </div>
      </Link>
      <div className="logo">
        <img id="logo" src="img/logoPizza.png" alt="logo"></img>

        <div className="right">
          <Link to="/Login">Login</Link>
          <Link to="/Carrito">
            <img id="carrito" src="img/carrito.png" alt="carrito"></img>
          </Link>
          <Link to="/Admin">Admin tools</Link>
        </div>
      </div>
    </div>
  );
}
