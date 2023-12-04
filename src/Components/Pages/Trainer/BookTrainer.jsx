import { useEffect, useState } from "react";
import PCard from "./PCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const BookTrainer = () => {
  const trainer = useLoaderData();
  console.log(trainer);
  const { register, handleSubmit } = useForm();

  const { user } = useAuth();

//   console.log(user);

  const onChange = async (data) => {
    // console.log(data);
    setSlot(data.slot);
  };
  const [slotBooked, setSlot] = useState(0);

//   console.log(slotBooked);

  const {_id, name, specialty, detail_experience, img, available_time_slot, slot } =
    trainer[0];

  const slots = [...Array(slot).keys()];

  const [subs, setSubs] = useState();
  useEffect(() => {
    fetch("https://alpha-server-side.vercel.app/pack")
      .then((res) => res.json())
      .then((data) => setSubs(data));
  }, []);

  console.log(subs);

  const bookInfo = {
    trainer_id: _id,
    trainer_name: name,
    slotBooked,
    name: user?.displayName,
    email: user?.email,
    profilePic: user?.photoURL,
  };
// console.log( bookInfo);
  return (
    <>
      <Helmet>
        <title>Alpha | Book Trainer</title>
      </Helmet>
      <div className="">
        <div className="flex gap-4 pt-28 p-10 bg-[#141414]">
          <img className="max-w-sm" src={img} alt="" />
          <div>
            <h2 className="text-lg font-bold text-[#f47520]">{specialty}</h2>
            <p className=" text-[#f47520] text-2xl ">
              {" "}
              <span className="text-white">Name:- </span>
              {name}
            </p>
            <p className=" text-white ">{detail_experience}</p>
            <p className="font-bold text-sm text-slate-400">
              Available:- {available_time_slot}
            </p>
            <br />
            <br />
            <form onChange={handleSubmit(onChange)}>
              <label className="font-bold text-lg text-slate-400">
                {" "}
                slots:-
              </label>
              <select {...register("slot")}>
                {slots.map((set, i) => (
                  <option key={i} value={set + 1}>
                    Slot {set + 1}
                  </option>
                ))}
              </select>
              {/* <input type="text" /> */}
            </form>
          </div>
        </div>
        <div className="grid p-2 py-2 grid-cols-1 md:grid-cols-3 gap-2">
          {subs?.map((sub, i) => (
            <PCard key={i} bookInfo={bookInfo} sub={sub}></PCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookTrainer;
