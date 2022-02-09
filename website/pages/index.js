import React, { useState } from 'react';
import { Grid, CircularProcess, Typography, Button, TextField, Fade } from '@mui/material';

import useStyles from './login/styles';
import logo from '../images/logo.png';

// Import auth context and functions
// Import password reset component

const Login = (props) => {
  const classes = useStyles();

  // Local State
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("Password1");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography variant="h6" className={classes.logotypeText}>
          Minet Kenya
        </Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          {
            activeTab === "login" ?
            (
              <React.Fragment>
                <Typography varian="h1" className={classes.greeting}>Login</Typography>
                <Fade in={error}>
                  <Typography color="secondary" className={classes.errorMessage}> 
                    {errorMessage}
                  </Typography>
                </Fade>
                <TextField 
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  margin="normal"
                  placeholder="email"
                  type="email"
                  fullWidth
                />
                <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {
                  isLoading ?
                  (
                    <CircularProgress size={26} className={classes.loginLoader} />
                  ) :
                  (
                    <>
                      <Button
                        disabled={username.length === 0 || password.length === 0}
                        onClick={() =>
                          loginUser(
                            userDispatch,
                            username,
                            password,
                            props.history,
                            setIsLoading,
                            setError,
                            setErrorMessage,
                          )
                        }
                        variant="contained"
                        color="secondary"
                        size="large"
                      >
                        Login
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => setActiveTabId("reset")}
                      >
                        Reset Password
                      </Button>
                  </>
                  )
                }
              </div>
              </React.Fragment>
            ) :
            (
              <ResetPassword props={props} />
            )
          }
        </div>
      </div>
    </Grid>
  );
}

export default Login;