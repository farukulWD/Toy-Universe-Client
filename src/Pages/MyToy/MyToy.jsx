import React, { useEffect, useState } from "react";
import MyAllToyRow from "./MyAllToyRow";
import banner from "../../assets/alltoyBanner.jpg"
const MyToy = () => {
    const [myAllToy, setMyAllToy] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => {
        setMyAllToy(data);
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myAllToy.map((myToy) => (
              <MyAllToyRow  myToy={myToy}></MyAllToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToy;