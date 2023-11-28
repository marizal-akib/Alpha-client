/* eslint-disable react/prop-types */
import { IoMdCalendar, IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
const ArticlesCard = ({ article }) => {
  const { _id,post, category, post_date, title, img } = article;
  return (
    <div className="card  card-compact  glass ">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2"><h2 className="flex items-center text-yellow-500 font-medium gap-[1px]"><IoMdPricetags />{category}</h2>
        <p className="flex items-center gap-[1px] text-sm text-slate-400 font-semibold"><IoMdCalendar/> {post_date}</p></div>
        <h2 className="card-title text-[#f47520]">{title}</h2>
        <p className="text-white">{post.slice(0,80)}<Link to={`/forums/${_id}`} className=" text-[#f47520]"> ...Read More</Link></p>
      </div>
    </div>
  );
};

export default ArticlesCard;
