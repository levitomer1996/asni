import React, { useState, useEffect } from "react";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
        setIsLogged(true);
      } else if (response.status === "not_authorized") {
        console.log(response);
      } else {
      }
    });
  }, []);
  return <div></div>;
};

export default App;
