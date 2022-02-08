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
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.png";
import google from "../../images/google.svg";

// context
import {
  useUserDispatch,
  loginUser,
  resetPassword,
} from "../../context/UserContext";
import { ResetPassword } from "./ResetPassword";

function Login(props) {
  const classes = useStyles();

  // global
  let userDispatch = useUserDispatch();

  // local
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  let [errorMessage, setErrorMessage] = useState("");
  let [activeTabId, setActiveTabId] = useState(0);
  let [username, setUsername] = useState("admin@flatlogic.com");
  // let [username, setUsername] = useState("admin@flatlogic.com");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

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
          {activeTabId === 0 ? (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Login
              </Typography>
              {/* <Button size="large" className={classes.googleButton}>
              <img src={google} alt="google" className={classes.googleIcon} />
              &nbsp;Sign in with Google
            </Button>
            <div className={classes.formDividerContainer}>
              <div className={classes.formDivider} />
              <Typography className={classes.formDividerWord}>or</Typography>
              <div className={classes.formDivider} />
            </div> */}
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
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
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
                      onClick={() => setActiveTabId(1)}
                    >
                      Reset Password
                    </Button>
                  </>
                )}
              </div>
            </React.Fragment>
          ) : (
            <ResetPassword props={props} />
          )}
        </div>
        {/* <Typography color="primary" className={classes.copyright}>
        © {new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="#" rel="noopener noreferrer" target="_blank">Lenny Gith</a>
        </Typography> */}
      </div>
    </Grid>
  );
}

export default withRouter(Login);
