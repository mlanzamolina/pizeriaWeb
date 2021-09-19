import Header from './Header';
import {  useHistory } from "react-router-dom";

export default function SignUp() {
    const history = useHistory();
    return (
        <div className="cover">
     
      <h1>Sign Up</h1>
      <button
        id="btn-3"
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
    </div>
    )
}
