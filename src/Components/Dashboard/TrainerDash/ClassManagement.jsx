import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ClassManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: members = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Alpha | Member Management</title>
      </Helmet>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Booked Slot</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <tr key={member._id}>
              <th>{i + 1}</th>
              <th>{member.name}</th>
              <td>{member.email}</td>
              <td>{member.slotBooked}</td>
              <td>
                <button className="btn-sm rounded-none hover:underline bg-green-500 text-white">
                  Send Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClassManagement;
