import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layouts/Root";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Gallery from "../Components/Pages/Gallery/Gallery";
import Trainer from "../Components/Pages/Trainer/Trainer";
import Forums from "../Components/Pages/Froums/Forums";
import Classes from "../Components/Pages/Classes/Classes";
import Dashboard from "../Components/Dashboard/Dashboard";
import UserHome from "../Components/Dashboard/UserDash/UserHome";
import Login from "../Components/Pages/Auth/Login";
import SignUp from "../Components/Pages/Auth/SignUp";
import Apply from "../Components/Pages/Home/Home/Team/Apply";
import BookTrainer from "../Components/Pages/Trainer/BookTrainer";
import Payment from "../Components/Pages/Trainer/Payment";
import PrivateRoutes from "./PrivateRoute";
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
          fetch(`https://alpha-server-side.vercel.app/team/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
    ],
  },
]);
