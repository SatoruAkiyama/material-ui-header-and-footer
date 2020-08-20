import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "120vh",
    opacity: 0,
    animation: "$fade-in 1s forwards",
  },
  "@keyframes fade-in": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Grid container direction="column">
        <Typography variant="h1">
          Material UI.
          <br />
          Header and Footer setup.
          <br />
          Home Page
        </Typography>
      </Grid>
    </Container>
  );
};

export default HomePage;
