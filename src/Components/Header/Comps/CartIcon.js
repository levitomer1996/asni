import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import ModalContext from "../../../context/ModalContext";
function CartIcon() {
  const { setIsModalOpen } = useContext(ModalContext);
  return (
    <IconButton
      onClick={() => {
        setIsModalOpen("cart");
      }}
    ></IconButton>
  );
}

export default CartIcon;
