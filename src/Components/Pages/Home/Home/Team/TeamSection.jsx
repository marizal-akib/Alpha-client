import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";


const TeamSection = () => {
    const [team, setTeam] = useState();
    useEffect(() => {
      fetch("/Team.json")
        .then((res) => res.json())
        .then((data) => setTeam(data));
    }, []);
    return (
        <div className="text-center  p-10" style={{
            backgroundImage:
              "url(https://i.ibb.co/V95ZWqH/Black-and-Yellow-Grunge-Gaming-Youtube-Thumbnail-1.png)",
          }}>
            <h2 className=" text-5xl font-bold text-white  mb-8">
        MEET THE PROS
      </h2>
      <p className="text-slate-400">Unlock Your Full Potential with Our Team of and Expert <br />
Fitness Trainers - Guiding You to Achieve Your Goals.</p>
            
        <div className="grid grid-cols-4 mx-auto mt-8 gap-8">
        {
            team?.map(team => <TeamCard key={team._id} team={team}></TeamCard>)
        }
      </div>
        </div>
    );
};

export default TeamSection;