import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components /Home_Components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact="/" component={HomePage} />
          <Route exact="/users" />
          <Route exact="/register" />
          <Route exact="/Login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
