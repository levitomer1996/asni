import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./SignupPage/SignupPage";
import SigninPage from "./Signin/SigninPage";
import IndexPage from "./IndexPage.js/IndexPage";
import ProductPage from "./ProductPage/ProductPage";
import ProductDetailsPage from "./ProductDetailsPage/ProductDetailsPage";
function Main() {
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
    </Switch>
  );
}

export default Main;
