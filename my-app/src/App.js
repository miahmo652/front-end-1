import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Material ui imports
import { ThemeProvider } from "@material-ui/core";

// Component Imports
import HomePage from "./Components /Home_Components/HomePage";
import Theme from "./Components /Home_Components/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact="/" component={HomePage} />
            <Route exact="/users" />
            <Route exact="/register" />
            <Route exact="/Login" />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
