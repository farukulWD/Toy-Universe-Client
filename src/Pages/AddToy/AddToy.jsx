import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  
  return (
    <div className="hero py-5 md:min-h-screen bg-[#ccf7ff]">
      <div className="hero-content flex-col">
        <h2 className="text-3xl font-bold">Add Your Toy</h2>
        <div className="card w-full  md:w-[500px]  shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy picture</span>
                  </label>
                  <input
                    className="input input-bordered"
                    placeholder="Picture URL of the toy"
                    {...register("picture", { required: true })}
                  />
                  {errors.picture && (
                    <span className="text-red-600">
                      Provide Toy Photo url please
                    </span>
                  )}
                </div>

                <div className="form-control my-6">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input
                    className="input input-bordered"
                    placeholder="Toy Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600">Provide Toy Name</span>
                  )}
                </div>

                <div className="form-control my-6">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    className="input input-bordered"
                    defaultValue={user ? user.displayName : ""}
                    placeholder="seller name"
                    {...register("seller_name", { required: true })}
                  />
                  {errors.seller_name && (
                    <span className="text-red-600">
                      Provide Toy seller name
                    </span>
                  )}
                </div>

                <div className="form-control my-6">
                  <label className="label">
                    <span className="label-text">Seller email</span>
                  </label>
                  <input
                    className="input input-bordered"
                    defaultValue={user ? user.email : ""}
                    placeholder="seller email"
                    {...register("seller_email", { required: true })}
                  />
                  {errors.seller_email && (
                    <span className="text-red-600">
                      Provide Toy seller email
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub category</span>
                  </label>
                  <select
                    className="input input-bordered"
                    {...register("sub_category", { required: true })}
                  >
                    <option value="sports car">sports car</option>
                    <option value="truck">truck</option>
                    <option value="regular car">regular car</option>
                    <option value="mini fire truck">mini fire truck</option>
                    <option value="mini police car">mini police car</option>
                  </select>
                </div>

                <div className="form-control px-2 my-6">
                  <div className="flex">
                    <div className="mr-2">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        className="input w-full input-bordered"
                        placeholder="Price"
                        {...register("price", { required: true })}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <input
                        className="input w-full input-bordered"
                        placeholder="Rating"
                        {...register("rating", { required: true })}
                      />
                    </div>
                  </div>
                  {errors.seller_email && (
                    <span className="text-red-600">
                      Provide Toy seller email
                    </span>
                  )}
                </div>

                <div className="form-control my-6">
                  <label className="label">
                    <span className="label-text">Available quantity</span>
                  </label>
                  <input
                    className="input input-bordered"
                    placeholder="Available quantity"
                    {...register("available_quantity", { required: true })}
                  />
                  {errors.available_quantity && (
                    <span className="text-red-600">Provide Toy Quantity</span>
                  )}
                </div>

                <div className="form-control my-6">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    className="input input-bordered"
                    placeholder="description"
                    {...register("description", { required: true })}
                  />
                  {errors.description && (
                    <span className="text-red-600">
                      Provide Toy description
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add Toy"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
