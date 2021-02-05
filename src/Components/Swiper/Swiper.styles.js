import { fade, makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    textAlign: "right",
    marginTop: 20,
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  root_mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  label: {
    fontSize: "xx-large",
    fontFamily: "revert",
  },
}));
