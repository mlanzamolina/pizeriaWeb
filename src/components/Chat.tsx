import {  useHistory } from "react-router-dom";
import Header from "./Header";

export default function Chat() {
  const history = useHistory();
  return (
    <div className="cover">
  
      <h1>chat maleate</h1>
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
