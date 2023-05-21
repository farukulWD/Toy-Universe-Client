import React, { useContext, useEffect, useState } from "react";
import MyAllToyRow from "./MyAllToyRow";
import banner from "../../assets/alltoyBanner.jpg";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Component/Hook/UseTitle";
const MyToy = () => {
  useTitle("MyToy")
  const { user } = useContext(AuthContext);
  const [myAllToy, setMyAllToy] = useState([]);
  // const [searchText, setSearchText]=useState("")
  const [control, setControl] = useState(false);
  const [selectSort,setSelectSort]=useState("");
  


  const handleChange=(event)=>{
    const value = event.target.value;
    setSelectSort(value)
  }
  const [value,type]=selectSort&&selectSort.split('-');

  

  useEffect(() => {
    
    fetch(
      `https://the-toy-universe-server.vercel.app/myCar/${user && user.email}?type=${type}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyAllToy(data);
      });
  }, [control,selectSort]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.name.value;

    fetch(`https://the-toy-universe-server.vercel.app/searchToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAllToy(data);
      });
  };

  return (
    <>
      <div className="hero mb-10">
        <div className="">
          <img className="w-full md:w-[1300px]" src={banner} alt="" />
        </div>
      </div>

      <div>
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
          <div className="form-control">
            <div className="input-group">
              <select onChange={handleChange} className="select select-bordered">

                <option>price-ascending</option>
                <option>price-descending</option>
                
              </select>
              <button className="btn btn-disabled">Sort</button>
            </div>
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
              {myAllToy&&myAllToy.map((myToy) => (
                <MyAllToyRow
                  key={myToy._id}
                  myToy={myToy}
                  control={control}
                  setControl={setControl}
                ></MyAllToyRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToy;
