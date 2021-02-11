import React, { useState } from "react";
import asni_server from "../api/asni_server";
export default () => {
  const [users, setUsers] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const getUsers = async () => {
    try {
      setSpinner(true);
      const res = await asni_server.get("/getallusers");
      console.log(res.data);
      setSpinner(false);
      setUsers(res.data);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getUsers, users, spinner];
};
