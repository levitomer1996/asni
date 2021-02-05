import React from "react";
import { useParams } from "react-router-dom";
import { useStyles } from "./Comps/ProductDetailsPage.style";
function ProductDetailsPage() {
  const classes = useStyles();
  const { id } = useParams();
  return <div>{id}</div>;
}

export default ProductDetailsPage;
