import React, { useReducer } from "react";
import firebase from "firebase";
var types = { FACEBOOK: "FACEBOOK", DEFAULT: "DEFAULT" };
var { FACEBOOK, DEFAULT } = types;
const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin_default":
      return { isLogged: true, user: action.payload, type: DEFAULT };
    case "signin_facebook":
      return { isLogged: true, user: action.payload, type: FACEBOOK };
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
    type: null,
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const Signin_Default = (data) => {
    dispatch("signin_default", data);
    return;
  };
  const Signin_Facebook = (data) => {
    dispatch("signin_facebook", data);
  };
  const Signout = () => {
    if (authState.type === FACEBOOK) {
      firebase.auth().signOut();
    }
    dispatch("signout");
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        Signin_Facebook,
        Signin_Default,
        Signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
