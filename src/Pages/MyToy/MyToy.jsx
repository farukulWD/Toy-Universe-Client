import React, { useContext, useEffect, useState } from "react";
import MyAllToyRow from "./MyAllToyRow";
import banner from "../../assets/alltoyBanner.jpg";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Component/Hook/UseTitle";
const MyToy = () => {
  useTitle("MyToy");
  const { user } = useContext(AuthContext);
  const [myAllToy, setMyAllToy] = useState([]);
  // const [searchText, setSearchText]=useState("")
  const [control, setControl] = useState(false);
  const [selectSort, setSelectSort] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectSort(value);
  };
  const [value, type] = selectSort && selectSort.split("-");

  useEffect(() => {
    fetch(
      `https://the-toy-universe-server.vercel.app/myCar/${
        user && user.email
      }?type=${type}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyAllToy(data);
      });
  }, [control, selectSort]);

  return (
    <>
      <div className="hero mb-10">
        <div className="">
          <img className="w-full md:w-[1300px]" src={banner} alt="" />
        </div>
      </div>

      <div>
        <div className="flex justify-center gap-5 my-5">
          <div className="form-control">
            <div className="input-group">
              <select
                onChange={handleChange}
                className="select select-bordered"
              >
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
              {myAllToy &&
                myAllToy.map((myToy) => (
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
