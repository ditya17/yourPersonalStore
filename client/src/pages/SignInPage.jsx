import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { saveLogin } from "../functions/auth";

function SignInPage() {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwt_decode(
      credentialResponse.credential
    );

    const userEmail = credentialResponseDecoded.email;

    if (isUserAdmin(userEmail)) {
      navigate("/admin");
    } else {
      navigate("/user");
    }
    saveLogin(credentialResponseDecoded);

    const { name, email } = credentialResponseDecoded;

    sendUserDataToBackend({ name, email });
  };

  const handleGoogleLoginError = () => {
    console.log("Login Failed");
  };

  const isUserAdmin = (email) => {
    const adminEmails = [
      "eraf9120@gmail.com",
      "nitya17nitya@gmail.com",
      "ritik2002july@gmail.com",
    ];
    return adminEmails.includes(email);
  };

  const sendUserDataToBackend = (userData) => {
    if (!isUserAdmin(userData.email)) {
      fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data sent to backend:", data);
        })
        .catch((error) => {
          console.error("Error sending data to backend:", error);
        });
    }
  };

  return (
    <div className="bg-yellow-200 min-h-screen flex flex-col justify-center items-center">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4 text-blue-800">
      Sign In to Your Personal Store
    </h1>
    <div className="google-login">
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginError}
      />
    </div>
  </div>
</div>

  );
}

export default SignInPage;
