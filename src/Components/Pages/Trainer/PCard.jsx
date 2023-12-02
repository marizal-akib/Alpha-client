/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom"

const PCard = ({ sub, bookInfo }) => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {trainer_id, trainer_name, slotBooked, name, email, profilePic } = bookInfo;
  const { plan, description, price } = sub;

  const handleBooking = async () => {
    const bookInfo = {

      trainer_id,
      trainer_name,
      slotBooked,
      name,
      email,
      profilePic,
      plan,
      price,
    };
    console.log(bookInfo);

    const res = await axiosPublic.post("/booking", bookInfo);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} Please pay the fee`,
        showConfirmButton: false,
        timer: 3500,
      });
      navigate("/payment");
    }
  };
  return (
    <div className="card  rounded-none bg-[#141414] shadow-xl">
      <div className="card-body  text-[#f47520] ">
        <h2 className="card-title">{plan}</h2>
        <p className="text-white">{description}</p>
        <p className="text-2xl font-light">${price}/month</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleBooking}
            className="btn bg-[#f47520] border-black mx-3 rounded-none text-white"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PCard;
