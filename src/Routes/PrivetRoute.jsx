import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import Swal from "sweetalert2";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    Swal.fire(
      'You have to log in first to view details',
    )
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;
