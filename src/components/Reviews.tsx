import { Link, useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddReview from "./AddReview";



const Reviews = () => {
 // window.location.reload(false);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [reviews, setReview] = useState<any[]>([]);
  useEffect(() => {
    function getReview() {
      fetch("http://localhost:4000/reviews")
        .then((data) => data.json())
        .then((data) => setReview(data));
    }
    getReview();
  }, []);


  return (
    <>
<div className="cover">
<h1>Reviews</h1>
<button type="button" className="btn btn-warning"  onClick={() => {
          history.push(`/AddReview/${parseInt(id)}`);
        }}>Add Review</button>
      {reviews.map((item, index) => {
        return (
          <>

            {(item.idproducto === parseInt(id)) ? (
              <><h1>Producto: {item.idproducto}</h1>
              <h1>Review/: {item.review}</h1></>
            )
              : <h1></h1>
            }
            <br />
          </>
        );
      })}
    
     
      <Footer></Footer>
    </div>
    </>


  )
};

export default Reviews;
