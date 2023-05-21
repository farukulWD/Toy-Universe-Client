import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Component/Hook/UseTitle";

const Login = () => {
  useTitle("Login");
  const location = useLocation();
  const [error, setError] = useState("");
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from);
      })
      .catch((error) => setError(error.message.slice(22, -2)));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        

        
        navigate(from);
      })
      .catch((error) => {
        setError(error.message.slice(22,-2));
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
                  className="btn text-black bg-[#ccf7ff] hover:bg-[#aeedf8]"
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
