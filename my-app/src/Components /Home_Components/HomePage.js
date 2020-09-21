import React from "react";
import { useHistory } from "react-router-dom";
//Material Ui Imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const HomePage = () => {
  const history = useHistory();
  const classes = useStyles;
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <br></br>
        <br></br>
        <Container maxWidth="">
          <Typography component="div" variant="h3" colorPrimary>
            Get Moving With Anywhere Fitness
          </Typography>
          <Typography component="div" variant="h5" colorSecondary>
            Anytime Any Place
          </Typography>
        </Container>
        <Button variant="contained" color="primary" size="large">
          Primary
        </Button>
      </React.Fragment>
    </div>
  );
};

export default HomePage;
