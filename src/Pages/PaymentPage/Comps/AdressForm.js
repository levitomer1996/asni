import React, { useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
  // useEffect(() => {
  //   if (!firstName) {
  //     setIsButtonDisabled(true);
  //     return;
  //   }
  //   if (!lastName) {
  //     setIsButtonDisabled(true);
  //     return;
  //   }
  //   if (!houseNumber) {
  //     setIsButtonDisabled(true);

  //     return;
  //   }
  //   if (!street) {
  //     setIsButtonDisabled(true);
  //     return;
  //   }
  //   if (!appartment) {
  //     setIsButtonDisabled(true);
  //     return;
  //   }
  //   if (!floor) {
  //     setIsButtonDisabled(true);
  //     return;
  //   }

  //   setIsButtonDisabled(false);
  // }, [firstName, lastName, houseNumber, street, appartment]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        פרטי משלוח
      </Typography>
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
      </Grid>
    </React.Fragment>
  );
}
