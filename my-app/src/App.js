import React from 'react';
import logo from './logo.svg';
import './App.css';
import InstructorLogin from "./Components/Instructor_login";
import ClientLogin from './Components/Client_Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>ANYWHERE FITNESS</h1>
       

        <InstructorLogin/>

        <ClientLogin/>
      

      </header>
    </div>
  );
}

export default App;
