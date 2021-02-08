import React, { useState } from "react";
import SideMenu from "./Comps/SideMenu";
import { useStyles } from "./Comps/AccountPage.style";
import { Redirect, useParams } from "react-router";
import renderPage from "./Comps/renderPage";
const AccountPage = () => {
  const classes = useStyles();
  const { section } = useParams("section");
  const [redirect, setRedirect] = useState("orders");

  return (
    <div className={classes.root}>
      <Redirect to={redirect} />
      <div dir="rtl">{renderPage(redirect)}</div>{" "}
      <SideMenu setRedirect={setRedirect} />
    </div>
  );
};

export default AccountPage;
