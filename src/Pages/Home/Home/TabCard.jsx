import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'

const TabCard = ({ product }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  const { _id, name, picture, price, rating } = product;
  return (
    <div data-aos="fade-up" className="card border-2 border-[#ccf7ff] card-compact w-full  shadow-xl">
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
            <Link to={`/toyDetails/${_id}`} className="btn border-none  text-black bg-[#ccf7ff] hover:bg-[#aeedf8] ">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
