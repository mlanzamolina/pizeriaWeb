import { Link, useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Reviews() {
    let { id } = useParams();
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
    
         <h3>ID: { id }</h3>
            
            {reviews.map((item, index) => {
          return (
            <>
               {console.log(id)}
              {(item.idproducto === id) ?(
                     <h1>{item.review}</h1>
              )
           
              :  null
               }
              <br />
            </>
          );
        })}
        </>
    )
};

export default Reviews;
