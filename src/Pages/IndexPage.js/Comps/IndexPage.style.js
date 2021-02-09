import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  parallex: {
    backgroundImage: (styleProps) => `url("${styleProps.img_url}")`,
    maxHeight: 500,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#ffd7ff",
  },
  swiper_container: {
    marginTop: 20,
  },
  photos_container: {
    marginTop: 20,
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  photo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    maxWidth: 400,
    height: 300,
    backgroundSize: "cover",
  },
  title_fade: {
    backgroundColor: "#80008094",
    width: "100%",
    textAlign: "center",
    height: 30,
    color: "white",
  },
  photos_mobile_container: {
    marginTop: 20,
    width: "80%",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));
