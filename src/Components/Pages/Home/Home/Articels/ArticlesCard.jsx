/* eslint-disable react/prop-types */
import { IoMdCalendar, IoMdPerson, IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
const ArticlesCard = ({ article }) => {
  const { _id,post, userName, role, title, img } = article;
  return (
    <div className="card  card-compact  glass ">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-baseline"><h2 className="flex items-center text-slate-400  text-base font-medium gap-[1px]"><IoMdPerson />{userName}</h2>
        <p className="flex items-center gap-[1px] text-xs text-yellow-500 font-semibold uppercase">{role}</p></div>
        <h2 className="card-title text-[#f47520]">{title}</h2>
        <p className="text-white">{post.slice(0,80)}<Link to={`/forums/${_id}`} className=" text-[#f47520]"> ...Read More</Link></p>
      </div>
    </div>
  );
};

export default ArticlesCard;
