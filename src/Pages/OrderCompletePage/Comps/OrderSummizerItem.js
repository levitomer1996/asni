import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./OrderCompletePage.style";
const OrderSummizerItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.orderSumItem}>
      <img
        src={
          "https://www.rollingstoned.co.il/wp-content/uploads/2017/07/premium-slim-tips.jpg"
        }
        className={classes.orderSumItem_img}
      />{" "}
      <Typography>OCB</Typography> <Typography>50</Typography>
    </div>
  );
};

export default OrderSummizerItem;
