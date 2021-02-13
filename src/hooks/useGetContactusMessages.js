import React, { useState } from "react";
import asni_server from "../api/asni_server";

export default () => {
  const [messages, setMessages] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const getMessages = async () => {
    try {
      setSpinner(true);
      const res = await asni_server.get("/getallcontantus");
      setMessages(res.data);
      console.log(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getMessages, messages, spinner];
};
