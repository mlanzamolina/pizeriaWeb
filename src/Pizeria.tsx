import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Pizeria() {
  return (
    <div className="cover">
      <div>
   
      </div>
       
      <div className="cont">
      <h1 >Top 4</h1> 
        <div className="itemBoxGrid">
          {/* Para realizar una orden hacer un number box input type despues solo multiplicar cant por precio para sacar subtotal*/}

          <div>
            <img src="img/PizzaPepperoni.JPG" alt="pizza pepperoni"></img>
            <br />
            <div className="itemBox">
              <label>1. Pepperoni</label>
            </div>
          </div>

          <div>
            <img src="img/PizzaJamon.JPG" alt="pizza jamon"></img>
            <br />
            <div className="itemBox">
              <label>2. Jamon</label>
            </div>
          </div>

          <div>
            <img src="img/pizzaH.JPG" alt="pizza hawaiana"></img>
            <br />
            <div className="itemBox">
              <label>3. Hawaiana</label>
            </div>
          </div>

          <div>
            <img src="img/pizzaCh.png" alt="pizza chorizo"></img>
            <br />
            <div className="itemBox">
              <label>4. Chorizo</label>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
