import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  form_root: {
    width: "80%",
  },
  names_Holder: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
  },
}));
