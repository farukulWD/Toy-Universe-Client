import React from "react";
import { Link } from "react-router-dom";

const AllToyRow = ({toy}) => {
    const {_id,seller_name,name,sub_category,price,available_quantity}=toy
  return (
    <tr>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td className="text-center">{available_quantity}pcs</td>
      <td><Link to={`/toyDetails/${_id}`}>view details</Link></td>
    </tr>
  );
};

export  {AllToyRow};
