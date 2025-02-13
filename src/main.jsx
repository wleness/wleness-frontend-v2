import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/style.css";
import CookieConsent from "react-cookie-consent";

function Root() {
  // State to track whether the user has accepted cookies
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(
    localStorage.getItem("userAcceptedCookies") === "true",
  );

  useEffect(() => {
    // Check if the user has previously accepted cookies
    const storedAcceptedCookies = localStorage.getItem("userAcceptedCookies");
    if (storedAcceptedCookies === "true") {
      setHasAcceptedCookies(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Update user's consent status in local storage
    localStorage.setItem("userAcceptedCookies", "true");
    setHasAcceptedCookies(true);
  };

  return (
    <React.StrictMode>
      {!hasAcceptedCookies && ( // Only render CookieConsent if not accepted
        <CookieConsent
          debug={true}
          hideOnAccept={true}
          enableDeclineButton
          onAccept={handleAcceptCookies}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      )}

      <App />
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
