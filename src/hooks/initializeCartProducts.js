import React, { useContext } from "react";
import CartContext from "../context/CartContext";
export default async () => {
  const { setCartProducts } = useContext(CartContext);
  try {
    let ls = localStorage.get("asni_cart");
    if (ls) {
      setCartProducts(JSON.parse(ls));
    }
  } catch (error) {}
};
