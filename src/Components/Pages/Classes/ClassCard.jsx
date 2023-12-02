import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ClassCard = ({ classN }) => {
  const {
    _id,
    className,
    category,
    trainerName,
    img,
    classDescription,
  } = classN;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-lg text-[#f47520] font-bold">{category}</h2>
        <div className="flex gap-2 items-baseline">
          <h2 className="text-2xl text-black font-semibold">{className} </h2>
          <h4 className="text-sm text-black font-light">
            {" "}
            with <span className="text-lg">{trainerName}</span>
          </h4>
        </div>
        <h4 className="text-sm text-black font-light">{classDescription}</h4>
      <div className="text-right">
        <Link to={`/classes/${_id}`} className="font-semibold">Details...</Link>
      </div>
      </div>
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
    </div>
  );
};

export default ClassCard;
