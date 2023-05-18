import React from "react";

const TabCard = ({ product }) => {
  const { name, picture_url, price, rating } = product;
  console.log(picture_url);
  return (
    <div className="card card-compact w-full  shadow-xl">
      <figure>
        <img src={picture_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between items-center">
          <div className="text-left">
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
          </div>
          <div>
            <button className="btn border-none  text-black hover:bg-[#ccf7ff] bg-transparent">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
