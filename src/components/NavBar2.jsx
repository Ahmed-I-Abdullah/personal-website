import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import {
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles({
  listItem: {
    display: "inline-block",
    margin: "0px 13px",
    cursor: "pointer",
    "&:hover": {
      "&>a": {
        color: "#ff8906",
      },
    },
  },
  listAnchor: {
    display: "inline-block",
    fontSize: "1.1em",
    color: "#fff",
    position: "relative",
    "&:after": {
      bottom: -5,
      content: "''",
      display: "block",
      height: "4px",
      left: "50%",
      position: "absolute",
      background: "#ff8906",
      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
      width: 0,
    },
    "&:hover:after": {
      width: "100%",
      left: 0,
    },
  },
  isCurrent: {
    "&>a": {
      color: "#ff8906",
      "&:after": {
        content: "''",
        width: "100%",
        bottom: -5,
        height: "4px",
        position: "absolute",
        left: 0,
        background: "#ff8906",
      },
    },
  },
});

const NavBar2 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [experience, setExperience] = useState(null);
  const [projects, setProjects] = useState(null);
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    setAbout(document.getElementById("about"));
    setContact(document.getElementById("contact"));
    setExperience(document.getElementById("experience"));
    setProjects(document.getElementById("projects"));
    setSkills(document.getElementById("skills"));
  });

  return (
    <nav
      style={{
        backgroundColor: "#2B2A32",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "10",
        padding: 0
      }}
      role="navigation"
    >
      <ul style={{width: "100%",padding: 0, margin: '0px !important'}}>
        <Scrollspy
          items={["about", "experience", "skills", "projects", "contact"]}
          currentClassName={classes.isCurrent}
          style={{padding: 0, margin: '0px !important'}}
        >
          <li
            className={classes.listItem}
            onClick={() => about?.scrollIntoView({ behavior: "smooth" })}
            style={extraSmall ? {fontSize: '0.7em', margin: "0px 9px",} : {}}
          >
            <a className={classes.listAnchor}>About</a>
          </li>
          <li
            className={classes.listItem}
            onClick={() => experience?.scrollIntoView({ behavior: "smooth" })}
            style={extraSmall ? {fontSize: '0.7em', margin: "0px 9px",} : {}}
          >
            <a className={classes.listAnchor}>Experience</a>
          </li>
          <li
            className={classes.listItem}
            onClick={() => skills?.scrollIntoView({ behavior: "smooth" })}
            style={extraSmall ? {fontSize: '0.7em'} : {}}
          >
            <a className={classes.listAnchor}>Skills</a>
          </li>
          <li
            className={classes.listItem}
            onClick={() => projects?.scrollIntoView({ behavior: "smooth" })}
            style={extraSmall ? {fontSize: '0.7em', margin: "0px 9px",} : {}}
          >
            <a className={classes.listAnchor}>Projects</a>
          </li>
          <li
            className={classes.listItem}
            onClick={() => contact?.scrollIntoView({ behavior: "smooth" })}
            style={extraSmall ? {fontSize: '0.7em', margin: "0px 9px",} : {}}
          >
            <a className={classes.listAnchor}>Contact</a>
          </li>
        </Scrollspy>
      </ul>
    </nav>
  );
};

export default NavBar2;
