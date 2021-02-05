import React, { useReducer } from "react";

const CartContext = React.createContext();
const CartReducer = (state, action) => {
  switch (action.type) {
    case "set_cart_products":
      return { ...state, products: action.payload };
    case "add_product":
      return { ...state, products: [...state.products, action.payload] };
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, d] = useReducer(CartReducer, {
    products: [],
  });

  function dispatch(type, data) {
    d({ type, payload: data });
  }
  const setCartProducts = (data) => {
    dispatch("set_cart_products", data);
  };
  const addProduct = (data) => {
    dispatch("add_product", data);
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
