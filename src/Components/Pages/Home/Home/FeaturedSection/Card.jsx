/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ item }) => {
  const { sectionTitle, feature, img } = item;

  return (
    <div className="card rounded-none  bg-slate-300 ">
      <div className="card-body ">
        <h2 className="card-title text-base text-[#f47520] font-bold">{sectionTitle}</h2>
        <p className="lg:text-3xl text-2xl lg:w-3/4 font-bold">{feature}</p>
      <figure className=" ">
        <img
          src={img}
          alt="Shoes"
          className=""
        />
      </figure>
        <div className="card-actions p-0">
            <div className="flex lg:gap-60 md:gap-32 gap-40 items-center">
            <h2 className="text-xs font-bold">GET STARTED</h2>
          <Link to={'/classes'} className="btn bg-transparent hover:bg-transparent p-0 text-2xl btn-ghost"><FaArrowRight /></Link>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
