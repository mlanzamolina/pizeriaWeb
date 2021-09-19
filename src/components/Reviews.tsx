import { Link, useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Reviews = () => {
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
    
     
            
            {reviews.map((item, index) => {
          return (
            <>
           
              {(item.idproducto === parseInt(id)) ?(
                     <h1>item:{item.review}</h1>
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
