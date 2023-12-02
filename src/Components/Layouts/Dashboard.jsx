import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { ImBlog, ImCoinDollar } from "react-icons/im";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { FaCalendar, FaDumbbell, FaFolder, FaHome, FaUser } from "react-icons/fa";

const Dashboard = () => {
  const { user, loading } = useAuth();
  return (
    <>
      <Helmet>
        <title>Alpha | Dashboard</title>
      </Helmet>
      <div className="flex">
        <div className="w-64 min-h-full bg-[#141414] text-[#f47520]">
          {loading && user ? (
            <span className="loading loading-spinner text-success"></span>
          ) : (
            <>
              <div className=" pt-4  shadow-gray-700 shadow-2xl">
                {loading ? (
                  <span className="loading rounded-full loading-spinner text-success"></span>
                ) : (
                  <img className="w-28  mx-auto " src={user.photoURL} />
                )}
                <h2 className="text-center font-semibold text-white my-2 ">
                  {user?.displayName}
                </h2>
              </div>
            </>
          )}

          <ul className="menu space-y-1">
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/subscribers">
                <ImBlog></ImBlog> All subscribers
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allTrainers">
                <MdOutlineSportsGymnastics /> All Trainers
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/application">
                <FaFolder />Trainer Application
              </NavLink>
            </li>
            {/* user */}
            <li>
              <NavLink to="/dashboard/activity">
                <FaDumbbell></FaDumbbell> Activity Log 
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/balance">
                <FaCalendar></FaCalendar> Recommendation 
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/setting">
                <FaUser></FaUser> Accounts 
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div
            className=" text-center  p-10"
            style={{
              backgroundRepeat: "no-repeat",

              backgroundImage:
                "url(https://i.ibb.co/h92jGgW/Untitled-design-2.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="text-center text-5xl font-bold shadow-md mt-5 p-12 text-[#f47520]">
              <h1 className="uppercase relative right-6">Dashboard</h1>
              {/* <h2 className="uppercase relative ">gallery</h2> */}
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
