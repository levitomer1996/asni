import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./Modal.style";
import Button from "@material-ui/core/Button";
import CartContext from "../../../context/CartContext";
const CartItem = (props) => {
  const { title, id, price, ammount } = props;
  return (
    <Grid
      container
      direction="row-reverse"
      justify="flex-start"
      alignItems="center"
      spacing={5}
      style={{ padding: 20, borderBottom: "0.5px solid #80808047" }}
    >
      <Grid item>{title}</Grid>
      <Grid item>x1</Grid>
      <Grid item>{price}₪</Grid>
    </Grid>
  );
};
function sumTotalPrice(list) {
  let total = 0;
  for (let index = 0; index < list.length; index++) {
    total = total + list[index].price;
  }
  return total;
}

function CartModal() {
  const classes = useStyles();
  const { cartState } = useContext(CartContext);
  const { products } = cartState;
  if (products.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        העגלה ריקה
      </div>
    );
  }
  return (
    <div>
      <div className={classes.cart_container}>
        {products.map((prod) => {
          return (
            <CartItem title={prod.title} price={prod.price} key={prod.id} />
          );
        })}
      </div>
      <div className={classes.cart_modal_btn}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 20, backgroundColor: "rgb(137, 6, 137)" }}
        >
          הוסף עוד מוצרים לעגלה
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#d92c4b" }}
        >
          ₪{sumTotalPrice(products)} המשך לתשלום
        </Button>
      </div>
    </div>
  );
}

export default CartModal;
