import React, { useState } from "react";
import SideMenu from "./Comps/SideMenu";
import { useStyles } from "./Comps/AccountPage.style";
import { Redirect, useParams } from "react-router";
import AccountPageMobile from "./AccoutPageMobile";
import renderPage from "./Comps/renderPage";
const AccountPage = () => {
  const classes = useStyles();
  const { section } = useParams("section");
  const [redirect, setRedirect] = useState("orders");

  return (
    <div>
      <div className={classes.root}>
        <Redirect to={redirect} />
        <div dir="rtl">{renderPage(redirect)}</div>{" "}
        <SideMenu setRedirect={setRedirect} />
      </div>
      <AccountPageMobile />
    </div>
  );
};

export default AccountPage;
