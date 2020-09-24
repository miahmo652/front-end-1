import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

// Material ui imports
import { ThemeProvider } from "@material-ui/core";

// Component Imports
import HomePage from "./Components /Home_Components/HomePage";
import Theme from "./Components /Home_Components/Theme";
import RegistrationForm from "./Components /Login_Components/Registration";
import LoginForm from "./Components /Login_Components/Login";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" />
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/Login" component={LoginForm} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
