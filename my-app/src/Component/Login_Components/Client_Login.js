import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 40%;
  margin: 0 auto;
  border-radius: 1.5rem;
  background-color: #d6d5c9;
  box-shadow: 2px 2px #d88144;
  color: #2e2e2e;
  font-size: 1.5rem;
  font-weight: bold;
`;


const Input = styled.input`
  width: 50%;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  border-box: 1px solid, black;
  border-radius: 5px;
  text-allign: justify;

  
  `;

function ClientLogin(){

    const [client, setClient]= useState({
        username: "",
        password: "",

    })

    //setting up function to enter username and password
    const handleChange = event => {
        setClient({...client, [event.target.name]: event.target.value});
    }



    return(
        <div className="App">

            <h3>Client Login</h3>
            <form>
                <label htmlFor="username">User Name: </label>
                <Input
                    type="text"
                    placeholder="Enter User Name"
                    name="username"
                    value={client.username}

                    //added onChange to take input for username
                    onChange={handleChange}
                    />
                <br/>
                <label htmlFor="password">Password: </label>
                <Input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={client.password}

                    //added onChange to take input for username
                    onChange={handleChange}
                    />

                <br/>    

                 <Button type="submit">Submit</Button>   

            </form>

        </div>
        

    )
}

export default ClientLogin;