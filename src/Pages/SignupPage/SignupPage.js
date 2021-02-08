import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import BootStrapInput from "../../Components/BootstrapInput/BootstrapInput";
import { useStyles } from "./Comps/SignupPage.styles";
import Button from "@material-ui/core/Button";
import asni_server from "../../api/asni_server";
import { Redirect } from "react-router";
import { Typography, CircularProgress } from "@material-ui/core";
function SignupPage() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, set_first_name] = useState("");
  const [lastName, set_last_name] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    try {
      setError(false);
      setSpinner(true);
      const user_obj = { email, password, firstName, lastName };
      const res = await asni_server.post("/signup", user_obj);
      console.log(res.data);
      setSpinner(false);
      setRedirect(true);
    } catch (err) {
      console.log(err);
      setError(true);
      setSpinner(false);
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
        spacing={3}
        className={classes.root}
      >
        {redirect ? <Redirect to="/" /> : null}
        <Grid item>
          <BootStrapInput
            label="אימייל"
            onChangeFunction={setEmail}
            type="email"
          />
        </Grid>
        <Grid item>
          <BootStrapInput
            label="סיסמה"
            onChangeFunction={setPassword}
            type="password"
          />
        </Grid>
        <Grid item>
          <BootStrapInput
            label="שם פרטי"
            type="text"
            onChangeFunction={set_first_name}
          />
        </Grid>
        <Grid item>
          <BootStrapInput
            label="שם משפחה"
            type="text"
            onChangeFunction={set_last_name}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="sumbit"
            style={{ backgroundColor: "#b118b1" }}
          >
            הרשם
          </Button>
        </Grid>
        {spinner ? (
          <Grid item>
            <CircularProgress
              style={{ color: "rgb(177, 24, 177)", width: 60, height: 60 }}
            />
          </Grid>
        ) : null}
        {error ? (
          <Grid item>
            <Typography style={{ color: "red" }}>משהו התשבש בהרשמה</Typography>
          </Grid>
        ) : null}
      </Grid>
    </form>
  );
}

export default SignupPage;
