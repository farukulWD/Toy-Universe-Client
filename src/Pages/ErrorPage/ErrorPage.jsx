import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <div className="hero md:min-h-screen relative">
        <img className="w-[1300px] h-[600px] " src="https://i.ibb.co/NxQzq4V/404-error-page-not-found.jpg" alt="" />
      </div>
      <button className=" absolute bottom-20 left-[50%] btn text-black hover:text-white mb-10  text-lg bg-[#ccf7ff]"><Link to="/">Go Home</Link></button>
    </div>
  );
};

export default ErrorPage;
