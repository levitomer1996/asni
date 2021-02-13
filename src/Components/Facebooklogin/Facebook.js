import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles } from "@material-ui/core/styles";

function Facebook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [fbc, setFBC] = useState(null);

  const componentClicked = () => {
    console.log("Clicked");
  };
  const responseFacebook = (res) => {
    console.log(res);
  };
  useEffect(() => {
    let fbContent;
    if (isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="434387431148548"
          autoLoad={false}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          textButton="התחבר עם פייסבוק"
          icon={<FacebookIcon />}
        />
      );
    }
    setFBC(fbContent);
  }, []);
  return <div>{fbc}</div>;
}

export default Facebook;
