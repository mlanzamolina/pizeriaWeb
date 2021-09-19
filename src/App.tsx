import React, { useState } from 'react';
import Pizeria from "./Pizeria";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./components/Order";
import Login from "./components/Login";
import Chat from "./components/Chat";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from './components/Reviews';
import Carrito from './components/Carrito';
import Header from './components/Header';
import AddReview from './components/AddReview';

function App() {
 
  return (
    <><Header></Header><Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Pizeria />
          </Route>
          <Route path="/Order">
            <Order />
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
          <Route path="/Carrito/:id">
            <Carrito />
          </Route>
        </Switch>
      </div>
    </Router></>
  );
}

export default App;
