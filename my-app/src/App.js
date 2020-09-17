import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact="/" />
          <Route exact="/Register" />
          <Route exact="/Login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
