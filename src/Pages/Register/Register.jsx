import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Component/Hook/UseTitle";
import Swal from "sweetalert2";

const Register = () => {
  useTitle("Register");
  const { createUser, googleLogin, updateNameProfile } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;


    if (!/.{8,}/.test(password)) {
      setError("At Least 8 charter");
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setError("At Least one digit");
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setError("At least one upper case");
      return;
    }



    createUser(email, password)
      .then((result) => {
        updateNameProfile(name, photo);
        const createdUser = result.user;
        if (createdUser) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Register has been successful",
          });
        }
        
      })
      .catch((error) => {
        setError(error.message.slice(22, -2));
      });
    form.reset();
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        
      })
      .catch((error) => {
        setError(error.message.slice(22, -2));
      });
  };

  return (
    <div className="my-5">
      <div className="hero md:min-h-screen bg-[#ccf7ff]">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card w-full  md:w-[500px]  shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  required
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
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL "
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text text-red-600">{error}</span>
                </label>
                <p className="my-2">
                  Already You Have an account ?{" "}
                  <Link to="/login" className="">
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-black bg-[#ccf7ff] hover:bg-[#aeedf8]"
                  type="submit"
                  value="Register"
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

export default Register;
