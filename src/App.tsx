import React from "react";
import Pizeria from "./Pizeria";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./components/Order";
import Login from "./components/Login";
import Chat from "./components/Chat";

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
            <Login />
          </Route>
          <Route path="/Chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
