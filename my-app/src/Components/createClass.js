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

}

export default createClass;