import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import ComputerIcon from "@material-ui/icons/Computer";
import SchoolIcon from "@material-ui/icons/School";
import "./timeline.css";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import who from "../assets/who.png";
import aranite from "../assets/aranite.png";
import solarcar from "../assets/solar-car.png";
import techstart from "../assets/tech-start.png";
import ucalgary from "../assets/ucalgary.png";
import arabacademy from "../assets/arab-academy.png";

const TimeLine = () => {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div style={extraSmall ? {padding: '0px 5%'} : {}} id="experience">
      <div>
        <h1 style={{ paddingTop: "60px", color: "#fffffe" }}>Experience</h1>
        <hr
          style={{
            color: "#ff8906",
            width: "15em",
            border: "4px solid",
            borderRadius: "5px",
            marginBottom: "80px",
          }}
        />
      </div>
      <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#3A3A3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
          date="July 2021 - Present"
          dateClassName="date"
          iconStyle={{ background: "#3c95d1", color: "#fff" }}
          icon={<DeveloperModeIcon />}
        >
          <Grid item container>
            <Grid xs={12} sm={2}>
              <img alt="who" src={who} style={{ width: "80px" }}></img>
            </Grid>
            <Grid xs={10}>
              <Typography
                align="left"
                variant="h2"
                style={{
                  paddingLeft: "20px",
                  fontWeight: "bold",
                  color: "#3A3A3A",
                  fontSize: extraSmall ? "1.0em" : "1.2em",
                }}
              >
                Full Stack Developer @ World Health Organization through Develop
                For Good
              </Typography>
              <Typography
                align="left"
                variant="body2"
                style={{
                  paddingLeft: "20px",
                  color: "#3A3A3A",
                }}
              >
                I worked on both the front-end and backend of a mobile
                application called Washfit using React, Ionic, Redux, and
                firebase.
              </Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#3A3A3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
          date="May 2021 - September 2021"
          dateClassName="date"
          iconStyle={{ background: "#f08c40", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <Grid item container>
            <Grid xs={12} sm={2}>
              <img alt="aranite" src={aranite} style={{ width: "80px" }}></img>
            </Grid>
            <Grid xs={10}>
              <Typography
                align="left"
                variant="h2"
                style={{
                  paddingLeft: "20px",
                  fontWeight: "bold",
                  color: "#3A3A3A",
                  fontSize: extraSmall ? "1.0em" : "1.2em",
                }}
              >
                Full Stack Developer @ Aranite
              </Typography>
              <Typography
                align="left"
                variant="body2"
                style={{
                  paddingLeft: "20px",
                  color: "#3A3A3A",
                }}
              >
                I worked on three different projects during my time at Aranite.
                Two of which were web applications using React and AWS and one
                mobile application using React Native and AWS.
              </Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#3A3A3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
          date="October 2020 - Present"
          dateClassName="date"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<DriveEtaIcon />}
        >
          <Grid item container>
            <Grid xs={12} sm={2}>
              <img
                alt="solar car"
                src={solarcar}
                style={{ width: "80px" }}
              ></img>
            </Grid>
            <Grid xs={10}>
              <Typography
                align="left"
                variant="h2"
                style={{
                  paddingLeft: "20px",
                  fontWeight: "bold",
                  color: "#3A3A3A",
                  fontSize: extraSmall ? "1.0em" : "1.2em",
                }}
              >
                Visual Communications Team Member @ University of Calgary Solar
                Car Team
              </Typography>
              <Typography
                align="left"
                variant="body2"
                style={{
                  paddingLeft: "20px",
                  color: "#3A3A3A",
                }}
              >
                I got introduced to Angular and other frameworks at the
                University of Calgary Solar Car Team. Currently, I am working on
                developing the new car's dashboard using Qt and QML for the
                front-end and C++ for the back-end.
              </Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#3A3A3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
          date="January 2021 - May 2021"
          dateClassName="date"
          iconStyle={{ background: "#8fdc63", color: "#fff" }}
          icon={<ComputerIcon />}
        >
          <Grid item container>
            <Grid xs={12} sm={2}>
              <img
                alt="tech-start"
                src={techstart}
                style={{ width: "80px" }}
              ></img>
            </Grid>
            <Grid xs={10}>
              <Typography
                align="left"
                variant="h2"
                style={{
                  paddingLeft: "20px",
                  fontWeight: "bold",
                  color: "#3A3A3A",
                  fontSize: extraSmall ? "1.0em" : "1.2em",
                }}
              >
                Front-end Developer @ Tech Start UCalgary
              </Typography>
              <Typography
                align="left"
                variant="body2"
                style={{
                  paddingLeft: "20px",
                  color: "#3A3A3A",
                }}
              >
                I worked with a team of developer to make a resume rater
                application that rates the quality of the resume provided and
                gives feedback and improvement suggestions.
              </Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#3A3A3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
          date="September 2019 - Present"
          dateClassName="date"
          iconStyle={{ background: "#ebbe04", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <Grid item container>
            <Grid xs={12} sm={2}>
              <img
                alt="ucalgary"
                src={ucalgary}
                style={{ width: "80px" }}
              ></img>
            </Grid>
            <Grid xs={10}>
              <Typography
                align="left"
                variant="h2"
                style={{
                  paddingLeft: "20px",
                  fontWeight: "bold",
                  color: "#3A3A3A",
                  fontSize: extraSmall ? "1.0em" : "1.2em",
                }}
              >
                Software Engineering Student @ University of Calgary
              </Typography>
              <Typography
                align="left"
                variant="body2"
                style={{
                  paddingLeft: "20px",
                  color: "#3A3A3A",
                }}
              >
                GPA: 3.988/4.0
                <br />
                Deans List 2019 - 2021
              </Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#3A3A3A" }}
          contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
          date="January 2016 - June 2019"
          dateClassName="date"
          iconStyle={{ background: "#142961", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <Grid item container>
            <Grid xs={12} sm={2}>
              <img
                alt="arab academy"
                src={arabacademy}
                style={{ width: "80px" }}
              ></img>
            </Grid>
            <Grid xs={10}>
              <Typography
                align="left"
                variant="h2"
                style={{
                  paddingLeft: "20px",
                  fontWeight: "bold",
                  color: "#3A3A3A",
                  fontSize: extraSmall ? "1.0em" : "1.2em",
                }}
              >
                Student @ Arab Academy for Science, Technology & Maritime
                Transport
              </Typography>
              <Typography
                align="left"
                variant="body2"
                style={{
                  paddingLeft: "20px",
                  color: "#3A3A3A",
                }}
              ></Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
