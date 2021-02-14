import React, { useReducer } from "react";
import firebase from "firebase";
var types = { FACEBOOK: "FACEBOOK", DEFAULT: "DEFAULT" };
var { FACEBOOK, DEFAULT } = types;
const AppContext = React.createContext();
const AppReducer = (state, action) => {
  switch (action.type) {
    case "set_delivery_available":
      return { ...state, deliveryAvailable: action.payload };
    default:
      break;
  }
};

export const AppProvider = ({ children }) => {
  //d = dispatch
  const [appState, d] = useReducer(AppReducer, { deliveryAvailable: null });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const setDeliveryAvailable = (data) => {
    dispatch("set_delivery_available", data);
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        setDeliveryAvailable,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
