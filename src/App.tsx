import React, { useState } from 'react';
import Pizeria from "./Pizeria";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./components/Order";
import Login from "./components/Login";
import Chat from "./components/Chat";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

function App() {
 
  return (
    <Router>
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
              <Login  />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
