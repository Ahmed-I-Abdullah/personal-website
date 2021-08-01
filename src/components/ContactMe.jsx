import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ContacBackground from "../assets/contact-background.svg";
import { API, graphqlOperation } from "aws-amplify";
import { createMessage } from "../graphql/mutations";

const useStyles = makeStyles({
  mainContainer: {
    width: "76%",
    margin: "0px 12%",
    paddingBottom: 80,
  },
  resize: {
    fontSize: 50,
  },
});
const FormField = ({
  label,
  rows,
  value,
  setValue,
  errorMessage,
  setErrorMessage,
}) => {
  return (
    <TextField
      variant="filled"
      margin="dense"
      style={{ marginBottom: "20px" }}
      label={label}
      rows={rows}
      value={value}
      onChange={(e) => {
        setErrorMessage("");
        setValue(e.target.value);
      }}
      multiline
      error={errorMessage !== ""}
      helperText={errorMessage}
    />
  );
};

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ContactMe = () => {
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const large = useMediaQuery(theme.breakpoints.down("lg"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSendMessage = () => {
    const valid = validateFields();
    if (!valid) return;
    const inputMessage = {
      from: name,
      email: email,
      message: message,
    };
    API.graphql(graphqlOperation(createMessage, { input: inputMessage }))
      .then((resp) => {
        console.log("message created: ", resp);
        setSnackbarSeverity("success");
        setSnackbarMessage(
          `Message Sent. Thanks, ${name}! I will get back to you as soon as I can.`
        );
        setName("");
        setEmail("");
        setMessage("");
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.log("error creating message: ", err);
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "Message failed to send! Please contact me at my email which can be found in the footer."
        );
        setSnackbarOpen(true);
      });
  };

  const validateFields = () => {
    let fieldsValid = true;
    if (!name) {
      setNameError("Please enter a name");
      fieldsValid = false;
    }
    if (!email) {
      setEmailError("Please enter an email");
      fieldsValid = false;
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmailError("Please enter a valid email");
      fieldsValid = false;
    }
    if (!message) {
      setMessageError("Please enter a message");
      fieldsValid = false;
    }
    return fieldsValid;
  };
  return (
    <div id="contact" className={classes.mainContainer}>
      <div>
        <h1>Contact Me</h1>
        <hr
          style={{
            color: "#222831",
            width: extraSmall ? "70vw" : "15em",
            border: "4px solid",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        />
      </div>
      <div>
        <Paper
          elevation={8}
          style={{ width: "fit-content", margin: "auto", padding: 0 }}
        >
          <div>
            <img
              alt="rocket"
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
            <FormField
              label="Name"
              value={name}
              setValue={setName}
              errorMessage={nameError}
              setErrorMessage={setNameError}
              rows={1}
            />
            <FormField
              label="Email"
              value={email}
              setValue={setEmail}
              errorMessage={emailError}
              setErrorMessage={setEmailError}
              rows={1}
            />
            <FormField
              label="Message"
              value={message}
              setValue={setMessage}
              errorMessage={messageError}
              setErrorMessage={setMessageError}
              rows={6}
            />
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
              onClick={() => handleSendMessage()}
            >
              Send
            </Button>
          </div>
        </Paper>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactMe;
