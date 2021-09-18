import { useHistory } from "react-router-dom";
import Header from "./Header";

const Order = () => {
  const history = useHistory();
  return (
    <div className="cover">
      <Header></Header>
      <h1>Orders Maleate</h1>
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
};

export default Order;
