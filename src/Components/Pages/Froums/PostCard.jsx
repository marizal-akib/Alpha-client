import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

/* eslint-disable react/prop-types */
const PostCard = ({ post: posts,refetch }) => {
  const axiosPublic = useAxiosPublic()
    const { _id, vote, userName, role,  title, img, post } =
    posts;
  const handleUp = async () => {
    if(vote || vote === 0){

      const upVote = vote + 1;
      const newVote ={
        vote : upVote
      }
      const res = await axiosPublic.put(`/posts/${posts._id}`, newVote);
  
      if (res.data.modifiedCount > 0) {
          refetch()
      
  
      }
    }
  };
  const handleDown = async () => {
    if (vote || vote === 0) {
      const downVote = vote - 1;
      const ote ={
        vote : downVote
      }
      const res = await axiosPublic.put(`/post/${posts._id}`, ote);
  
      if (res.data.modifiedCount > 0) {
          refetch()
      
  
      }
    }
  };

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
          {post}
        </p>
        <div className="flex card-actions align-baseline flex-row justify-end">


          <button onClick={handleUp} className="btn btn-primary"><FaArrowUp /></button>
          <h2>{vote}</h2>
          <button onClick={handleDown} className="btn btn-primary"><FaArrowDown/></button>


        </div>
      </div>
    </div>
  );
};

export default PostCard;
