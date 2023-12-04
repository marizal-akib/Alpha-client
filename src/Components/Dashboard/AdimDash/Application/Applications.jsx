import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import ApplicationTabs from "./ApplicationTabs";


const Applications = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading : loading, refetch, data: applications = [] } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/apply");
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
            <ApplicationTabs key={i} refetch={refetch} loading={loading} application={application} i={i}></ApplicationTabs>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Applications;
