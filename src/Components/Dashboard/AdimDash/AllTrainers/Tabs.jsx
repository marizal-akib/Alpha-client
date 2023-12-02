/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const Tabs = ({ trainer, i, refetch }) => {
  const [payDay, setPayDay] = useState(false);
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  const { _id, name, specialty, img, available_time_slot, joined, lastPaid } =
    trainer;

  const joinedDay = new Date(joined);
  const lastPayDay = new Date(lastPaid);
  //   const currentDate = new Date();
  const joinedDate = joinedDay.getDate(joined);
  //   const paidDay = lastPayDay.getDate();
  const paidMonth = lastPayDay.getMonth(lastPayDay);
  //   const day = currentDate.getDate();
  const paidYear = lastPayDay.getFullYear();

  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    // const year = currentDate.getFullYear();

    if (joinedDate <= day && paidMonth < month) {
      setPayDay(true);
    }
    // else if ( ) {
    //     setPayDay(false);
    // }
  }, [joinedDate, lastPaid, paidMonth, paidYear]);

  const handlePay = async (_id) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);

    const payDay = {
      lastPaid: formattedDate,
    };

    console.log(payDay, _id);
    const res = await axiosPublic.put(`/pay/${_id}`, payDay);
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Payment has been updated, Please transfer ${name} the amount`,
        showConfirmButton: false,
        timer: 4000,
      });
      navigate("/payment");
    }
  };
  return (
    <tbody key={i}>
      <tr>
        <th>
          <label>{i + 1}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
          {specialty}
          <br />
          since:-
          <span className="badge badge-ghost badge-sm">{joined}</span>
        </td>
        <td>{available_time_slot}</td>
        <th>
          {payDay ? (
            <button
              onClick={() => handlePay(_id)}
              className="btn rounded-none btn-success btn-xs"
            >
              Pay salary
            </button>
          ) : (
            <p className="text-sm font-medium">paid</p>
          )}
        </th>
      </tr>
    </tbody>
  );
};

export default Tabs;
