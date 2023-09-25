import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { saveLogin } from "../../functions/auth";

const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-200 p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">
        SignIn to yourPersonal Store
      </h1>
      <div className="google-login">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const CredentialResponseDecoded = jwt_decode(
              credentialResponse.credential
            );
            console.log("whatever");
            console.log(CredentialResponseDecoded);

            saveLogin(CredentialResponseDecoded);
            navigate("/dashboard");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        {/* <button onClick={() => googleLogout()}>Logout</button> */}
      </div>
    </div>
  );
};

export default SigninPage;
