import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "70% 30%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menu_root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  mobile_root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  order_item_mobile: {
    borderBottom: "0.3px solid #0000002e",
  },
}));
