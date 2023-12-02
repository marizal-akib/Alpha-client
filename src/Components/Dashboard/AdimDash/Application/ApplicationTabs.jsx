/* eslint-disable react/prop-types */

import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ApplicationTabs = ({ application, i, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const {
    _id,
    name,
    email,
    age,
    week,
    time,
    other,

    checkbox: skill,
    image: img,
  } = application;

  const handelAccept = async (email) => {
    const accept = {
      _id,

      email,
      age,
      week,
      time,
      other,

      skill,
      img,
      role: "trainer",
    };

    console.log(accept, _id);
    const res = await axiosPublic.patch(`/accept/${email}`, accept);
    console.log(res.data);
    if (res.data.acceptResult.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: ` ${name} now became a trainer`,
        showConfirmButton: false,
        timer: 3000,
      });
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
          {email}
          <br />
          Age:-
          <span className="badge badge-ghost badge-sm">{age}</span>
        </td>
        <td>
          <div>
            {week} <br />
            {time}
          </div>
        </td>
        <th>
          <button
            className="btn btn-ghost"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <FaEye></FaEye>
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <p className="py-4"> {other} </p>
              <div>
                <h3 className="font-bold text-sm">Soft Skills :-</h3>
                <ul>
                  <li>{skill[0]}</li>
                  <li>{skill[1]}</li>
                  <li>{skill[2]}</li>
                </ul>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <div className=" flex gap-9">
                    <button
                      onClick={() => handelAccept(email)}
                      className="btn btn-success"
                    >
                      Accept
                    </button>
                    <Link className="btn btn-warning">Reject</Link>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </th>
      </tr>
    </tbody>
  );
};

export default ApplicationTabs;
