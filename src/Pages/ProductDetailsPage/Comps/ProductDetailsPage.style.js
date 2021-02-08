import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "60% 40%",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  left_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  right_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  product_title: {
    fontWeight: "bold",
    fontSize: "30px",
    fontFamily: "revert",
    color: "purple",
  },
  product_price: {
    fontFamily: "revert",
  },
  img: {
    width: 400,
    height: 400,
  },
  item: {
    padding: 20,
  },
}));
