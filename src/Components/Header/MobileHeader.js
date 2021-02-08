import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./Comps/Header.style";
import NavLink, { NavList } from "./Comps/Navlink";
import { Link } from "react-router-dom";
import CartIcon from "./Comps/CartIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MobileMenu from "./Comps/MobileMenu";

const MobileHeader = () => {
  const classes = useStyles();

  return (
    <header className={classes.mobile_root} dir="rtl">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <img src={"https://i.ibb.co/445msYV/cooltext375977447979069.png"}></img>
      </Link>
      <div className={classes.mobile_icons_container}>
        <CartIcon />
        <MobileMenu />
      </div>
    </header>
  );
};

export default MobileHeader;
