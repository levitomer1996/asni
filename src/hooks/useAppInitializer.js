import React, { useContext } from "react";

import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";
import AppContext from "../context/AppContext";

import asni_server from "../api/asni_server";

import * as jwt from "jsonwebtoken";

export default () => {
  const { authState, Signin_Default, Signout } = useContext(AuthContext);
  const { setCartProducts } = useContext(CartContext);
  const { setDeliveryAvailable } = useContext(AppContext);
  const isConnectedResolver = async () => {
    if (localStorage.getItem("ut")) {
      try {
        const decode = await jwt.decode(localStorage.getItem("ut"));
        if (!decode) {
          Signout();
        }
        Signin_Default(decode);
      } catch (error) {
        Signout();
      }
    } else {
      Signout();
    }
  };
  const initializeCartProducts = async () => {
    try {
      let ls = localStorage.getItem("asni_cart");
      if (ls) {
        console.log(ls);
        setCartProducts(JSON.parse(ls));
      }
    } catch (error) {}
  };

  const getControlBoard = async () => {
    try {
      const res = await asni_server.get("/getcontrolpanel");
      setDeliveryAvailable(res.data);
    } catch (error) {}
  };

  const initializeApp = async () => {
    isConnectedResolver();
    initializeCartProducts();
    getControlBoard();
  };

  return { initializeApp, isConnectedResolver };
};
