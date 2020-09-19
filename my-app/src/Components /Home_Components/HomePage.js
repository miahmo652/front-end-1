import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="">
          <Typography component="div">
            Get Moving With Anywhere Fitness
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default HomePage;
