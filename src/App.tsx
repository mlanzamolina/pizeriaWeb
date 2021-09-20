import React, { useState } from "react";
import Pizeria from "./Pizeria";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./components/Order";
import Login from "./components/Login";
import Chat from "./components/Chat";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import Reviews from "./components/Reviews";
import Carrito from "./components/Carrito";
import Header from "./components/Header";
import AddReview from "./components/AddReview";
import Admin from "./components/Admin";
import AddPizza from "./components/AddPizza";
import Register from "./components/Register";

function App() {
  const [profileMain, setprofileMain] = useState<string>();
  return (
    <>
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Pizeria />
            </Route>
            <Route path="/Order">
              <Order />
            </Route>
            <Route path="/Admin">
              <Admin />
            </Route>
            <Route path="/Login">
              <div className="g-signin">
                <Login />
              </div>
            </Route>
            <Route path="/Chat">
              <Chat />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/Reviews/:id">
              <Reviews />
            </Route>
            <Route path="/AddReview/:id">
              <AddReview />
            </Route>
            <Route path="/Carrito">
              <Carrito />
            </Route>
            <Route path="/AddPizza">
              <AddPizza />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
