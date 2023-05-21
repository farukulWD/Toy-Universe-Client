import React, { useEffect, useState } from "react";
import banner from "../../../src/assets/alltoyBanner.jpg";
import { AllToyRow } from "./AllToyRow";
import useTitle from "../../Component/Hook/UseTitle";

const AllToy = () => {
  const [allToy, setAllToy] = useState([]);
  useTitle("AllToy");

  useEffect(() => {
    fetch("https://the-toy-universe-server.vercel.app/alltoy")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.name.value;

    fetch(`https://the-toy-universe-server.vercel.app/searchToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  };

  return (
    <>
      <div className="hero mb-10">
        <div className="">
          <img className="w-full md:w-[1300px]" src={banner} alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5">
        <form onSubmit={handleSearch} className="form-control">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Search Toy Name"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
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
              <AllToyRow key={toy._id} toy={toy}></AllToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { AllToy };
