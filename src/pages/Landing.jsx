import React from "react";
import {
  makeStyles,
  Fade,
} from "@material-ui/core";
import TimeLine from "../components/TimeLine";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import About from "../components/About";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "100vh",
  },
  mainContainer2: {
    width: "100%",
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        background: "linear-gradient(to right, #8e9eab, #eef2f3)",
        overflowX: "hidden",
      }}
    >
      <Fade in={true} timeout={3000}>
        <div className={classes.mainContainer}>
          <div>
            <About />
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
