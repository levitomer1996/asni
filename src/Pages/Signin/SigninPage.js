import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import BootStrapInput from "../../Components/BootstrapInput/BootstrapInput";
import { useStyles } from "../SignupPage/Comps/SignupPage.styles";
import Button from "@material-ui/core/Button";
const SigninPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [passord, setPassword] = useState("");
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
      spacing={3}
    >
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
          style={{ backgroundColor: "#b118b1" }}
        >
          הרשם
        </Button>
      </Grid>
    </Grid>
  );
};

export default SigninPage;
