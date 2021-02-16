import React, { useEffect, useContext, useState } from "react";
import { Grid, Typography, Zoomת, Fade, Button } from "@material-ui/core";

import validateAdress from "./validateAdress";
import BootStrapInput from "../../../Components/BootstrapInput/BootstrapInput";
import PaymentContext from "../../../context/PaymentContext";

export default function AddressForm() {
  const {
    paymentState,
    setFirstName,
    setLastName,
    setStreet,
    setHouseNumber,
    setAppartment,
    setIsButtonDisabled,
    setFloor,
  } = useContext(PaymentContext);
  const {
    firstName,
    lastName,
    houseNumber,
    street,
    appartment,
    floor,
  } = paymentState.adressForm;
  useEffect(() => {
    if (
      !validateAdress(
        firstName,
        lastName,
        houseNumber,
        street,
        appartment,
        floor
      )
    ) {
      setIsButtonDisabled(true);
      return;
    }
    console.log("Fine");
    setIsButtonDisabled(false);
  }, [firstName, lastName, houseNumber, street, appartment]);

  const [isSigninFade, setIsSigninFade] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        פרטי משלוח
      </Typography>

      {isSigninFade ? (
        <Fade in={isSigninFade} timeout={3000}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <BootStrapInput
                onChangeFunction={setEmail}
                label={"אימייל"}
                type="email"
              />
            </Grid>{" "}
            <Grid item>
              <BootStrapInput
                onChangeFunction={setPassword}
                label={"סיסמה"}
                type="password"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                התחבר
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsSigninFade(false)}
              >
                אין לי משתמש
              </Button>
            </Grid>
          </Grid>
        </Fade>
      ) : (
        <Fade in={!isSigninFade}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <BootStrapInput
                label="שם פרטי"
                onChangeFunction={setFirstName}
                type="text"
                value={firstName}
                required={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BootStrapInput
                label="שם משפחה"
                onChangeFunction={setLastName}
                value={lastName}
                type="text"
                required={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BootStrapInput
                label="רחוב"
                onChangeFunction={setStreet}
                type="text"
                value={street}
                required={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BootStrapInput
                label="מספר בית"
                onChangeFunction={setHouseNumber}
                value={houseNumber}
                type="number"
                required={true}
              />
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <BootStrapInput
                label="קומה"
                onChangeFunction={setFloor}
                value={floor}
                type="number"
                required={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BootStrapInput
                label="מספר דירה"
                onChangeFunction={setAppartment}
                value={appartment}
                type="number"
                required={true}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsSigninFade(true)}
              >
                יש לי משתמש עם הפרטים
              </Button>
            </Grid>
          </Grid>
        </Fade>
      )}
    </React.Fragment>
  );
}
