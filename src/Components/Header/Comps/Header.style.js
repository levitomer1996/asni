import { fade, makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "80808008",
    padding: 20,
    display: "grid",
    gridTemplateColumns: "30% 55% 15%",
    alignItems: "center",
    borderBottom: "1.5px solid #00000012",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: { fontSize: "xx-large", fontWeight: "bold" },
  link_container: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  link: {
    textDecoration: "none",
    color: "gray",
    fontFamily: "revert",
    fontSize: "20px",
    padding: 10,
    paddingRight: 50,
  },
  icon: { fontSize: "3rem", color: "rgb(137, 6, 137)" },
  inner_link: {
    "&:hover": {
      borderBottom: "2px solid purple",
      fontWeight: "bold",
    },
  },
  icons_container: { display: "flex", flexDirection: "row reverse" },
  accountCicrcle_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mobile_root: {
    backgroundColor: "80808008",
    padding: 20,
    display: "grid",
    gridTemplateColumns: "60% 40%",
    borderBottom: "1.5px solid #00000012",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobile_icons_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountCircle: {
    color: "rgb(137, 6, 137)",
    fontSize: "2.5rem",
  },
}));
