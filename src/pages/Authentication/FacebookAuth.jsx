import React, { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

export default function FacebookAuth() {
  const [profile, setProfile] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const logout = () => {
    setProfile(null);
    setUserDetails(null);
    // Redirect the user to the login page
  };

  return (
    <div>
      {!profile ? (
        <LoginSocialFacebook
          appId="868219484212070" // Replace with your Facebook App ID
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);

            // Serialize the user details object to a string
            const serializedUserDetailsString = JSON.stringify(response.data);

            // Set the serialized user details string to localStorage
            localStorage.setItem("userDetails", serializedUserDetailsString);

            // Set the user details state variable
            setUserDetails(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} alt="User Profile" />
          <button className="" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
