import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import BootStrapInput from "../../Components/BootstrapInput/BootstrapInput";
import { useStyles } from "../SignupPage/Comps/SignupPage.styles";
import Button from "@material-ui/core/Button";
import asni_server from "../../api/asni_server";
import { Link, Redirect } from "react-router-dom";
import { Typography, CircularProgress } from "@material-ui/core";
import useIsConnectedResolver from "../../hooks/useIsConnectedResolver";
const SigninPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [isConnectedResolver] = useIsConnectedResolver();
  const handleSubmit = async () => {
    try {
      setError(false);
      setSpinner(true);
      const res = await asni_server.post("/login", { email, password });
      localStorage.setItem("ut", res.data);
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
      </Grid>
    </form>
  );
};

export default SigninPage;
