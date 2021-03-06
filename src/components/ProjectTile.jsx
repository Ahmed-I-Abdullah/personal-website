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

const ProjectTile = ({ title, titleColors, stack, description }) => {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container style={{ width: "100%", marginBottom: extraSmall ? '60px' : '0px'}}>
      <Paper elevation={6}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Grid container item justify="flex-start" alignItems="center" xs={12}>
            <Grid
              item
              xs={12}
              justify="flex-start"
              alignItems="flex-start"
              style={{padding: '10px'}}
         
            >
              <Gradient
                gradients={[
                  ["#373B44", "#4286f4"],
                  ["#7F7FD5", "#86A8E7", "#91EAE4"],
                  ["#0f0c29", "#302b63", "#91EAE4"],
                ]}
                property="text"
                element="p"
                duration={1000}
                angle="45deg"
                className="text"
                style={{
                  fontSize: "40px",
                  padding: 0,
                  margin: 0,
                  fontWeight: "bold",
                  color: '#000'
                }}
              >
                {title}
              </Gradient>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" style={{ marginBottom: "10px",  color: '#000' }}>
                {stack}
              </Typography>
              <Divider variant="middle" />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ padding: 20, color: '#000' }}>
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
      </Paper>
    </Grid>
  );
};

export default ProjectTile;
