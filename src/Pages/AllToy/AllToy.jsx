import React, { useEffect, useState } from "react";
import banner from "../../../src/assets/alltoyBanner.jpg";
import { AllToyRow } from "./AllToyRow";
import useTitle from "../../Component/Hook/UseTitle";

const AllToy = () => {
  const [allToy, setAllToy] = useState([]);
  useTitle("AllToy")
  

  useEffect(() => {
    fetch("https://the-toy-universe-server.vercel.app/alltoy")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  }, []);

  
  return (
    <>
      <div className="hero mb-10">
        <div className="">
          <img className="w-full md:w-[1300px]" src={banner} alt="" />
        </div>
      </div>

      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allToy.map((toy) => (
              <AllToyRow key={toy._id}  toy={toy}></AllToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { AllToy };
