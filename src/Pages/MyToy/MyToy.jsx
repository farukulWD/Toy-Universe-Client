import React, { useContext, useEffect, useState } from "react";
import MyAllToyRow from "./MyAllToyRow";
import banner from "../../assets/alltoyBanner.jpg"
import { AuthContext } from "../../Context/AuthProvider";
const MyToy = () => {
  const {user}=useContext(AuthContext)
    const [myAllToy, setMyAllToy] = useState([]);
    const [control,setControl]=useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/myCar/${user&&user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAllToy(data);
      });
  }, [control]);
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
              <MyAllToyRow key={myToy._id}  myToy={myToy}  control={control} setControl={setControl}></MyAllToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToy;
