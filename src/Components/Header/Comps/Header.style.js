import { fade, makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "80808008",
    padding: 20,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
    alignItems: "center",
    borderBottom: "1.5px solid #00000012",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: { fontSize: "xx-large", fontWeight: "bold" },
  link: {
    textDecoration: "none",
    color: "gray",
    fontSiz: "larger",
    padding: 10,
    paddingRight: 50,
  },
  inner_link: {
    "&:hover": {
      borderBottom: "2px solid purple",
      fontWeight: "bold",
    },
  },
  mobile_root: {
    backgroundColor: "80808008",
    padding: 20,
    display: "grid",
    gridTemplateColumns: "60% 20% 20%",
    borderBottom: "1.5px solid #00000012",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
