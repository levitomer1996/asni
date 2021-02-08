import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { PayPalButton } from "react-paypal-button-v2";
import BootStrapInput from "../../../Components/BootstrapInput/BootstrapInput";

export default function PaymentForm() {
  return (
    <div dir="rtl">
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <BootStrapInput label="שם על הכרטיס" required={true} type="text" />
        </Grid>
        <Grid item xs={12} md={6}>
          <BootStrapInput label="מספר כרטיס" required={true} type="text" />
        </Grid>
        <Grid item xs={12} md={6}>
          <BootStrapInput label="תוקף" required={true} type="text" />
        </Grid>
        <Grid item xs={12} md={6}>
          <BootStrapInput
            label="שלוש ספרות על גב הכרטיס"
            required={true}
            type="text"
          />
        </Grid>
        <Grid item>
          <Typography>שלמו עם Paypal</Typography>
        </Grid>
        <Grid item>
          <PayPalButton
            amount="0.01"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );

              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderID: data.orderID,
                }),
              });
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
