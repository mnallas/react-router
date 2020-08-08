import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <h1>Hello from Home</h1>
          </Route>
          <Route exact path="/about">
            <h1>Hello from About</h1>
          </Route>
          <Route exact path="/contact" component={Form} />
          <Route exact path="/contact">
            <h1>Hello from Contact</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
