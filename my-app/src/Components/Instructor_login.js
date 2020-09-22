import React, { useState } from "react";


function InstructorLogin(){

    const [instructor, setInstructor]= useState({
        username: "",
        password: "",
        

    })

     // setting up function to enter username and password
     const handleChange = event => {
         setInstructor({...instructor, [event.target.name]: event.target.value});
     }


    return(
        <div className="App">

            <h3>Instructor Login</h3>
            <form>
                <label htmlFor="username">User Name: </label>
                <input
                    type="text"
                    placeholder="Enter User Name"
                    name="username"
                    value={instructor.username}
                    
                    //added onChange to take input for username
                    onChange={handleChange}
                    />
                <br/>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={instructor.password}

                    //added onchange to take input for password
                    onChange={handleChange}
                    />

                <br/>    

                 <button type="submit">Submit</button>   

            </form>

        </div>
        

    )
}

export default InstructorLogin;