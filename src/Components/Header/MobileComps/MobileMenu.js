import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useStyles } from "../Comps/Header.style";
import AuthContext from "../../../context/AuthContext";

export default function MobileMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { Signout } = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" onClick={handleClick}>
        <MoreVertIcon className={classes.icon} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            מוצרים
          </MenuItem>
        </Link>
        <Link to="/specials" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={handleClose}>מיוחדים</MenuItem>
        </Link>
        <MenuItem
          onClick={() => {
            Signout();
            handleClose();
          }}
        >
          התנתק
        </MenuItem>
      </Menu>
    </div>
  );
}
