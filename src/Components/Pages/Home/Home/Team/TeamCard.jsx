/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TeamCard = ({ trainer }) => {
  const { name, specialty , img } = trainer;
  return (
    <div className="border-b-4 border-b-slate-400">
        <Link to={`/trainer/${name}`}>
      <img src={img} alt="" />
      <h2 className="card-title my-3 text-lg text-[#f47520] font-semibold">{name}</h2>
      <p className="text-3xl text-left mb-5 text-white font-bold">{specialty}</p>
      
        </Link>
    </div>
  );
};

export default TeamCard;
