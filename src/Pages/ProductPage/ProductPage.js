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
    <div className={classes.container}>
      <div className={classes.root} spacing={3}>
        {products.map((prod) => {
          return (
            <div style={{ marginBottom: 10 }}>
              <ProductCard
                title={prod.title}
                key={prod.id}
                description={prod.description}
                img_url={prod.img_url}
                price={prod.price}
                share_link={`/productdetails/${prod.id}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
