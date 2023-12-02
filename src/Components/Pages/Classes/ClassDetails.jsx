import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const ClassDetails = () => {
  const classDetail = useLoaderData();
  const {
    _id,
    className,
    category,
    trainerId,
    trainerName,
    img,
    classDescription,
    scheduleDays,
    startTime,
    endTime,
    location,
  } = classDetail[0];

  console.log(classDetail);
  //   localStorage will be set to track className and class id to booking
  return (
    <>
      <Helmet>
        <title>Alpha | Class Details</title>
      </Helmet>
      <div className="flex gap-4 pt-28 p-10 bg-[#141414]">
        <img className="max-w-sm" src={img} alt="" />
        <div>
          <h2 className="text-lg font-bold text-[#f47520]">{category}</h2>
          <p className=" text-[#f47520] text-2xl ">
            {" "}
            <span className="text-white">Name:- </span>
            {className}
          </p>
          <p className=" text-white ">{}</p>
          <h4 className="text-sm text-white my-3 font-light">
            {classDescription}
          </h4>
          <p className="font-bold text-sm text-slate-400">
            Start Time:- {startTime}
            <br />
            End Time:- {endTime}
          </p>
          <p className="font-semibold text-sm mt-3 text-white">
            Location:-<span className="text-[#f47520]">{location}</span>
          </p>
          <div className="text-right">
            <Link to={`/trainer/${trainerId}`} className="font-semibold">
              <button className="btn bg-[#f47520] border-black mx-3 rounded-none text-white">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassDetails;
