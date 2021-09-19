import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const baseURL = "http://localhost:4000/reviews";

export default function AddReview () {
  const history = useHistory();
  const [post, setPost] = useState<any[]>([]);
  const { id } = useParams<{ id: string }>();
  const [text, setText] = React.useState("");
  const [fName, setfName] = useState('');

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    const frmdetails = {
      'Review' : fName
  }
  setText(frmdetails["Review"]);
    axios
      .post(baseURL, {
        idproducto: parseInt(id),
        review: frmdetails["Review"],
      })
      .then((response) => {
        setPost(response.data);
      });
      
      history.push(`/Order`);
  }
  const [productos, setProductos] = useState<any[]>([]);

  var name;

  useEffect(() => {
    function getLogin() {
      fetch("http://localhost:4000/productos")
        .then((data) => data.json())
        .then((data) => setProductos(data));
    }
    getLogin();
  }, []);
  

/*
const submitValue = () => {
  const frmdetails = {
      'Review' : fName
  }
 

}*/


  return (
    <div>
      <h1>{text}</h1>
      <form>
        {productos.map((item, index) => {
          return (
            <>
              {item.idproducto === parseInt(id) ? (
                <>
                  {" "}
                  <h1>Escriba review de: {item.nombre_producto}</h1>
                </>
              ) : (
                <h1></h1>
              )}
              <br />
            </>
          );
        })}
     <input type="text" placeholder="Review" onChange={e => setfName(e.target.value)} />
    <button onClick={createPost}>Submit</button>
     
      </form>
    </div>
  );
}
