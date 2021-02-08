import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import ModalContext from "../../../context/ModalContext";
import { useStyles } from "./Header.style";
function CartIcon() {
  const classes = useStyles();
  const { setIsModalOpen } = useContext(ModalContext);
  return (
    <IconButton
      onClick={() => {
        setIsModalOpen("cart");
      }}
    >
      <ShoppingCartIcon className={classes.icon} />
    </IconButton>
  );
}

export default CartIcon;
