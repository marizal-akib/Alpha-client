import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import ApplicationTabs from "./ApplicationTabs";


const Applications = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: applications = [] } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apply");
      return res.data;
    },
  });

  console.log(applications);
  return (
    <div>
      <Helmet>
        <title>Alpha | Trainer Applications</title>
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
          {applications.map((application, i) => (
            <ApplicationTabs key={i} refetch={refetch} application={application} i={i}></ApplicationTabs>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Applications;
