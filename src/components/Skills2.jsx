import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Grid,
  makeStyles,
  Paper,
  Tabs,
  Tab,
  AppBar,
  Typography,
} from "@material-ui/core";
import {
  SiJavascript,
  SiJava,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiDjango,
  SiAmazonaws,
  SiTensorflow,
  SiDocker,
  SiOctave,
  SiGit,
} from "react-icons/si";
import { GoDatabase } from "react-icons/go";
import cplusplusIcon from "@iconify-icons/simple-icons/cplusplus";
import { Icon } from "@iconify/react";
import ReactCircularGraph from 'react-circular-graph';
// import AnimatedBackground from '../assets/'

const useStyles = makeStyles({
  mainContainer: {
    width: "76%",
    margin: "0px 12%",
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
    '&:hover': {
      elevation: 12,
    }
  },
});
 
var config = {
    "ENABLE_ERROR_REPORTING": true,
    "LIST_PAGE_SIZE": 20,
    "EXPLORE_PAGE_SIZE": 25,
    "MOBILE_WIDTH": 520,
    "COLORS": {
      "GREEN": "#34A853",
      "RED": "#EA4335",
      "BLUE": "#4285F4",
      "YELLOW": "#FBBC05"
    }
}
 
var data = [
    {
      "id": "tensorflow",
      "name": "TensorFlow",
      "summary": "TensorFlow is a fast, flexible, and scalable open source machine learning library for research and production",
      "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/tensorflow/logo.png?rs=AGWjSYQ1HC13sEyluXwZoYWC2w2i9qsPjQ&sqp=-oaymwEICEwQTCAAUAEIttCMygU",
      "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/tensorflow/logo.png?rs=AGWjSYQ7IXg35u8B_D41kSCIRrHjJYcfng&sqp=-oaymwEKCIwBEIwBIABQAQi20IzKBQ",
      "primaryColor": "#E26026",
      "startsWith": "t",
      "fallbackColor": "#34A853",
      "RGB": {
        "r": 226,
        "g": 96,
        "b": 38
      }
    },
  ]

const Tile = ({ name, color, children }) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(5);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={elevation} className={classes.item} onMouseOver={() => setElevation(16)}
        onMouseOut={() => setElevation(5)}>
        <Grid container justify="center" alignItems="center">
          <Grid
            container
            item
            justify="center"
            alignItems="center"
            xs={12}
            style={{ marginBottom: "20px" }}
          >
            <div
              style={{
                borderRadius: "50%",
                background: color,
                height: "120px",
                width: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" style={{ fontSize: "1.6em", color: '#000' }}>
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const TabDisplay = ({value, index}) =>  {
  const classes = useStyles();
  return (
    <div hidden={value !== index}>
      {value === index && index === 0 ? (
        <div className={classes.skillsContainer}>
          <Grid
            container
            spacing={10}
            justify="flex-start"
            style={{ padding: 30 }}
          >
            <Tile name="JavaScript" color="#f7e018">
              <SiJavascript size={70} color="#fff" />
            </Tile>
            <Tile
              name="Java"
              color="linear-gradient(180deg, #E76F00 0%, #5382A1 67.71%)"
            >
              <SiJava size={70} color="#fff" />
            </Tile>
            <Tile
              name="Python"
              color="linear-gradient(117.47deg, #4586B9 36.51%, rgba(255, 230, 52, 0.66) 57.38%)"
            >
              <SiPython size={70} color="#fff" />
            </Tile>
            <Tile name="TypeScript" color="#007acc">
              <SiTypescript size={70} color="#fff" />
            </Tile>
            <Tile name="C++" color="#00599d">
              <Icon
                icon={cplusplusIcon}
                style={{ fontSize: "70px", color: "#fff" }}
              />
            </Tile>
            <Tile name="SQL" color="#f57f17">
              <GoDatabase size={70} color="#fff" />
            </Tile>
            <Tile name="HTML5" color="#e64c18">
              <SiHtml5 size={70} color="#fff" />
            </Tile>
            <Tile name="CSS3" color="#3bb2e0">
              <SiCss3 size={70} color="#fff" />
            </Tile>
          </Grid>
        </div>
      ) : (
        <div className={classes.skillsContainer}>
          <Grid
            container
            spacing={10}
            justify="flex-start"
            style={{ padding: 30 }}
          >
            <Tile name="React" color="#61dbfb">
              <SiReact size={70} color="#fff" />
            </Tile>
            <Tile name="Redux" color="#7749bd">
              <SiRedux size={70} color="#fff" />
            </Tile>
            <Tile name="Django" color="#092e20">
              <SiDjango size={70} color="#fff" />
            </Tile>
            <Tile
              name="AWS"
              color="linear-gradient(180deg, #162B3C 36.98%, #FF9A00 100%)"
            >
              <SiAmazonaws size={70} color="#fff" />
            </Tile>
            <Tile name="TensorFlow" color="#eb8c23">
              <SiTensorflow size={70} color="#fff" />
            </Tile>
            <Tile name="Docker" color="#2496ed">
              <SiDocker size={70} color="#fff" />
            </Tile>
            <Tile name="Octave" color="linear-gradient(180deg, #21A1CA 0%, #FF7F2A 84.9%)">
              <SiOctave size={70} color="#fff" />
            </Tile>
            <Tile name="Git" color="#f05030">
              <SiGit size={70} color="#fff" />
            </Tile>
          </Grid>
        </div>
      )}
    </div>
  );
}

const Skills2 = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
        <div id="skills" className={classes.mainContainer}>
      <div>
        <h1 style={{ paddingTop: "80px",color: "#fffffe" }}>Skills</h1>
        <hr
          style={{
            color: "#ff8906",
            width: "10em",
            border: "4px solid",
            borderRadius: "5px",
            marginBottom: "80px",
          }}
        />
        <div style={{position: 'relative'}}>
        <ReactCircularGraph
            width={520}
            height={520}
            data = {data}
            config = {config}
            selectedNode = {(node)=>console.log(node)}
            selectedProjectChanged={(object) => {  }}            
        />
        </div>
        </div>
    </div>
  );
};

export default Skills2;

