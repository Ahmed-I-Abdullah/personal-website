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
import About2 from "../components/About2";

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
        background: "#0f0e17",
        overflowX: "hidden",
      }}
    >
      <Fade in={true} timeout={3000}>
        <div className={classes.mainContainer}>
          <div>
            <About2 />
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
