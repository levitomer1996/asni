import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useGetAllProducts from "../../hooks/useGetAllProducts";
import { useStyles } from "./Comps/ProductPage.style";
const ProductPage = () => {
  const classes = useStyles();
  const [getAllProducts, products, spinner] = useGetAllProducts();
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Grid
      container
      direction="row-reverse"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      {products.map((prod) => {
        return (
          <Grid item>
            <ProductCard
              title={prod.title}
              key={prod.id}
              description={prod.description}
              img_url={prod.img_url}
              price={prod.price}
              share_link={`/productdetails/${prod.id}`}
              id={prod.id}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductPage;
