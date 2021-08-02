import React, { useState } from "react";
import { makeStyles, useMediaQuery, useTheme, Button ,IconButton} from "@material-ui/core";
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import ProjectTile from "./ProjectTile";

const useStyles = makeStyles({
  mainContainer: {
    width: "76%",
    margin: "0px 12%",
    paddingBottom: 120,
  },
  skillsContainer: {
    display: "flex",
    overflow: "hidden",
  },
  item: {
    height: 210,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Projects = () => {
  const classes = useStyles();
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const large = useMediaQuery(theme.breakpoints.down("lg"));

  const handleSlideChange = (forward) => {
    if(forward) {
      setGoToSlide(prevState => prevState + 1);
    } else {
      setGoToSlide(prevState => prevState - 1);
    }
  }
  const slides = [
    {
      key: uuidv4(),
      content: (
        <ProjectTile
          title="Zoomtify"
          titleColor={["#EF0D0D", "#000000"]}
          stack="Django, Python, React, TypeScript"
          description="A web application where you can save your meetings instead of them getting burried in your inbox, stores a list of your contacts and allows you to send meeting details and your schedule to your room mates or any of your contacts on whatsapp"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectTile
          title="Facial Expressions Recognition"
          titleColor={["#000000"]}
          stack="Tensorflow, Python"
          description="A convolutional neural network using running time as a satisficing metric for real-time facial expressions analysis"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectTile
          title="Pachat"
          titleColor={["#000000"]}
          stack="GraphQL, AWS AppSync, AWS Amplify, React ,and Redux"
          description="A real-time chat application having similar functionalities to Whatsapp where users can add other users and start a chat with them, change profile picture and status etc"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectTile
          title="Supply Chain Management"
          titleColor={["#000000"]}
          stack="Java, SQL"
          description="An application that can manage the flow of office furniture on campus to help the univeristy reuse parts of furninture to create new furniture at the lowest prices"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectTile
          title="Solar Car Race Dashboard"
          titleColor={["#000000"]}
          stack="C++, QT, QML"
          description="A car dashboard "
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectTile
          title="Resume Rater"
          titleColor={["#000000"]}
          stack="Django, Python, React, Javascript"
          description="A web application that takes a pdf resume, gives it a score and gives the reasons behind a score lower than 100 with feedback to improve them"
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  return (
    <div id="projects" className={classes.mainContainer}>
      <div>
        <h1 style={{ paddingTop: "60px", color: "#fffffe" }}>Projects</h1>
        <hr
          style={{
            color: "#ff8906",
            width: "10em",
            border: "4px solid",
            borderRadius: "5px",
            marginBottom: extraSmall ? '30px' : '0px'
          }}
        />
      </div>
      <div style={{ width: "100%", height: extraSmall ? "570px" : small?  "460px" : "400px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={false}
          animationConfig={config.gentle}
        />
        <div>
        <IconButton onClick={() => handleSlideChange(false)} color="primary"  component="span">
          <ArrowBackIos style={{fontSize: '1.7em'}} />
        </IconButton>
        <IconButton onClick={() => handleSlideChange(true)} color="primary" component="span">
          <ArrowForwardIos style={{fontSize: '1.7em'}} />
        </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Projects;
