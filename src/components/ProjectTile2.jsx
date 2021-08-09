import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Gradient } from "react-gradient";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Zoomtify from "../assets/zoomtify.svg";

const ProjectTile2 = ({ title, titleColors, stack, description }) => {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (<>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Grid container item justify="center" alignItems="center" xs={12}>
            <Grid
              item
              justify="center"
              alignItems="center"
              style={{padding: '10px'}}
         
            >
              <Gradient
                gradients={[
                  ["#373B44", "#4286f4"],
                  ["#7F7FD5", "#86A8E7", "#91EAE4"],
                  ["#0f0c29", "#302b63", "#91EAE4"],
                  ["#f5e3e6", "#d9e4f5"],
                  ["#fff", "#fff"]
                ]}
                property="text"
                element="p"
                duration={1000}
                angle="45deg"
                style={{
                  fontSize: "40px",
                  padding: 0,
                  margin: 0,
                  fontWeight: "bold",
                  color: '#fff',
                }}
              >
                {title}
              </Gradient>
            </Grid>
            <Grid container justify="center" item xs={12}>
              <Typography variant="subtitle2" style={{ marginBottom: "10px",  color: '#fff' }}>
                {stack}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ padding: 20, color: '#fff' }}>
          <Divider style={{marginTop: '-20px', marginBottom: '20px', backgroundColor: '#fff'}} />
            <Typography variant="subtitle2">{description}</Typography>
          </Grid>
        </Grid>
        <Grid      
          container
          style={{ width: "100%", padding: "10px 0px 30px 0px" }}
          justify="center"
        >
          <Grid xs={12} sm={6} container item justify="center">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                marginRight: extraSmall ? "0px" : "15px",
                marginLeft: extraSmall ? "0px" : "20px",
                marginBottom:  extraSmall ? '10px' : '0px'
              }}
              endIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </Grid>
          <Grid xs={12} sm={6} container item justify="center">
            <Button
              variant="contained"
              color="primary"
              style={{ color: "#fff" }}
              endIcon={<VisibilityIcon />}
            >
              View
            </Button>
          </Grid>
        </Grid>
        </>
  );
};

export default ProjectTile2;
