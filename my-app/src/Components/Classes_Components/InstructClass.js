import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const InstructorClasses = () => {
  const classes = useStyles();
  const [createClass, setCreateClass] = useState({
    id: 1,
    class_name: "",
    class_date: "",
    class_time: "",
    duration: 1,
    intensity: "",
    location: "",
    number_of_attendees: 1,
    max_class_size: 1,
  });
  return <div></div>;
};

export default InstructorClasses;
