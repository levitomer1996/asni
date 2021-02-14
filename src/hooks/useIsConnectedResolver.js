import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import * as jwt from "jsonwebtoken";
export default () => {
  const { authState, Signin_Default, Signout } = useContext(AuthContext);
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
  return [isConnectedResolver];
};
