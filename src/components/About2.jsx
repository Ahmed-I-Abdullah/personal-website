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
import NavBar2 from "./NavBar2";
import './fonts.css';

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
    height: '100vh'
  },
  textImageContainer: {
    width: "76%",
    margin: "0px 12%",
    marginTop: "80px",
    display: 'flex'
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
    height: "170px",
    borderRadius: "50%",
    margin: "0 auto",
  },
});

const About2 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={classes.container}>
      <ParticlesAnimation />
      <NavBar2 />
      
      <div id="about" className={classes.innerDiv}>
          <h1 style={{fontFamily: 'Indie Flower, cursive',color: '#fffffe', fontSize: '4.5em'}}>Hello, I'm <span style={{color: '#ff8906'}}>Ahmed Abdullah</span></h1>

        <h2 style={{color: '#fffffe'}}>I’m a third year software engineering student at the Univeristy of
            Calgary.</h2>
            <InformationText />
      </div>
    </div>
  );
};

export default About2;
