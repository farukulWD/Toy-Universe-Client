import React from "react";

const MyAllToyRow = ({ myToy }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    myToy;
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
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default MyAllToyRow;
