import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Tabs from "./Tabs";
import { Helmet } from "react-helmet-async";

const AllTrainers = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/team");
      return res.data;
    },
  });


  

  return (
    <div>
      <Helmet>
        <title>Alpha | All Trainers</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Availability time</th>
              <th></th>
            </tr>
          </thead>
          {
            trainers.map((trainer, i) => <Tabs key={i} refetch={refetch} trainer={trainer} i={i}></Tabs>)
          }
         
        </table>
      </div>
    </div>
  );
};

export default AllTrainers;
