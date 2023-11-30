import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TeamCard from "../Home/Home/Team/TeamCard";
import { useState } from "react";
import NewsLetter from "../Home/Home/NewsLtter/NewsLetter";

const Trainer = () => {
  const [t , setT] = useState(true)
  const axiosPublic = useAxiosPublic();
  const { data: team = [] } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await axiosPublic.get("/team");
      return res.data;
    },
  });
  console.log(team);
  return (
    <>
      <Helmet>
        <title>Alpha | Trainer</title>
      </Helmet>
      <div>
        <div>
          <div
            className=" text-center  p-10"
            style={{
              backgroundRepeat: "no-repeat",

              backgroundImage:
                "url(https://i.ibb.co/svT9Q0y/Untitled-design-4.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="text-center text-5xl font-bold shadow-md mt-5 p-12 text-white">
              <h1 className="uppercase relative ">Choose your</h1>
              <h2 className="uppercase relative ">trainer</h2>
              <p className="text-slate-400 text-sm">
                Unlock Your Full Potential with Our Team of and Expert <br />
                Fitness Trainers - Guiding You to Achieve Your Goals.
              </p>
            </div>
          </div>
        </div>
        <div
          className="text-center  p-10"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/V95ZWqH/Black-and-Yellow-Grunge-Gaming-Youtube-Thumbnail-1.png)",
          }}
        >
          <h2 className=" text-5xl font-bold text-white  mb-4">
            MEET THE PROS
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto mt-8 gap-4">
            {team?.map((trainer, i) => (
              <TeamCard key={i} trainer={trainer}></TeamCard>
            ))}
          </div>
        </div>
        <NewsLetter t={t}></NewsLetter>
      </div>
    </>
  );
};

export default Trainer;
