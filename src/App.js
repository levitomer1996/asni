import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main";
import GeneralModal from "./Components/Modal/GeneralModal";
import StickyFooter from "./Components/StickyFooter/StickyFooter";

import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { CartProvider } from "./context/CartContext";
import { AppProvider } from "./context/AppContext";

import { BrowserRouter as Router } from "react-router-dom";

import Firebase_Config from "./api/Firebase_Config";
import firebase from "firebase";

function App() {
  const [isFireBaseInitialzied, setIsFireBaseInitialzied] = useState(false);
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(Firebase_Config);
    }
    setIsFireBaseInitialzied(true);
  }, []);
  return (
    <AppProvider>
      <AuthProvider>
        <CartProvider>
          <ModalProvider>
            <Router>
              <div>
                <GeneralModal />
                <Header isFireBaseInitialzied={isFireBaseInitialzied} />
                <Main />
                <StickyFooter />
              </div>
            </Router>
          </ModalProvider>
        </CartProvider>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
