import React, { useState } from "react";
import asni_server from "../api/asni_server";
export default () => {
  const [products, setProducts] = useState([]);
  const searchProduct = async (list, indicator) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].title.includes(indicator)) {
        setProducts([...products, list[i]]);
      }
    }
  };
  return [searchProduct, products];
};
