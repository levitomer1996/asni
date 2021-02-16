import React from "react";
import { useStyles } from "./OrderCompletePage.style";
import OrderSummizerItem from "./OrderSummizerItem";
const OrderSummrizer = () => {
  const classes = useStyles();

  return (
    <div className={classes.orderSum_root}>
      <OrderSummizerItem />
      <OrderSummizerItem />
      <OrderSummizerItem /> <OrderSummizerItem />
    </div>
  );
};

export default OrderSummrizer;
