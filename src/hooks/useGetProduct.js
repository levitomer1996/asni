import React, { useState } from "react";
import asni_server from "../api/asni_server";

export default () => {
  const [product, setProduct] = useState({});
  const [spinner, setSpinner] = useState(false);
  const getProduct = async (id) => {
    try {
      setSpinner(true);
      const res = await asni_server.get(`getprodbyid/${id}`, {});
      console.log(res.data);
      setProduct(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getProduct, product, spinner];
};
