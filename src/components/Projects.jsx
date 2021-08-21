import React, { useState, useEffect } from "react";
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  IconButton,
  Dialog,
  DialogContent,
  Grow,
} from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import ProjectTile2 from "./ProjectTile2";
import Zoomtify from "../assets/zoomtify.svg";
import SCM from "../assets/supply-chain-management.svg";
import pachat from "../assets/pachat.svg";
import ResumeRater from "../assets/resumetracker.png";
import FacialRecognition from "../assets/facial-recognition.svg";
import "./projects.scss";

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} timeout={1000} />;
});

const ProjectImage = ({ image, index, currentSlide, children }) => {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showClass, setShowClass] = useState(false);
  const [openingAction, setOpeningAction] = useState(false);

  useEffect(() => {
    if (!dialogOpen) {
      setTimeout(function () {
        setShowClass(dialogOpen);
      }, 600);
      setTimeout(function () {
        setOpeningAction(dialogOpen);
      }, 1600);
    } else {
      setShowClass(dialogOpen);
      setOpeningAction(dialogOpen);
    }
  }, [dialogOpen]);

  return (
    <>
      <img
        alt="project demo"
        className={`project-item ${
          dialogOpen || (!dialogOpen && showClass)
            ? "open-project-item"
            : (!dialogOpen && !showClass && openingAction) ||
              currentSlide === index
            ? "close-dialog"
            : ""
        }`}
        style={{
          borderRadius: "20px",
          width: extraSmall ? "70vw" : small ? "50vw" : "33vw",
        }}
        src={image}
        onClick={() => setDialogOpen(true)}
      />
      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        onClose={() => setDialogOpen(false)}
        PaperProps={{
          style: {
            boxShadow: "0px 2px 16px 7px #A0A0A0",
            background: "#10042c",
          },
        }}
      >
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};

const Projects = () => {
  const classes = useStyles();
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSlideChange = (forward) => {
    if (forward) {
      if (goToSlide === slides.length - 1) {
        setGoToSlide(0);
      } else {
        setGoToSlide((prevState) => prevState + 1);
      }
    } else {
      if (goToSlide === 0) {
        setGoToSlide(slides.length - 1);
      } else {
        setGoToSlide((prevState) => prevState - 1);
      }
    }
  };

  // const oldSlides = [
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <ProjectTile
  //         title="Zoomtify"
  //         titleColor={["#EF0D0D", "#000000"]}
  //         stack="Django, Python, React, TypeScript"
  //         description="A web application where you can save your meetings instead of them getting burried in your inbox, stores a list of your contacts and allows you to send meeting details and your schedule to your room mates or any of your contacts on whatsapp"
  //       />
  //     ),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <ProjectTile
  //         title="Facial Expressions Recognition"
  //         titleColor={["#000000"]}
  //         stack="Tensorflow, Python"
  //         description="A convolutional neural network using running time as a satisficing metric for real-time facial expressions analysis"
  //       />
  //     ),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <ProjectTile
  //         title="Pachat"
  //         titleColor={["#000000"]}
  //         stack="GraphQL, AWS AppSync, AWS Amplify, React ,and Redux"
  //         description="A real-time chat application having similar functionalities to Whatsapp where users can add other users and start a chat with them, change profile picture and status etc"
  //       />
  //     ),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <ProjectTile
  //         title="Supply Chain Management"
  //         titleColor={["#000000"]}
  //         stack="Java, SQL"
  //         description="An application that can manage the flow of office furniture on campus to help the univeristy reuse parts of furninture to create new furniture at the lowest prices"
  //       />
  //     ),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <ProjectTile
  //         title="Solar Car Race Dashboard"
  //         titleColor={["#000000"]}
  //         stack="C++, QT, QML"
  //         description="A car dashboard "
  //       />
  //     ),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <ProjectTile
  //         title="Resume Rater"
  //         titleColor={["#000000"]}
  //         stack="Django, Python, React, Javascript"
  //         description="A web application that takes a pdf resume, gives it a score and gives the reasons behind a score lower than 100 with feedback to improve them"
  //       />
  //     ),
  //   },
  // ];
  const slides = [
    {
      key: uuidv4(),
      content: (
        <ProjectImage image={Zoomtify} currentSlide={goToSlide} index={0}>
          <ProjectTile2
            title="Zoomtify"
            titleColor={["#EF0D0D", "#000000"]}
            stack="Django, Python, React, TypeScript"
            description="A web application where you can save your meetings instead of them getting burried in your inbox, stores a list of your contacts and allows you to send meeting details and your schedule to your room mates or any of your contacts on whatsapp"
            githubUrl={[
              "https://github.com/Ahmed-I-Abdullah/zoomtify-front-end",
              "https://github.com/Ahmed-I-Abdullah/zoomtify-rest-api",
            ]}
          />
        </ProjectImage>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectImage image={SCM} currentSlide={goToSlide} index={1}>
          <ProjectTile2
            title="Supply Chain Management"
            titleColor={["#000000"]}
            stack="Java, SQL"
            description="An application that can manage the flow of office furniture on campus to help the univeristy reuse parts of furninture to create new furniture at the lowest prices"
            githubUrl={[
              "https://github.com/Ahmed-I-Abdullah/supply-chain-managment-application",
            ]}
          />
        </ProjectImage>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectImage image={pachat} currentSlide={goToSlide} index={2}>
          <ProjectTile2
            title="Pachat"
            titleColor={["#000000"]}
            stack="GraphQL, AWS AppSync, AWS Amplify, React ,and Redux"
            description="A real-time chat application having similar functionalities to Whatsapp where users can add other users and start a chat with them, change profile picture and status etc"
            githubUrl={["https://github.com/Ahmed-I-Abdullah/pachat"]}
          />
        </ProjectImage>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectImage image={ResumeRater} currentSlide={goToSlide} index={3}>
          <ProjectTile2
            title="Resume Rater"
            titleColor={["#000000"]}
            stack="Django, Python, React, Javascript"
            description="A web application that takes a pdf resume, gives it a score and gives the reasons behind a score lower than 100 with feedback to improve them"
            githubUrl={[
              "https://github.com/Tech-Start-UCalgary/ResumeTrackerApp",
            ]}
          />
        </ProjectImage>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ProjectImage
          image={FacialRecognition}
          currentSlide={goToSlide}
          index={4}
        >
          <ProjectTile2
            title="Facial Expressions"
            titleColor={["#000000"]}
            stack="TensorFlow, Python"
            description="A convolutional neural network for facial expressions recognition, inspired to integrate it with online lectures to give feedback to professors on improving their pedagogical approaches"
            githubUrl={[
              "https://github.com/Ahmed-I-Abdullah/real-time-facial-expressions-recognition",
            ]}
          />
        </ProjectImage>
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
            marginBottom: extraSmall ? "30px" : "0px",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: extraSmall ? "260px" : small ? "350px" : "400px",
          margin: "0 auto",
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={false}
          animationConfig={config.gentle}
        />
        <div>
          <IconButton
            onClick={() => handleSlideChange(false)}
            color="primary"
            component="span"
          >
            <ArrowBackIos style={{ fontSize: "1.7em" }} />
          </IconButton>
          <IconButton
            onClick={() => handleSlideChange(true)}
            color="primary"
            component="span"
          >
            <ArrowForwardIos style={{ fontSize: "1.7em" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Projects;
