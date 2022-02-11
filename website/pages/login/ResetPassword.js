import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from '@mui/material';

import useStyles from "./styles";

// import auth context and functions

export const ResetPassword = (props) => {
  const classes = useStyles();
  // let userDispatch = useUserDispatch();

  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");
  let [status, setStatus] = useState(false);
  let [message, setMessage] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <React.Fragment>
      <Typography variant="h1" className={classes.greeting}>
        Reset Password
      </Typography>

      <Fade in={error}>
        <Typography color="primary" className={classes.errorMessage}>
          {errorMessage}
        </Typography>
      </Fade>
      <Fade in={status}>
        <Typography color="secondary" className={classes.errorMessage}>
          {message}
        </Typography>
      </Fade>
      <TextField
        id="username"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        placeholder="Username"
        fullWidth
        required
      />
      <div className={classes.formButtons}>
        {isLoading ? (
          <CircularProgress size={26} className={classes.loginLoader} />
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            disabled={username.length === 0}
            onClick={() => {
              console.log("resetting the password")
            }}
          >
            Send Reset Link
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};
