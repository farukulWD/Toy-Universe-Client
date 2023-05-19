import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../../src/assets/alltoyBanner.jpg";
// import Rating from "react-rating";

import ReactStarsRating from "react-awesome-stars-rating";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    picture,
    seller_name,
    name,
    sub_category,
    price,
    rating,
    available_quantity,
    description,
    seller_email,
  } = toy;

  return (
    <div>
      <div className="hero mb-10">
        <div className="">
          <img className="w-full md:w-[1300px]" src={banner} alt="" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-4 items-center my-10 rounded-lg shadow-sm gap-6">
        <div>
          <img src={picture} alt="" />
        </div>
        <div>
          <h2 className="text-5xl font-bold">{name}</h2>
          <h3 className="my-5">Available Stock: {available_quantity}</h3>
          <p>{description}</p>
          <div className="flex justify-between my-6">
            <div>
              <p>Seller: {seller_name}</p>
              <p>Email: {seller_email}</p>
            </div>
            <div>
              <p>Price: {price}</p>
              <div className="flex">
                <span className="flex items-center space-x-1">
                  <ReactStarsRating
                    style={{width:50,}}
                    value={rating}
                    isEdit={false}
                  />
                   {rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
