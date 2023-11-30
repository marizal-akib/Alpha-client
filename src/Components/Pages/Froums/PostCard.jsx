import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PostCard = ({ post: posts }) => {
  const { _id, vote, userName, role,  title, img, post } =
    posts;
  return (
    <div className="card rounded-none  w-11/12 mx-auto flex flex-row bg-base-100 shadow-xl">
      <figure>
        <img className="rounded-none max-w-md" src={img} alt="" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-2 items-baseline">
          <h2 className="flex items-center text-slate-400  text-base font-medium gap-[1px]">
            <IoMdPerson />
            {userName}
          </h2>
          <p className="flex items-center gap-[1px] text-xs text-yellow-500 font-semibold uppercase">
            {role}
          </p>
        </div>
        <h2 className="card-title text-[#f47520]">{title}</h2>
        <p className="text-gray-500">
          {post.slice(0, 80)}
          <Link to={`/forums/${_id}`} className=" text-[#f47520]">
            {" "}
            ...Read More
          </Link>
        </p>
        <div className="flex card-actions flex-row justify-end">


          <button className="btn btn-primary">up</button>
          <h2>{vote}</h2>
          <button className="btn btn-primary">down</button>


        </div>
      </div>
    </div>
  );
};

export default PostCard;
