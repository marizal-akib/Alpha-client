import { Outlet } from "react-router-dom/dist";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Root = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
