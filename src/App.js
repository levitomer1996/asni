import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import GeneralModal from "./Components/Modal/GeneralModal";
import { CartProvider } from "./context/CartContext";
import StickyFooter from "./Components/StickyFooter/StickyFooter";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ModalProvider>
          <Router>
            <div>
              <GeneralModal />
              <Header />
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
