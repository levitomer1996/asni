import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import BootStrapInput from "../../Components/BootstrapInput/BootstrapInput";
import { useStyles } from "../SignupPage/Comps/SignupPage.styles";
import Button from "@material-ui/core/Button";
import asni_server from "../../api/asni_server";
import { Link, Redirect } from "react-router-dom";
import { Typography, CircularProgress } from "@material-ui/core";
import useIsConnectedResolver from "../../hooks/useIsConnectedResolver";
import CustomFacebook from "../../Components/Facebooklogin/CustomFacebook";
import firebase from "firebase/app";
import "firebase/auth";

const SigninPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [isConnectedResolver] = useIsConnectedResolver();
  var facebook_provider = new firebase.auth.FacebookAuthProvider();

  function facebookSignInPopup(provider) {
    // [START auth_facebook_signin_popup]
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;
        console.log(result);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
    // [END auth_facebook_signin_popup]
  }

  const handleSubmit = async () => {
    try {
      setError(false);
      setSpinner(true);
      const res = await asni_server.post("/authenticate", { email, password });
      console.log(res.data);
      localStorage.setItem("ut", res.data.token);
      isConnectedResolver();
      setSpinner(false);
      setRedirect(true);
    } catch (err) {
      setSpinner(false);
      setError(true);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
        spacing={3}
      >
        {redirect ? <Redirect to="/" /> : null}
        <Grid item>
          <BootStrapInput
            onChangeFunction={setEmail}
            label="אימייל"
            type="email"
          />
        </Grid>
        <Grid item>
          <BootStrapInput
            onChangeFunction={setPassword}
            label="סיסמה"
            type="password"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="sumbit"
            style={{ backgroundColor: "#b118b1", width: 200 }}
          >
            התחבר
          </Button>
        </Grid>{" "}
        {spinner ? (
          <Grid item>
            <CircularProgress
              style={{ color: "rgb(177, 24, 177)", width: 60, height: 60 }}
            />
          </Grid>
        ) : null}
        {error ? (
          <Grid item>
            <Typography style={{ color: "red" }}>משהו השתבש</Typography>
          </Grid>
        ) : null}
        <Grid item>
          <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
            !אין לך עדיין משתמש אסני? הרשם עכשיו
          </Link>
        </Grid>
        <Grid item>
          <CustomFacebook
            onClick={() => facebookSignInPopup(facebook_provider)}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SigninPage;
