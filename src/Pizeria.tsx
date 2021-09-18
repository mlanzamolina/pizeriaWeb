import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Pizeria() {
    return (
     <div className="cover">
        <div>
        <Header></Header>
        </div>

        <div className="cont">

          <div className="itemBoxGrid">

            {/* Para realizar una orden hacer un number box input type despues solo multiplicar cant por precio para sacar subtotal*/}

            <div>
              <img src="img/PizzaPepperoni.JPG" alt="pizza pepperoni"></img>
              <br />
              <div className="itemBox">
                <input type="checkbox" id="PizzaPepperoni" name="PizzaPepperoni" className="checkbox-round"></input>
                <label>Pizza Pepperoni</label>
              </div>

            </div>

            <div>
              <img src="img/PizzaJamon.JPG" alt="pizza jamon"></img>
              <br />
              <div className="itemBox">
                <input type="checkbox" id="PizzaJamon" name="PizzaJamon" className="checkbox-round"></input>
                <label>Pizza Jamon</label></div>
            </div>

            <div>
              <img src="img/pizzaH.JPG" alt="pizza hawaiana"></img>
              <br />
              <div className="itemBox">
                <input type="checkbox" id="PizzaH" name="PizzaH" className="checkbox-round"></input>
                <label>Pizza hawaiana</label></div>
            </div>

            <div>
              <img src="img/pizzaCh.png" alt="pizza chorizo"></img>
              <br />
              <div className="itemBox">
                <input type="checkbox" id="PizzaChorizo" name="PizzaChorizo" className="checkbox-round"></input>
                <label>Pizza chorizo</label></div>
            </div>

          </div>

        </div>


     
      <Footer></Footer> 
      </div>


    )
}
