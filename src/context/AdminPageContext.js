import React, { useReducer } from "react";

const AdminPageContext = React.createContext();
const AdminPageReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "set_page":
      return { ...state, page: payload };
    case "set_product_page_state":
      return { ...state, productPageState: payload };
  }
};

export const AdminPageProvider = ({ children }) => {
  //d = dispatch
  const [adminpageState, d] = useReducer(AdminPageReducer, {
    page: "orders",
    productPageState: {},
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };

  const setPage = (page) => {
    dispatch("set_page", page);
  };
  const setProductPageState = (product) => {
    dispatch("set_product_page_state", product);
  };
  return (
    <AdminPageContext.Provider
      value={{
        adminpageState,
        setPage,
        setProductPageState,
      }}
    >
      {children}
    </AdminPageContext.Provider>
  );
};
export default AdminPageContext;
