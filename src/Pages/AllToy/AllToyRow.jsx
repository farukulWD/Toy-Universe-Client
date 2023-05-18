import React from "react";

const AllToyRow = ({toy}) => {
    const {_id,seller_name,name,sub_category,price,available_quantity}=toy
  return (
    <tr>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <td><button>view details</button></td>
    </tr>
  );
};

export  {AllToyRow};
