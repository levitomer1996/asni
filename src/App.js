import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import GeneralModal from "./Components/Modal/GeneralModal";
import { CartProvider } from "./context/CartContext";
import StickyFooter from "./Components/StickyFooter/StickyFooter";
import firebase from "firebase";

function App() {
  const [isFireBaseInitialzied, setIsFireBaseInitialzied] = useState(false);
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBsHQD2jUbrrLkYognG6FJcsghOWoPXOK4",
        authDomain: "asni-fe779.firebaseapp.com",
        projectId: "asni-fe779",
        storageBucket: "asni-fe779.appspot.com",
        messagingSenderId: "818610157909",
        appId: "1:818610157909:web:0051512384899b74b657dc",
        measurementId: "G-LEYBF1CLP7",
      });
    }
    setIsFireBaseInitialzied(true);
  }, []);
  return (
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
  );
}

export default App;
