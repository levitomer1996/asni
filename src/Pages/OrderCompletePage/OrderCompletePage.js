import React, { useContext, useEffect } from "react";
import { useStyles } from "./Comps/OrderCompletePage.style";
import { Typography, Paper } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import OrderSummrizer from "./Comps/OrderSummrizer";
import PaymentContext from "../../context/PaymentContext";
const OrderCompletePage = () => {
  const { paymentState } = useContext(PaymentContext);
  const {
    email_adress,
    given_name,
    surname,
    totalPrice,
    products,
    id,
  } = paymentState.isPaypalTransectionComplete.PaypalTransection;
  useEffect(() => {
    console.log(paymentState);
  }, [paymentState]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper
        variant="outlined"
        square
        className={classes.paper_container}
        dir="rtl"
      >
        <div>
          <div className={classes.top_Container}>
            <CheckCircleOutlineIcon className={classes.check_Icon} />
            <Typography style={{ fontSize: 20 }}>
              קיבלנו את ההזמנה שלך
            </Typography>
            <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
              מספר ההזמנה שלך - {id}
            </Typography>
            <Typography>
              ההזמנה תשלח אל אימייל - levitomer1996@gmail.com
            </Typography>
          </div>

          <div className={classes.center_container}>
            <div variant="outlined" square style={{ padding: 10 }}>
              <Typography style={{ fontWeight: "bold" }}>
                {" "}
                פרטי הזמנה
              </Typography>
              <Typography>
                משלוח על שם - {given_name + " " + surname}
              </Typography>
              <Typography>טלפון - 0527808058</Typography>
              <Typography>כתובת - שלום אש 16 תל אביב</Typography>
            </div>
            <div style={{ padding: 10 }}>שולם באמצעות -Paypal</div>
          </div>
        </div>
        <OrderSummrizer />
      </Paper>
    </div>
  );
};

export default OrderCompletePage;
