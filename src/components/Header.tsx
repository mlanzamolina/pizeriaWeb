import { useHistory } from "react-router";

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="left-bar">
        <h1>Crunchy Royal Pizza</h1>
      </div>
      <div className="logo">
        <img id="logo" src="img/logoPizza.png" alt="logo"></img>
        <a href="/Login">Login</a>
        <a href="/">Home</a>
        <a href="/Carrito">Carrito</a>
      </div>

    </div>
  );
}
