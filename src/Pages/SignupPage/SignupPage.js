import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import BootStrapInput from "../../Components/BootstrapInput/BootstrapInput";
import { useStyles } from "./Comps/SignupPage.styles";
import Button from "@material-ui/core/Button";
import asni_server from "../../api/asni_server";
function SignupPage() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [passord, setPassword] = useState("");
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");

  const handleSubmit = async () => {
    try {
      console.log({
        email,
        passord,
        first_name,
        last_name,
      });
      const res = await asni_server.post(
        "http://a580bbcb8d43.ngrok.io/signUp",
        {
          email,
          passord,
          first_name,
          last_name,
        }
      );
    } catch (error) {}
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
      </Grid>
    </form>
  );
}

export default SignupPage;
