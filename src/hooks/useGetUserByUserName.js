import React, { useState } from "react";
import asni_server from "../api/asni_server";
export default () => {
  const [users, setUsers] = useState([]);
  const searchProduct = async (list, indicator) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].email.includes(indicator)) {
        setUsers([...users, list[i]]);
      }
    }
  };
  return [searchProduct, users];
};
