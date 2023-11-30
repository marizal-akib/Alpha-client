/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TeamCard = ({ trainer,inHome }) => {
  

  const { _id, years_of_experience, name, specialty , img ,available_time_slot} = trainer;
  return (
    <div className="border-b-4 border-b-slate-400">
        <Link to={`/trainer/${_id}`}>
      <img src={img} alt="" />
      <h2 className="card-title my-3 text-lg text-[#f47520] font-semibold">{name}</h2>
      {
        !inHome?
        <>
      <p className="text-2xl text-left mb-5 text-white font-bold">{ years_of_experience} years of experience at {specialty}</p>
      <div className="flex"><p className="text-xs font-semibold text-slate-400">Available slots:- {available_time_slot}</p> 
      <p className="text-base flex-1 text-orange-600">know more...</p></div>
        </>
      :
      <p className="text-3xl text-left mb-5 text-white font-bold">{specialty}</p>
    }
      
        </Link>
    </div>
  );
};

export default TeamCard;
