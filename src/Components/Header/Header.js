import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./Comps/Header.style";
import NavLink, { NavList } from "./Comps/Navlink";
import { Link } from "react-router-dom";
import CartIcon from "./Comps/CartIcon";
import MobileHeader from "./MobileHeader";
import AuthContext from "../../context/AuthContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Header() {
  const classes = useStyles();
  const { authState } = useContext(AuthContext);
  return (
    <>
      <header className={classes.root}>
        <div className={classes.icons_container}>
          <CartIcon />

          {authState.isLogged ? (
            <div className={classes.accountCicrcle_container}>
              <Link
                to="/accountpage/orders
              "
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="h6">
                  {authState.user.FirstName + " " + authState.user.LastName}
                </Typography>
              </Link>
            </div>
          ) : (
            <Link to="/signin">Signin</Link>
          )}
        </div>

        <div className={classes.link_container}>
          {NavList.map((item) => {
            return <NavLink title={item.title} link={item.link} />;
          })}
        </div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img
            src={"https://i.ibb.co/445msYV/cooltext375977447979069.png"}
          ></img>
        </Link>
      </header>
      <MobileHeader />
    </>
  );
}

export default Header;
