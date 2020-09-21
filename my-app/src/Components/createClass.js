import React, {useState} from "react";


function createClass() {
    const [newClass, setNewClass] = useState({
        name: "",
        type: "",
        start_time: "",
        duration: "",
        intensity: "",
        location: "",
        registered: 0,
        max_size: 0
    })

    return (
        <div>
            <h3>Create New Class</h3>
            <form>
                <input
                    placeholder="Name"
                    name="name"
                    id="name"
                    />

                <br/>
                <input
                    placeholder="Class Type"
                    name="type"
                    id="type"
                />
                <br/>

                <input
                    placeholder="Start Time"
                    name="start_time"
                    id="start_time"
                />
                <br/>

                <input
                    placeholder="Duration"      
                    name="duration"
                    id="duration"
                />

                <br/>

                <input
                    placeholder="Intensity"
                    name="intensity"
                    id="intensity"
                />

                <br/>

                <input 
                    placeholder="Location"
                    name="location"
                    id="location"
                />

                <br/>

                <input
                    placeholder="Number of Registered Users"
                    name="registered"
                    id="registered"
                />

                <br/>

                <input
                    placeholder="Max Class Size"
                    name="max_size"
                    id="max_size"
                />

                <br/>

                <button>Add New Class</button>



            </form>

        </div>
    )
}

export default createClass;