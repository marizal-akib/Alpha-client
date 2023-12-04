import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layouts/Root";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Gallery from "../Components/Pages/Gallery/Gallery";
import Trainer from "../Components/Pages/Trainer/Trainer";
import Forums from "../Components/Pages/Froums/Forums";
import Classes from "../Components/Pages/Classes/Classes";
import Dashboard from "../Components/Layouts/Dashboard";
// import UserHome from "../Components/Dashboard/UserDash/UserHome";
import Login from "../Components/Pages/Auth/Login";
import SignUp from "../Components/Pages/Auth/SignUp";
import Apply from "../Components/Pages/Home/Home/Team/Apply";
import BookTrainer from "../Components/Pages/Trainer/BookTrainer";
import Payment from "../Components/Pages/Trainer/Payment";
import PrivateRoutes from "./PrivateRoute";
import ClassDetails from "../Components/Pages/Classes/ClassDetails";
import AllSubscribers from "../Components/Dashboard/AdimDash/AllSubscribers";
import AllTrainers from "../Components/Dashboard/AdimDash/AllTrainers/AllTrainers";
import Applications from "../Components/Dashboard/AdimDash/Application/Applications";
import Balance from "../Components/Dashboard/AdimDash/Balance/Balance";
import ClassManagement from "../Components/Dashboard/TrainerDash/ClassManagement";
import MemberManagement from "../Components/Dashboard/TrainerDash/MemberManagement";
import AddNewClass from "../Components/Dashboard/TrainerDash/AddNewClass";
import Activity from "../Components/Dashboard/UserDash/Activity";
import ProfileSetting from "../Components/Dashboard/UserDash/ProfileSetting";
import Recommendations from "../Components/Dashboard/UserDash/Recommendations";
import ForumPost from "../Components/Dashboard/ForumPost";
// import Applications from "../Components/Dashboard/AdimDash/AllTrainers/Applications";
// import Book from "../Components/Pages/Trainer/Book.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/trainer",
        element: <Trainer></Trainer>,
      },
      {
        path: "/forums",
        element: <Forums></Forums>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/classes/:id",
        element: <ClassDetails></ClassDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/class/${params.id}`),
      },
      {
        path: "/apply",
        element: (
          <PrivateRoutes>
            <Apply></Apply>
          </PrivateRoutes>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoutes>
            <Payment></Payment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/trainer/:id",
        element: (
          <PrivateRoutes>
            <BookTrainer></BookTrainer>,
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>,
      </PrivateRoutes>
    ),
    children: [
      {
        path: "subscribers",
        element: <AllSubscribers></AllSubscribers>,
      },
      {
        path: "allTrainers",
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: "application",
        element: <Applications></Applications>,
      },
      {
        path: "balance",
        element: <Balance></Balance>,
      },
      {
        path: "addPost",
        element: <ForumPost></ForumPost>,
      },
      // trainer
      {
        path: "management",
        element: <ClassManagement></ClassManagement>,
      },
      {
        path: "memberManagement",
        element: <MemberManagement></MemberManagement>,
      },
      {
        path: "addNewClass",
        element: <AddNewClass></AddNewClass>,
      },
      // user
      {
        path: "setting",
        element: <ProfileSetting></ProfileSetting>,
      },
      {
        path: "activity",
        element: <Activity></Activity>,
      },
      {
        path: "recommendations",
        element: <Recommendations></Recommendations>,
      },
    ],
  },
]);
