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
}));
