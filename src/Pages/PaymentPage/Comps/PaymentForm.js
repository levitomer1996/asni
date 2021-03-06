import React, { useEffect, useContext } from "react";

import { Grid, TextField, Typography } from "@material-ui/core";
import BootStrapInput from "../../../Components/BootstrapInput/BootstrapInput";
import BootstrapSelectInput from "../../../Components/BootstrapInput/BootstrapSelectInput";
import ReactPaypal from "../../../Components/ReactPaypal/ReactPaypal";

import validateCard from "./validateCard";

import PaymentContext from "../../../context/PaymentContext";
import CartContext from "../../../context/CartContext";
export default function PaymentForm() {
  const { cartState } = useContext(CartContext);
  const {
    paymentState,
    setNameOnCard,
    setCardNumber,
    setExpMonth,
    setExpYear,
    setCvv,
    setType,
    setIsButtonDisabled,
  } = useContext(PaymentContext);
  const {
    nameOnCard,
    cardNumber,
    expiryMonth,
    expiryYear,
    cvv,
    type,
  } = paymentState.paymentForm;
  useEffect(() => {
    let card = {
      cardType: type,
      number: cardNumber,
      expiryMonth,
      expiryYear: "20" + expiryYear,
      cvv,
    };
    console.log(validateCard(card));
    if (!validateCard(card, nameOnCard)) {
      setIsButtonDisabled(true);
      return;
    }

    setIsButtonDisabled(false);
  }, [nameOnCard, cardNumber, expiryMonth, expiryYear, cvv, type]);
  return (
    <div dir="rtl">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BootStrapInput
            label="שם על הכרטיס"
            required={true}
            type="text"
            onChangeFunction={setNameOnCard}
            value={nameOnCard}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BootStrapInput
            label="מספר כרטיס"
            required={true}
            type="text"
            onChangeFunction={setCardNumber}
            value={cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BootstrapSelectInput
            options={["VISA", "MASTERCARD"]}
            label="סוג כרטיס"
            onChangeFunction={setType}
            value={type}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <BootStrapInput
            label="חודש"
            required={true}
            type="text"
            onChangeFunction={setExpMonth}
            value={expiryMonth}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <BootStrapInput
            label="שנה"
            required={true}
            type="text"
            onChangeFunction={setExpYear}
            value={expiryYear}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BootStrapInput
            label="שלוש ספרות על גב הכרטיס"
            required={true}
            onChangeFunction={setCvv}
            type="text"
            value={cvv}
          />
        </Grid>
        <Grid item>
          <Typography>שלמו עם Paypal</Typography>
        </Grid>
        <Grid item>
          <ReactPaypal />
        </Grid>
      </Grid>
    </div>
  );
}
