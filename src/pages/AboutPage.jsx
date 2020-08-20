import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "120vh",
    marginTop: "4em",
    opacity: 0,
    animation: "$fade-in 1s forwards",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
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

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Grid container direction="column">
        <Typography variant="h1">
          Material UI.
          <br />
          Header and Footer setup.
          <br />
          ABout Page
        </Typography>
      </Grid>
    </Container>
  );
};

export default AboutPage;
