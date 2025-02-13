// import React, { useState } from "react";
// import FacebookLogin from "react-facebook-login";

// const FacebookAuth = () => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [userData, setUserData] = useState({});

//   const responseFacebook = (response) => {
//     if (response.status !== "unknown") {
//       setIsLogged(true);
//       setUserData(response);
//     } else {
//       setIsLogged(false);
//       setUserData({});
//     }
//   };

//   return (
//     <div>
//       {isLogged ? (
//         <div>
//           <h2>Welcome, {userData.name}!</h2>
//           <p>Email: {userData.email}</p>
//           <p>ID: {userData.id}</p>
//         </div>
//       ) : (
//         <FacebookLogin
//           appId="1443309293135308" // Your Facebook App ID
//           autoLoad={false}
//           fields="name,email,picture"
//           callback={responseFacebook}
//         />
//       )}
//     </div>
//   );
// };

// export default FacebookAuth;
// import React from "react";
// import FacebookAuth from "react-facebook-auth";

// const MyFacebookButton = ({ onClick }) => (
//   <button onClick={onClick}>Login with facebook</button>
// );

// const authenticate = (response) => {
//   console.log(response);
//   // Api call to server so we can validate the token
// };

// export const AuthApp = () => (
//   <div>
//     <h1>Facebook Auth</h1>
//     <FacebookAuth
//       appId="1443309293135308"
//       callback={authenticate}
//       component={MyFacebookButton}
//     />
//   </div>
// );

// import { FacebookLoginButton } from "react-social-login-buttons";
// import { LoginSocialFacebook } from "reactjs-social-login";

// function FacebookAuth() {
//   return (
//     <div className="App">
//       <LoginSocialFacebook
//         appId="1443309293135308"
//         onResolve={(response) => {
//           console.log(response);
//         }}
//         onReject={(error) => {
//           console.log(error);
//         }}
//       >
//         <FacebookLoginButton />
//       </LoginSocialFacebook>
//     </div>
//   );
// }

// export default FacebookAuth;

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import { FacebookLogin } from "react-facebook-login";

const Facebook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLoggedIn(true);
      setUser(userId);
    }
  }, []);

  const handleLogin = () => {
    const loginData = {
      appId: "1443309293135308",
      // The redirect URI is the URL that Facebook will redirect the user to after they login.
      // It must match the redirect URI that you configured in your Facebook app.
      redirectUri: "http://localhost:3000/login",
    };

    const fbLogin = new FacebookLogin(loginData);
    fbLogin.login(async (response) => {
      if (response.status === "connected") {
        // The user is logged in.
        setIsLoggedIn(true);
        setUser(response.userID);
        localStorage.setItem("userId", response.userID);
      } else {
        // The user is not logged in.
        setIsLoggedIn(false);
        setUser(null);
      }
    });
  };

  const handleLogout = () => {
    // Log the user out of Facebook.
    const fbLogin = new FacebookLogin();
    fbLogin.logout();

    // Remove the user ID from local storage.
    localStorage.removeItem("userId");

    // Set the user state to null.
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn && <h1>Welcome, {user}</h1>}
      {!isLoggedIn && (
        <button onClick={handleLogin}>Login with Facebook</button>
      )}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

const rootElement = document.getElementById("root");

export default Facebook;
