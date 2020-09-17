import React, { useState } from "react";


function ClientLogin(){

    const [client, setClient]= useState({
        username: "",
        password: "",

    })




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
                    />
                <br/>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={client.password}
                    />

                <br/>    

                 <button type="submit">Submit</button>   

            </form>

        </div>
        

    )
}

export default ClientLogin;