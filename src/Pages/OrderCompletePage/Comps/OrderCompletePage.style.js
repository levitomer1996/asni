import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper_container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  top_Container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  check_Icon: {
    fontSize: "2.5rem",
    color: "#15e015",
  },
  center_container: {
    display: "grid",
    gridTemplateColumns: "70% 40%",
  },
  orderSum_root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  orderSumItem: {
    display: "grid",
    gridTemplateColumns: "30% 40% 30%",
    alignItems: "center",
  },
  orderSumItem_img: {
    width: 100,
    height: 100,
  },
}));
