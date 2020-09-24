import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClientRegistration from "./Components/Client_Registration";
import ClientLogin from './Components/Client_Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>ANYWHERE FITNESS</h1>
       

        <ClientRegistration/>

        <ClientLogin/>
      

      </header>
    </div>
  );
}

export default App;
