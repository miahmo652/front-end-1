import React, { useState } from "react";


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
                <input
                    type="text"
                    placeholder="Enter User Name"
                    name="username"
                    value={client.username}

                    //added onChange to take input for username
                    onChange={handleChange}
                    />
                <br/>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={client.password}

                    //added onChange to take input for username
                    onChange={handleChange}
                    />

                <br/>    

                 <button type="submit">Submit</button>   

            </form>

        </div>
        

    )
}

export default ClientLogin;