import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import MyPicture from "../assets/ahmed-circle.png";
import ParticlesAnimation from "./ParticlesAnimation";
import InformationText from "./InformationText";
import NavBar from "./NavBar";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    position: "relative",
    zIndex: "100",
  },
  textImageContainer: {
    width: "76%",
    margin: "0px 12%",
    marginTop: "80px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  picture: {
    width: "auto",
    height: "190px",
    border: "10px solid #1c2d41",
    boxShadow: "7px 4px 4px 5px rgba(111, 106, 106, 0.25)",
    borderRadius: "50%",
    margin: "auto",
  },
});

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={classes.container}>
      <ParticlesAnimation />
      <NavBar />
      <Grid
        xs={12}
        container
        direction="row"
        justify="space-between"
        className={classes.textImageContainer}
      >
        <img src={MyPicture} className={classes.picture} />
        <div className={classes.textContainer}>
          <Typography
            align="center"
            variant="h2"
            style={{
              fontWeight: "bold",
              fontSize: extraSmall ? "1.5em" : small ? "2.5em" : "3.1em",
              marginTop: "35px",
            }}
            color="textPrimary"
          >
            Hello, I’m Ahmed.
          </Typography>
          <Typography
            align="center"
            variant="h2"
            style={{
              fontWeight: "bold",
              fontSize: extraSmall ? "0.8" : small ? "1em" : "1.7em",
              marginTop: "20px",
              padding: 0,
              width: "100%",
            }}
            color="textPrimary"
          >
            I’m a third year software engineering student at the Univeristy of
            Calgary.
          </Typography>
        </div>
      </Grid>
      <InformationText />
    </div>
  );
};

export default About;
