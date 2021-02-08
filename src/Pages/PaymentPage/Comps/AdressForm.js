import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import BootStrapInput from "../../../Components/BootstrapInput/BootstrapInput";

export default function AddressForm() {
  const [firsttName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState(null);
  const [appartment, setAppartment] = useState(null);
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
            required={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BootStrapInput
            label="שם משפחה"
            onChangeFunction={setLastName}
            type="text"
            required={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BootStrapInput
            label="רחוב"
            onChangeFunction={setStreet}
            type="text"
            required={true}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <BootStrapInput
            label="מספר בית"
            onChangeFunction={setHouseNumber}
            type="number"
            required={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BootStrapInput
            label="מספר דירה"
            onChangeFunction={setAppartment}
            type="number"
            required={true}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
