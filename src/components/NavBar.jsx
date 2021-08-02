import React, { useState } from "react";
import {
  makeStyles,
  Button,
  useMediaQuery,
  Drawer,
  useTheme,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  navContainer: {
    width: "100%",
    height: "100px",
    backgroundColor: 'blue'
  },
  navRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "88%",
    margin: "0px 6%",
    alignItems: "center",
  },
  linkDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    cursor: "pointer",
    textDecoration: "none",
    width: "fit-content",
    transition: "all 150ms ease",
  },
  buttonsDiv: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  navTitle: {
    color: "#ffffff",
    marginTop: "10px",
  },
  navButton: {
    margin: "0px 20px",
    color: "#000000",
    fontWeight: "bold",
    fontSize: "1.05em",
    fontFamily: "Roboto",
  },
  logoDiv: {
    cursor: "pointer",
    "&:hover": {
      transform: "rotate(360deg) !important",
      transitionDuration: "1.3s",
      opacity: "0.6",
    },
  },
  paper: {
    background: "#CCCCCC",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.navContainer}>
      <div className={classes.navRoot}>
        <div className={classes.buttonsDiv}>
          {!isExtraSmall ? (
            <React.Fragment>
              <ScrollLink to="experience" smooth duration={1000}>
                <Button className={classes.navButton}>Experience</Button>
              </ScrollLink>
              <ScrollLink to="projects" smooth duration={1000}>
                <Button className={classes.navButton}>Projects</Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth duration={1000}>
                <Button className={classes.navButton}>Contact</Button>
              </ScrollLink>
            </React.Fragment>
          ) : (
            <div>
              <Button onClick={() => setDrawerOpen(true)}>
                <MenuIcon style={{ fontSize: "45px" }} />
              </Button>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                classes={{ paper: classes.paper }}
              >
                <div
                  role="presentation"
                  onClick={() => setDrawerOpen(false)}
                  onKeyDown={() => setDrawerOpen(false)}
                >
                  <List>
                    <ListItem
                      onClick={() => setDrawerOpen(false)}
                      button
                      selected={true}
                      key="About"
                    >
                      <ListItemText primary="About" />
                    </ListItem>
                    <ScrollLink to="experience" smooth duration={1000}>
                      <ListItem
                        onClick={() => setDrawerOpen(false)}
                        button
                        key="Experience"
                      >
                        <ListItemText primary="Experience" />
                      </ListItem>
                    </ScrollLink>
                    <ScrollLink to="projects" smooth duration={1000}>
                      <ListItem
                        onClick={() => setDrawerOpen(false)}
                        button
                        key="Projects"
                      >
                        <ListItemText primary="Projects" />
                      </ListItem>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth duration={2000}>
                      <ListItem
                        onClick={() => setDrawerOpen(false)}
                        button
                        key="Contact"
                      >
                        <ListItemText primary="Contact" />
                      </ListItem>
                    </ScrollLink>
                  </List>
                </div>
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
