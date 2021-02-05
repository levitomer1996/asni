import React, { useState } from "react";
import asni_server from "../api/asni_server";
export default () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const getAllProducts = async () => {
    try {
      setSpinner(true);
      const res = await asni_server.get("/allproducts");
      setSpinner(false);
      setProducts(res.data);
    } catch {
      setSpinner(false);
    }
  };
  return [getAllProducts, products, spinner];
};
