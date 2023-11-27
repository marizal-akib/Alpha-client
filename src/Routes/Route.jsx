import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Components/Layouts/Root";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Pages/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        }
      ]
      
    },
  ]);
  


