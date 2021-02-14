import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./Comps/Header.style";
import NavLink, { NavList } from "./Comps/Navlink";
import { Link } from "react-router-dom";
import CartIcon from "./Comps/CartIcon";
import MobileHeader from "./MobileHeader";
import AuthContext from "../../context/AuthContext";

import firebase from "firebase";
import UserIcon from "./Comps/UserIcon";
function Header({ isFireBaseInitialzied }) {
  const classes = useStyles();
  const { authState, Signin_Facebook } = useContext(AuthContext);
  useEffect(() => {
    if (isFireBaseInitialzied) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          Signin_Facebook(user);
        } else {
        }
      });
    }
  }, [isFireBaseInitialzied]);
  return (
    <>
      <header className={classes.root}>
        <div className={classes.icons_container}>
          <CartIcon />

          {authState.isLogged ? (
            <UserIcon
              type={authState.type}
              params={{ photoURL: authState.user.photoURL }}
            />
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
