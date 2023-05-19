import React from "react";

const MyAllToyRow = ({ myToy,control,setControl}) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    myToy;

    const handleDelete = (id) => {
      fetch(`http://localhost:5000/myCar/${id}`, {
        method: "Delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setControl(!control)
        });
    };
  

  return (
    <tr>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <td>
        <button>Update</button>
      </td>
      <td>
        <button onClick={()=>handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default MyAllToyRow;
