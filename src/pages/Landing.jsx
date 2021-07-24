import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Grid, Typography, makeStyles, Fade, Button } from "@material-ui/core";
import MyPicture from "../assets/ahmed-circle.png";
import TimeLine from "../components/TimeLine";
import Skills from "../components/Skills";
import ParticlesAnimation from "../components/ParticlesAnimation";

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
    border: "10px solid #fff",
    boxShadow: "7px 4px 4px 5px rgba(111, 106, 106, 0.25)",
    borderRadius: "50%",
  },
});
const Landing = () => {
  const classes = useStyles();
  return (
      <div style={{background:
      "#E7EDD1"}}>
        <Fade in={true} timeout={3000}>
        <div className={classes.mainContainer}>
          <div>
            <div style={{ minHeight: "100vh", position: 'relative', zIndex: '100' }}>
            <ParticlesAnimation />
              <NavBar />
              <Grid
                xs={12}
                container
                direction="row"
                justify="space-between"
                className={classes.textImageContainer}
              >
                <Grid
                  sm={8}
                  xs={12}
                  justifty="flex-start"
                  item
                  alignItems="flex-start"
                >
                  <Typography
                    align="left"
                    variant="h2"
                    style={{
                      fontWeight: "bold",
                      color: "#3A3A3A",
                      fontSize: "4.7em",
                    }}
                  >
                    Hello, I’m Ahmed.
                  </Typography>
                  <Typography
                    align="left"
                    variant="h2"
                    style={{
                      fontWeight: "bold",
                      color: "#3A3A3A",
                      fontSize: "3.2em",
                      marginTop: "10px",
                    }}
                  >
                    I’m a fullstack and machine learning developer.
                  </Typography>
                  <Typography
                    align="left"
                    style={{
                      color: "#3A3A3A",
                      fontSize: "1.4em",
                      marginTop: "50px",
                    }}
                  >
                    My values are{" "}
                    <span style={{ fontWeight: "bold" }}>achievement</span>,{" "}
                    <span style={{ fontWeight: "bold" }}>integrity</span>,{" "}
                    <span style={{ fontWeight: "bold" }}>curiosity</span> and{" "}
                    <span
                      style={{ fontWeight: "bold" }}
                      style={{ fontWeight: "bold" }}
                    >
                      empathy
                    </span>
                    . These values are important to the way I live and work.
                  </Typography>
                </Grid>
                <Grid xs={4} item>
                  <img src={MyPicture} className={classes.picture} />
                </Grid>
              </Grid>
              <Grid
                container
                justifty="flex-start"
                alignItems="flex-start"
                style={{ width: "76%", margin: "0px 12%", marginTop: "50px" }}
              >
                <Button
                  size="large"
                  variant="contained"
                  style={{ backgroundColor: "#ACBB78", marginRight: "30px", padding: "15px 30px" }}
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
          <div className={classes.mainContainer2} style={{position: 'relative'}}>
            <div >
              <h1 style={{ paddingTop: "60px" }}>Work Experience</h1>
              <hr
                style={{
                  color: "#222831",
                  width: "15em",
                  border: "4px solid",
                  borderRadius: "5px",
                  marginBottom: "80px",
                }}
              />
            </div>
            <TimeLine />
          </div>
          <Skills />
        </div>
        </Fade>
      </div>
  );
};

export default Landing;
