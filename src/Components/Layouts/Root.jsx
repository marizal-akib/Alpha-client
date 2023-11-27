import { Outlet } from "react-router-dom/dist";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
AOS.init();

export default Root;
