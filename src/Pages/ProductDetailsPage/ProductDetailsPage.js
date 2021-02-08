import React, { useEffect, useContext } from "react";
import { Button, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useStyles } from "./Comps/ProductDetailsPage.style";
import useGetProduct from "../../hooks/useGetProduct";
import CircularProgress from "@material-ui/core/CircularProgress";
import CartContext from "../../context/CartContext";
function ProductDetailsPage() {
  const classes = useStyles();
  const { addProduct } = useContext(CartContext);
  const [getProduct, product, spinner] = useGetProduct();
  const { id } = useParams();
  const { title, price, img_url, description } = product;
  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);
  if (spinner) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <CircularProgress
          style={{ width: 100, height: 100, color: "purple" }}
        />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.left_container}>
        <img src={product.img_url} className={classes.img} />
      </div>
      <div className={classes.right_container}>
        <div className={classes.item}>
          <Typography className={classes.product_title}>{title}</Typography>
        </div>
        <div className={classes.item}>
          <Typography className={classes.product_price}>{price}₪ </Typography>
        </div>
        <div className={classes.item}>
          <Typography className={classes.product_price}>
            {description}
          </Typography>
        </div>
        <div className={classes.item}>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "purple" }}
            onClick={() => {
              addProduct({ title, price, img_url, description });
            }}
          >
            הוסף לעגלה
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
