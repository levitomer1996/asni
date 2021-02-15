import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import asni_server from "../api/asni_server";
export default () => {
  const { setDeliveryAvailable } = useContext(AppContext);
  const getControlBoard = async () => {
    try {
      const res = await asni_server.get("/getcontrolpanel");
      setDeliveryAvailable(res.data);
    } catch (error) {}
  };
  return [getControlBoard];
};
