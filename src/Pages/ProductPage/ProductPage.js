import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useGetAllProducts from "../../hooks/useGetAllProducts";
import { useStyles } from "./Comps/ProductPage.style";
import Spinner from "../../Components/Spinner/Spinner";
const ProductPage = () => {
  const classes = useStyles();
  const [getAllProducts, products, spinner] = useGetAllProducts();
  useEffect(() => {
    getAllProducts();
  }, []);
  if (spinner) {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Spinner color={"rgb(137, 6, 137)"} width={"200px"} />
        </Grid>
      </Grid>
    );
  }
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
