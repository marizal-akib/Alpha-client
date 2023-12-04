import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import {
  FaCalendar,
  FaCalendarPlus,
  FaClipboardList,
  FaDollarSign,
  FaDumbbell,
  FaEdit,
  FaFolder,
  FaHome,
  FaUser,
  FaUserEdit,
  FaUsersCog,
  // FaUsersSlash,
} from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import useMember from "../../Hooks/useMember";
import useTrainer from "../../Hooks/useTrainer";

const Dashboard = () => {
  const { user, loading } = useAuth();

  const [isAdmin] = useAdmin();
  const [isUser] = useMember();
  const [isTrainer] = useTrainer();
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
                  <img className="w-28  mx-auto " src={user?.photoURL} />
                )}
                <h2 className="text-center font-semibold text-white my-2 ">
                  {user?.displayName}
                </h2>
                <div className="text-center flex flex-row-reverse gap-1 mr-32">
                <div className=""><FaUser></FaUser></div>
                <h2 className="text-center items-center font-semibold text-white my-2 ">
                 {user?.role} 
                </h2>
                </div>
               
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
            {isAdmin && (
              <>
                <div className="divider"></div>
                <li>
                  <NavLink to="/dashboard/subscribers">
                    <ImBlog></ImBlog> All subscribers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addPost">
                    <FaEdit></FaEdit> Add Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allTrainers">
                    <MdOutlineSportsGymnastics /> All Trainers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/application">
                    <FaFolder />
                    Trainer Application
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/balance">
                    <FaDollarSign />
                    Accounts
                  </NavLink>
                </li>
              </>
            )}
            {isTrainer && (
              <>
                {" "}
                <div className="divider"></div>
                <li>
                  <NavLink to="/dashboard/addPost">
                    <FaEdit></FaEdit> Add Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/management">
                    <FaClipboardList></FaClipboardList> Class Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/memberManagement">
                    <FaUsersCog></FaUsersCog> Member Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addNewClass">
                    <FaCalendarPlus></FaCalendarPlus> Add New Class
                  </NavLink>
                </li>
              </>
            )}

            {isUser && (
              <>
                {" "}
                <div className="divider"></div>
                <li>
                  <NavLink to="/dashboard/activity">
                    <FaDumbbell></FaDumbbell> Activity Log
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/setting">
                    <FaUserEdit></FaUserEdit> Profile Setting
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/recommendations">
                    <FaCalendar></FaCalendar> Recommendations
                  </NavLink>
                </li>
              </>
            )}
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
