import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

const PaymentContext = React.createContext();
const PaymentReducer = (state, action) => {
  switch (action.type) {
    case "set_first_name":
      return {
        ...state,
        adressForm: { ...state.adressForm, firstName: action.payload },
      };
    case "set_last_name":
      return {
        ...state,
        adressForm: { ...state.adressForm, lastName: action.payload },
      };
    case "set_street":
      return {
        ...state,
        adressForm: { ...state.adressForm, street: action.payload },
      };
    case "set_house_number":
      return {
        ...state,
        adressForm: { ...state.adressForm, houseNumber: action.payload },
      };
    case "set_appartment":
      return {
        ...state,
        adressForm: { ...state.adressForm, appartment: action.payload },
      };
    case "set_floor":
      return {
        ...state,
        adressForm: { ...state.adressForm, floor: action.payload },
      };
    case "set_is_button_disabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case "set_name_on_card":
      return {
        ...state,
        paymentForm: { ...state.paymentForm, nameOnCard: action.payload },
      };
    case "set_card_number":
      return {
        ...state,
        paymentForm: { ...state.paymentForm, cardNumber: action.payload },
      };
    case "set_exp_month":
      return {
        ...state,
        paymentForm: { ...state.paymentForm, expiryMonth: action.payload },
      };
    case "set_exp_year":
      return {
        ...state,
        paymentForm: { ...state.paymentForm, expiryYear: action.payload },
      };
    case "set_type":
      return {
        ...state,
        paymentForm: { ...state.paymentForm, type: action.payload },
      };
    case "set_cvv":
      return {
        ...state,
        paymentForm: { ...state.paymentForm, cvv: action.payload },
      };
    default:
      break;
  }
};

export const PaymentProvider = ({ children }) => {
  const [paymentState, dispatch] = useReducer(PaymentReducer, {
    isButtonDisabled: false,
    adressForm: {},
    paymentForm: {},
  });
  const d = (type, payload) => {
    dispatch({ type, payload });
  };

  const setFirstName = (data) => {
    d("set_first_name", data);
  };
  const setLastName = (data) => {
    d("set_last_name", data);
  };
  const setStreet = (data) => {
    d("set_street", data);
  };
  const setHouseNumber = (data) => {
    d("set_house_number", data);
  };
  const setAppartment = (data) => {
    d("set_appartment", data);
  };
  const setFloor = (data) => {
    d("set_floor", data);
  };
  const setIsButtonDisabled = (data) => {
    d("set_is_button_disabled", data);
  };

  // paymentForm Form functions
  const setNameOnCard = (data) => {
    d("set_name_on_card", data);
  };

  const setCardNumber = (data) => {
    d("set_card_number", data);
  };
  const setExpMonth = (data) => {
    d("set_exp_month", data);
  };
  const setExpYear = (data) => {
    d("set_exp_year", data);
  };
  const setCvv = (data) => {
    d("set_cvv", data);
  };
  const setType = (data) => {
    d("set_type", data);
  };
  return (
    <PaymentContext.Provider
      value={{
        paymentState,
        setFirstName,
        setLastName,
        setStreet,
        setFloor,
        setHouseNumber,
        setAppartment,
        setIsButtonDisabled,
        setType,
        setNameOnCard,
        setCardNumber,
        setExpMonth,
        setExpYear,
        setCvv,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
export default PaymentContext;
