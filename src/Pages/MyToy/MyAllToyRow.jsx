import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAllToyRow = ({ myToy, control, setControl }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    myToy;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://the-toy-universe-server.vercel.app/myCar/${id}`, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount>0) {
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              )
            }
            setControl(!control);
          });
      }
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
        <Link to={`/update/${_id}`}>Update</Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default MyAllToyRow;
