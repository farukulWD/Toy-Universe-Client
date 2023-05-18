import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("Error");
  const { loginUser,googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero md:min-h-screen bg-[#ccf7ff]">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
          <div className="card w-full  md:w-[500px]  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <label className="label">
                <span className="label-text text-red-600">{error}</span>
              </label>
              <p className="my-2">
                New to Toy universe ?{" "}
                <Link to="/register" className="">
                  Register
                </Link>
              </p>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>

              <div className="text-center">
                <p>Or</p>
                <p>Login with</p>
                <div className="text-3xl my-2">
                  <button onClick={handleGoogleLogin}>
                    <FcGoogle></FcGoogle>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
