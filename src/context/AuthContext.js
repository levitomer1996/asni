import React, { useReducer } from "react";

const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { isLogged: true, user: action.payload };
    case "signout":
      localStorage.removeItem("ut");
      return { isLogged: false, user: {} };
    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  //d = dispatch
  const [authState, d] = useReducer(AuthReducer, {
    isLogged: false,
    user: {},
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const Signin = (data) => {
    dispatch("signin", data);
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
