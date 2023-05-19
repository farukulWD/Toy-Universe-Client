import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/carLogo.png";
import { AuthContext } from "../../Context/AuthProvider";

const Menubar = () => {
  const [isHover, setIsHover] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOver = () => {
    setIsHover(true);
  };
  const handleOut = () => {
    setIsHover(false);
  };

  const MenuItem = () => {
    return (
      <>
        <li>
          <Link className=" hover:border-b-2 ">Home</Link>
        </li>
        <li>
          <Link to="/allToy" className=" hover:border-b-2 ">All Toys</Link>
        </li>
        <li>
          <Link className=" hover:border-b-2 ">Blogs</Link>
        </li>
        {user && (
          <>
            {" "}
            <li>
              <Link to="/myToy" className=" hover:border-b-2 ">My Toys</Link>
            </li>
            <li>
              <Link to="/addToy" className=" hover:border-b-2 ">Add A Toy</Link>
            </li>
          </>
        )}
      </>
    );
  };

  return (
    <div className="navbar bg-[#ccf7ff] my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <MenuItem></MenuItem>
          </ul>
        </div>

        <div className="flex items-center">
          <img className="w-16 h-16 rounded-md" src={logo} alt="logo" />
          <a className="text-xl font-bold hidden md:block">Toy Universe</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuItem></MenuItem>
        </ul>
      </div>
      <div className="navbar-end relative mr-5">
        {user ? (
          <>
            <div>
              <img
                onMouseOver={handleOver}
                onMouseOut={handleOut}
                className="h-10 w-10 rounded-full mr-5"
                src={user?.photoURL}
                alt=""
              />

              {isHover ? (
                <p className="text-black absolute top-13 right-15 bg-base-200 py-2 px-2 ">
                  {user && user.displayName}
                </p>
              ) : (
                ""
              )}
            </div>
            <Link onClick={handleSignOut}>Log Out</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Menubar;
