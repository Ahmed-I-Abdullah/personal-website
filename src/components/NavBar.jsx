import React from "react";
import { makeStyles, Button, useMediaQuery } from "@material-ui/core";
import { Link as ScrollLink } from "react-scroll";
import Logo from '../assets/logo.svg';

const useStyles = makeStyles({
  navContainer: {
    width: "100%",
    height: "100px",
  },
  navRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    width: "88%",
    margin: "0px 6%",
    alignItems: "center",
  },
  linkDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-between",
    alignContent: "center",
    cursor: "pointer",
    textDecoration: "none",
    width: "fit-content",
    transition: "all 150ms ease",
  },
  buttonsDiv: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  navTitle: {
    color: "#ffffff",
    marginTop: "10px",
  },
  navButton: {
    margin: "0px 20px",
    height: "50px",
    color: '#000000',
    fontWeight: 'bold',
    fontSize: '1.05em',
    fontFamily: 'Roboto',
  },
  logoDiv: {
      cursor: 'pointer',
      '&:hover': {
        transform: 'rotate(360deg) !important',
        transitionDuration: '1.3s',
        opacity: '0.6',
      }
  }
});

const NavBar = () => {
  const classes = useStyles();
  const isExtraSmall = useMediaQuery('(max-width:700px)');

  return (
    <div className={classes.navContainer}>
      <div className={classes.navRoot}>
        <div className={classes.logoDiv} onClick={() => window.location.reload()}>
            <img src={Logo}  className={classes.navTitle} />
        </div>
        <div className={classes.buttonsDiv}>
          {!isExtraSmall ? (
            <React.Fragment>
              <Button onClick={() => console.log("Experience clicked!")} className={classes.navButton}>
                Experience
              </Button>
              <ScrollLink
                to="about"
                smooth
                duration={1000}
              >
                <Button className={classes.navButton}>
                  Projects
                </Button>
              </ScrollLink>
            </React.Fragment>
          ) : null}
          <Button
            className={classes.navButton}
            onClick={() => {}}
          >
              Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;