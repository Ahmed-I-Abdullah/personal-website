import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import {
  Grid,
  Typography,
  makeStyles,
  Fade,
  Button,
  useTheme,
} from "@material-ui/core";
import MyPicture from "../assets/ahmed-circle.png";
import TimeLine from "../components/TimeLine";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ParticlesAnimation from "../components/ParticlesAnimation";
import ContactMe from "../components/ContactMe";
import InformationText from "../components/InformationText";
import Footer from "../components/Footer";
import Sky from 'react-sky';
import Stars from '../assets/stars.svg';
import Test from '../assets/test-background.svg';


const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "100vh",
  },
  mainContainer2: {
    width: "100%",
  },
  textImageContainer: {
    width: "76%",
    margin: "0px 12%",
    marginTop: "100px",
  },
  picture: {
    width: "auto",
    height: "300px",
    border: "10px solid #1c2d41",
    boxShadow: "7px 4px 4px 5px rgba(111, 106, 106, 0.25)",
    borderRadius: "50%",
  },
});

const Landing = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div style={{ background: "linear-gradient(to right, #8e9eab, #eef2f3)", overflowX: "hidden" }}>
      <Fade in={true} timeout={3000}>
        <div className={classes.mainContainer}>
          <div>
            <div
              style={{
                minHeight: "100vh",
                position: "relative",
                zIndex: "100",
              }}
            >
              <ParticlesAnimation />
              <NavBar />
              <Grid
                xs={12}
                container
                direction="row"
                justify="space-between"
                className={classes.textImageContainer}
              >
                <Grid sm={8} xs={12} justifty="flex-start" item>
                  <Typography
                    align="left"
                    variant="h2"
                    style={{
                      fontWeight: "bold",
                      fontSize: "4.4em",
                    }}
                    color="textPrimary"
                  >
                    Hello, I’m Ahmed.
                  </Typography>
                  <Typography
                    align="left"
                    variant="h2"
                    style={{
                      fontWeight: "bold",
                      fontSize: "2.8em",
                      marginTop: "10px",
                    }}
                    color="textPrimary"
                  >
                    I’m a third year software engineering student at the
                    Univeristy of Calgary.
                  </Typography>
                  <InformationText />
                </Grid>
                <Grid xs={4} item>
                  <img src={MyPicture} className={classes.picture} />
                </Grid>
              </Grid>
              <Grid
                container
                justifty="flex-start"
                alignItems="flex-start"
                style={{ width: "76%", margin: "0px 12%", marginTop: "20px" }}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "30px",
                    padding: "15px 30px",
                  }}
                >
                  Resume
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  style={{ padding: "15px 30px" }}
                >
                  Contact
                </Button>
              </Grid>
            </div>
          </div>
          <div
            className={classes.mainContainer2}
            style={{ position: "relative" }}
          >
            <TimeLine />
          </div>
          <div>
            <Skills />
            <Projects />
            <ContactMe />
          </div>
          <Footer />
        </div>
      </Fade>
    </div>
  );
};

export default Landing;
