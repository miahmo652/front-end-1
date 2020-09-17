import React, { useState } from "react";


function Login(){

    const [user, setUser]= useState({
        username: "",
        password: "",

    })




    return(
        <div className="App">

            <h3>Login</h3>
            <form>
                <label htmlFor="username">User Name: </label>
                <input
                    type="text"
                    placeholder="Enter User Name"
                    name="username"
                    value={user.username}
                    />
                <br/>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={user.password}
                    />

                <br/>    

                 <button type="submit">Submit</button>   

            </form>

        </div>
        

    )
}

export default Login;