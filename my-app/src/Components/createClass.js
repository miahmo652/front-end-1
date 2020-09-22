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

    // funtion to handle changes

    const handleChanges = e => {
        setNewClass({...newClass, [e.target.natme]: e.target.value})
    };

    return (
        <div>
            <h3>Create New Class</h3>
            <form>
                <input
                    placeholder="Name"
                    name="name"
                    id="name"
                    onChange={handleChanges}
                    />

                <br/>
                <input
                    placeholder="Class Type"
                    name="type"
                    id="type"
                    onChange={handleChanges}
                />
                <br/>

                <input
                    placeholder="Start Time"
                    name="start_time"
                    id="start_time"
                    onChange={handleChanges}
                />
                <br/>

                <input
                    placeholder="Duration"      
                    name="duration"
                    id="duration"
                    onChange={handleChanges}
                />

                <br/>

                <input
                    placeholder="Intensity"
                    name="intensity"
                    id="intensity"
                    onChange={handleChanges}
                />

                <br/>

                <input 
                    placeholder="Location"
                    name="location"
                    id="location"
                    onChange={handleChanges}
                />

                <br/>

                <input
                    placeholder="Number of Registered Users"
                    name="registered"
                    id="registered"
                    onChange={handleChanges}
                />

                <br/>

                <input
                    placeholder="Max Class Size"
                    name="max_size"
                    id="max_size"
                    onChange={handleChanges}
                />

                <br/>

                <button>Add New Class</button>



            </form>

        </div>
    )
}

export default createClass;