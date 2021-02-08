import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./Modal.style";
import Button from "@material-ui/core/Button";
import CartContext from "../../../context/CartContext";
import { Redirect } from "react-router";
import ModalContext from "../../../context/ModalContext";
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
      <Grid item>{ammount}</Grid>
      <Grid item>{price}₪</Grid>
    </Grid>
  );
};
function sumTotalPrice(list) {
  let total = 0;
  for (let index = 0; index < list.length; index++) {
    total = total + list[index].price * list[index].ammount;
  }
  return total;
}

function CartModal() {
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const classes = useStyles();
  const { cartState } = useContext(CartContext);
  const { setIsModalOpen } = useContext(ModalContext);

  useEffect(() => {
    if (redirect) {
      setIsModalOpen();
    }
  }, [redirect]);
  const { products } = cartState;
  const handleSumbit = (price) => {
    if (price >= 52) {
      setRedirect(true);
    } else if (price < 52) {
      setError(true);
    }
  };

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
      {redirect ? <Redirect to="/payment" /> : null}
      <div className={classes.cart_container}>
        {products.map((prod) => {
          return (
            <CartItem
              title={prod.title}
              price={prod.price}
              key={prod.id}
              ammount={prod.ammount}
            />
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
          onClick={() => {
            handleSumbit(sumTotalPrice(products));
          }}
        >
          ₪{sumTotalPrice(products)} המשך לתשלום
        </Button>
      </div>
      {error ? (
        <Typography style={{ color: "red" }}>מינימום הזמנה 52₪</Typography>
      ) : null}
    </div>
  );
}

export default CartModal;
