import React from "react";
import { useStyles } from "./Header.style";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
function UserIcon({ type, params, mobile }) {
  const classes = useStyles();
  if (!mobile) {
    switch (type) {
      case "DEFAULT":
        return (
          <div className={classes.accountCicrcle_container}>
            <Link
              to="/accountpage/orders
              "
              style={{ textDecoration: "none", color: "black" }}
            >
              <IconButton>
                <AccountCircleIcon
                  className={classes.accountCircle}
                  style={{ fontSize: "2.5rem" }}
                />
              </IconButton>
            </Link>
          </div>
        );
      case "FACEBOOK":
        return (
          <div>
            <Link to="/accountpage/orders">
              <Avatar
                alt="Remy Sharp"
                src={params.photoURL}
                className={classes.icon}
              />
            </Link>
          </div>
        );

      default:
        break;
    }
  }
}

export default UserIcon;
