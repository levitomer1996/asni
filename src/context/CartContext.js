import { ReportTwoTone } from "@material-ui/icons";
import React, { useReducer } from "react";

const CartContext = React.createContext();
const CartReducer = (state, action) => {
  switch (action.type) {
    case "set_cart_products":
      return { ...state, products: action.payload };
    case "add_product":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "set_total_price":
      return { ...state, totalPrice: action.payload };
  }
};

function isProductAlreadyInCart(list, product) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === product.id) {
      return true;
    }
  }
}
function getProductIndex(list, product) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === product.id) {
      return i;
    }
  }
}

export const CartProvider = ({ children }) => {
  const [cartState, d] = useReducer(CartReducer, {
    products: [],
    totalPrice: 0,
  });

  function dispatch(type, data) {
    d({ type, payload: data });
  }
  const setCartProducts = (data) => {
    dispatch("set_cart_products", data);
  };

  const addProduct = (data) => {
    if (cartState.products.length === 0) {
      dispatch("add_product", { ...data, ammount: 1 });
      setTotalPrice();
      return;
    }
    if (isProductAlreadyInCart(cartState.products, data)) {
      let list = cartState.products;
      let prodIndex = getProductIndex(cartState.products, data);
      list.splice(prodIndex, 1, {
        ...data,
        ammount: cartState.products[prodIndex].ammount + 1,
      });

      setCartProducts(list);
      setTotalPrice();
    } else if (!isProductAlreadyInCart(cartState.products, data)) {
      dispatch("add_product", { ...data, ammount: 1 });
      setTotalPrice();
    }
  };

  const setTotalPrice = () => {
    let total = 0;
    for (let index = 0; index < cartState.products.length; index++) {
      total =
        total +
        cartState.products[index].price * cartState.products[index].ammount;
    }
    dispatch("set_total_price", total);
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        setCartProducts,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
