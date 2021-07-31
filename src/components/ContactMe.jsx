import React from "react";
import {
  makeStyles,
  Paper,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ContacBackground from "../assets/contact-background.svg";

const useStyles = makeStyles({
  mainContainer: {
    width: "76%",
    margin: "0px 12%",
    paddingBottom: 50,
  },
  resize: {
    fontSize: 50,
  },
});
const FormField = ({ label, rows }) => {
  return (
    <TextField
      variant="filled"
      margin="dense"
      style={{ marginBottom: "20px" }}
      label={label}
      rows={rows}
      multiline
    />
  );
};

const ContactMe = () => {
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const large = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div className={classes.mainContainer}>
      <div>
        <h1>Contact Me</h1>
        <hr
          style={{
            color: "#222831",
            width: extraSmall
                  ? "70vw"
                  : "15em",
            border: "4px solid",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        />
      </div>
      <div>
        <Paper elevation={8} style={{ width: "fit-content", margin: "auto" }}>
          <div>
            <img
              style={{
                width: extraSmall
                  ? "70vw"
                  : small
                  ? "50vw"
                  : large
                  ? "30vw"
                  : "20vw",
              }}
              src={ContacBackground}
            />
          </div>
          <div
            style={{
              padding: extraSmall ? "30px 15px" : "30px 50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <FormField label="Name" rows={1} />
            <FormField label="Email" rows={1} />
            <FormField label="Message" rows={6} />
            <Button
              size="large"
              variant="contained"
              color="primary"
              style={{
                marginRight: "30px",
                padding: "15px 30px",
                margin: "auto",
                width: "50%",
                marginTop: "20px",
              }}
            >
              Send
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ContactMe;
