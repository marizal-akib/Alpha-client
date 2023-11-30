
import { useQuery } from "@tanstack/react-query";
import TeamCard from "./TeamCard";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";


const TeamSection = () => {
  const axiosPublic = useAxiosPublic();
  const { data : team=[] }= useQuery({
      queryKey: ['team'],
      queryFn: async () =>{
          const res = await axiosPublic.get("/team?size=4&page=0");
          return res.data;
      }
      
    })
    console.log(team);
    return (
        <div className="text-center  p-10" style={{
            backgroundImage:
              "url(https://i.ibb.co/V95ZWqH/Black-and-Yellow-Grunge-Gaming-Youtube-Thumbnail-1.png)",
          }}>
            <h2 className=" text-5xl font-bold text-white  mb-4">
        MEET THE PROS
      </h2>
      <p className="text-slate-400 text-sm">Unlock Your Full Potential with Our Team of and Expert <br />
Fitness Trainers - Guiding You to Achieve Your Goals.</p>
            
        <div className="grid grid-cols-4 mx-auto mt-8 gap-8">
        {
            team?.map((trainer, i) => <TeamCard key={i} trainer={trainer}></TeamCard>)
        }
      </div>
        </div>
    );
};

export default TeamSection;