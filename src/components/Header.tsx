
export default function Header() {
  return (
    <div className="nav-bar">
      <div className="left-bar">
        <h1>Crunchy Royal Pizza</h1>
      </div>
      <div className="logo">
        <img id="logo" src="img/logoPizza.png" alt="logo"></img>
        <a href="/Login">Login</a>
      </div>
    </div>
  );
}
