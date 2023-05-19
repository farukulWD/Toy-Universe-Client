import React from "react";
import { Link } from "react-router-dom";

const TabCard = ({ product }) => {
  const { _id, name, picture, price, rating } = product;
  return (
    <div className="card card-compact w-full  shadow-xl">
      <figure>
        <img className="h-72" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between items-center">
          <div className="text-left">
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
          </div>
          <div>
            <Link to={`/toyDetails/${_id}`} className="btn border-none  text-black hover:bg-[#ccf7ff] bg-transparent">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
