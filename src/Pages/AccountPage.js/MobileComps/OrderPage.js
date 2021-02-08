import React, { useState } from "react";

import { useStyles } from "../Comps/AccountPage.style";
import moment from "moment";
import "moment/locale/he";
import { Typography, Button, Grid } from "@material-ui/core";
const OrderItem = ({ id, time_created }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-end"
      spacing={2}
      className={classes.order_item_mobile}
    >
      <Grid item>
        <Typography>{moment(time_created).format("LLLL")}</Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "rgb(137, 6, 137)" }}
        >
          צפייה בהזמנה
        </Button>
      </Grid>
    </Grid>
  );
};

const OrderPage = () => {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      spacing={3}
    >
      <Grid item style={{ width: "100%" }}>
        <OrderItem id={"gfsdnkgsdfdnfgkfd"} time_created={1612820505127} />
      </Grid>{" "}
      <Grid item style={{ width: "100%" }}>
        <OrderItem id={"gfsdnkgsdfdnfgkfd"} time_created={1612820505127} />
      </Grid>
    </Grid>
  );
};

export default OrderPage;
