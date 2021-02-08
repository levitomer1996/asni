import React, { useContext } from "react";
import { IconButton } from "@material-ui/core";
import { useStyles } from "./Comps/Header.style";
import { Link } from "react-router-dom";
import CartIcon from "./Comps/CartIcon";
import MobileMenu from "./MobileComps/MobileMenu";
import AuthContext from "../../context/AuthContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const MobileHeader = () => {
  const classes = useStyles();
  const { authState } = useContext(AuthContext);
  return (
    <header className={classes.mobile_root} dir="rtl">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <img src={"https://i.ibb.co/445msYV/cooltext375977447979069.png"}></img>
      </Link>
      <div>
        <div className={classes.mobile_icons_container}>
          {authState.isLogged ? (
            <div className={classes.accountCicrcle_container}>
              <Link to="/accountpage/mobile">
                <IconButton>
                  <AccountCircleIcon className={classes.accountCircle} />
                </IconButton>
              </Link>
            </div>
          ) : (
            <Link to="/signin">Signin</Link>
          )}
          <CartIcon />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
