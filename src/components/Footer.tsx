import { useHistory } from "react-router-dom";


export default function Footer() {
  const history = useHistory();
  return (
    <div>
      <button
        id="btn-1"
        onClick={() => {
          history.push("/Chat");
        }}
      >
        Chat{" "}
      </button>

      <button
        id="btn-2"
        onClick={() => {
          history.push("/SignUp");
        }}
      >
        sign-up
      </button>

      <button
        id="btn-3"
        onClick={() => {
          history.push("/Order");
        }}
      >
        Ordenar
      </button>
    </div>
  );
}
