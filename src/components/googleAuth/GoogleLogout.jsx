import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";

function LoginGoogle() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("googleId") ? true : false,
  );

  useEffect(() => {}, [isLoggedIn]);

  function successResponse(response) {
    console.log(response);
    window.localStorage.setItem("googleId", response.googleId);
    window.localStorage.setItem("token", response.tokenId);
    setIsLoggedIn(true);
  }

  function failureResponse(response) {
    console.log(response);
  }

  function logout() {
    setIsLoggedIn(false);
    window.localStorage.removeItem("googleId");
    window.localStorage.removeItem("token");
  }

  return (
    <div>
      {!isLoggedIn && (
        <GoogleLogin
          clientId="1051344250432-dqb023v44kpthq3mn2mje13irctkev68.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={successResponse}
          onFailure={failureResponse}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </div>
  );
}

export default LoginGoogle;
