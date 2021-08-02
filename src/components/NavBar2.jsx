import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import {
  makeStyles,
  Paper,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Snackbar,
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
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [experience, setExperience] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setAbout(document.getElementById("about"));
    setContact(document.getElementById("contact"));
    setExperience(document.getElementById("experience"));
    setProjects(document.getElementById("projects"));
  });

  return (
    <nav
      style={{
        backgroundColor: "#2B2A32",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "10",
      }}
      role="navigation"
    >
      <ul>
        <Scrollspy
          items={["about", "experience", "projects", "contact"]}
          currentClassName={classes.isCurrent}
        >
          <li
            className={classes.listItem}
            onClick={() => about?.scrollIntoView({ behavior: "smooth" })}
          >
            <a className={classes.listAnchor}>About</a>
          </li>
          <li
            className={classes.listItem}
            onClick={() => experience?.scrollIntoView({ behavior: "smooth" })}
          >
            <a className={classes.listAnchor}>Experience</a>
          </li>
          <li
            className={classes.listItem}
            onClick={() => projects?.scrollIntoView({ behavior: "smooth" })}
          >
            <a className={classes.listAnchor}>Projects</a>
          </li>
          <li
            className={classes.listItem}
            onClick={() => contact?.scrollIntoView({ behavior: "smooth" })}
          >
            <a className={classes.listAnchor}>Contact</a>
          </li>
        </Scrollspy>
      </ul>
    </nav>
  );
};

export default NavBar2;
