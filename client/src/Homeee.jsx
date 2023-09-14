import React from "react";
import { logout } from "./functions/auth";

function Homeee(){
  return (
    <div className="bg-blue-200 p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">
        Welcome to My Tailwind React App
      </h1>

      <button className="profile-settings" onClick={()=>{
          logout()
          window.location.replace("/");
        }}>Logout</button>
    </div>
    
  )

}

export default Homeee;