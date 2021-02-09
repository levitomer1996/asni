import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: { display: "grid", gridTemplateColumns: "20% 80%" },
  menu_link: { textDecoration: "none", color: "black" },
}));
