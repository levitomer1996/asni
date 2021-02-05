import React, { useReducer } from "react";

const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { isLogged: true };
    case "signout":
      return { isLogged: false };
    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  //d = dispatch
  const [authState, d] = useReducer(AuthReducer, {
    isLogged: false,
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const Signin = () => {
    dispatch("signin");
    return;
  };
  const Signout = () => {
    dispatch("signout");
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        Signin,
        Signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
