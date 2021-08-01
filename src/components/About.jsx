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
  },
  innerDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    height: 'calc(100vh - 150px)'
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
    height: 'calc(100% - 120px)'
  },
  picture: {
    width: "auto",
    height: "150px",
    border: "7px solid #1c2d41",
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
      <div id="about" className={classes.innerDiv}>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.textImageContainer}
      >
        <img src={MyPicture} alt="profile" className={classes.picture} />
        <div className={classes.textContainer}>
          <Typography
            align="center"
            variant="h2"
            style={{
              fontWeight: "bold",
              fontSize: extraSmall ? "1.5em" : small ? "2.5em" : "2.8em",
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
              fontSize: extraSmall ? "0.8" : small ? "1em" : "1.4em",
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
    </div>
  );
};

export default About;
