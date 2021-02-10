import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./SignupPage/SignupPage";
import SigninPage from "./Signin/SigninPage";
import IndexPage from "./IndexPage.js/IndexPage";
import ProductPage from "./ProductPage/ProductPage";
import ProductDetailsPage from "./ProductDetailsPage/ProductDetailsPage";
import AdminPage from "./AdminPage/AdminPage";
import useIsConnectedResolver from "../hooks/useIsConnectedResolver";
import AccountPage from "./AccountPage.js/AccountPage";
import PaymentPage from "./PaymentPage/PaymentPage";
import { PaymentProvider } from "../context/PaymentContext";
import { AdminPageProvider } from "../context/AdminPageContext";

function Main() {
  const [isConnectedResolver] = useIsConnectedResolver();
  useEffect(() => {
    isConnectedResolver();
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <IndexPage />
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
      <Route path="/asminadmin">
        <AdminPageProvider>
          <AdminPage />
        </AdminPageProvider>
      </Route>

      <Route path="/accountpage/:section">
        <AccountPage />
      </Route>
      <Route exact path="/payment">
        <PaymentProvider>
          <PaymentPage />
        </PaymentProvider>
      </Route>
      <Route exact path="/payment/complete">
        <PaymentProvider>
          <PaymentPage />
        </PaymentProvider>
      </Route>
    </Switch>
  );
}

export default Main;
