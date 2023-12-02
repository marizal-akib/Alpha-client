import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const AllSubscribers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: subscribers = [] } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/subs");
      return res.data;
    },
  });
  console.log(subscribers);

  return <>
     <Helmet>
        <title>Alpha | Subscribers</title>
      </Helmet>
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber,i)=> <tr key={subscriber._id} >
              <th>{i +1}</th>
              <th>{subscriber.name}</th>
              <td>{subscriber.email}</td>
            </tr>)}
           
          </tbody>
        </table>
      </div>
    
  </>;
};

export default AllSubscribers;
