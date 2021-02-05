import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./Comps/Header.style";
import NavLink, { NavList } from "./Comps/Navlink";
import { Link } from "react-router-dom";
import CartIcon from "./Comps/CartIcon";
import MobileHeader from "./MobileHeader";

function Header() {
  const classes = useStyles();

  return (
    <>
      <header className={classes.root}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography className={classes.logo}>𝕬𝖘𝖓𝖎</Typography>
        </Link>
        {NavList.map((item) => {
          return <NavLink title={item.title} link={item.link} />;
        })}
        <CartIcon />
      </header>
      <MobileHeader />
    </>
  );
}

export default Header;
