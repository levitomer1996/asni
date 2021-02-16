import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Fade, Zoom } from "@material-ui/core";

import SignupPage from "./SignupPage/SignupPage";
import SigninPage from "./Signin/SigninPage";
import IndexPage from "./IndexPage.js/IndexPage";
import ProductPage from "./ProductPage/ProductPage";
import ProductDetailsPage from "./ProductDetailsPage/ProductDetailsPage";
import AdminPage from "./AdminPage/AdminPage";
import OrderCompletePage from "./OrderCompletePage/OrderCompletePage";

import AccountPage from "./AccountPage.js/AccountPage";
import PaymentPage from "./PaymentPage/PaymentPage";
import ContactusPage from "./ContactusPage/ContactusPage";
import { PaymentProvider } from "../context/PaymentContext";
import { AdminPageProvider } from "../context/AdminPageContext";

import useAppInitializer from "../hooks/useAppInitializer";

function Main() {
  const { initializeApp } = useAppInitializer();

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(async () => {
    await initializeApp();
    setIsInitialized(true);
  }, []);
  return (
    <Fade in={isInitialized}>
      <div>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>{" "}
          <Route exact path="/contact">
            <ContactusPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/signin">
            <SigninPage />
          </Route>
          <Route path="/products">
            <ProductPage />
          </Route>
          <Route path="/productdetails/:id">
            <ProductDetailsPage />
          </Route>
          <Route path="/asniadmin">
            <AdminPageProvider>
              <AdminPage />
            </AdminPageProvider>
          </Route>
          <Route path="/accountpage/:section">
            <AccountPage />
          </Route>
          <PaymentProvider>
            <Route exact path="/payment">
              <PaymentPage />
            </Route>
            <Route exact path="/complete">
              {" "}
              <OrderCompletePage />
            </Route>
          </PaymentProvider>
        </Switch>
      </div>
    </Fade>
  );
}

export default Main;
