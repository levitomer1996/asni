import React, { useState } from "react";
import asni_server from "../api/asni_server";
export default () => {
  const [specials, setSpecials] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const getSpecials = async () => {
    try {
      setSpinner(true);
      const res = await asni_server.get("/allspecials");
      setSpecials(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getSpecials, specials, spinner];
};
