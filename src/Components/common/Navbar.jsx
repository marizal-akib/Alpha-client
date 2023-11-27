import { Link } from "react-router-dom/dist";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/trainer">Trainer</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/forums">Forums</Link>
      </li>
      <li>
        <Link className="font-semibold text-[#f47520]" to="/gallery">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-black  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <div className="btn hidden lg:block btn-ghost h-fit">
          <img
            className="w-10"
            src="https://i.ibb.co/rvKNq3W/Screenshot-2023-11-26-114911.png"
            alt=""
          />
        </div>
      </div>
      <div className="btn  lg:hidden  btn-ghost h-fit">
        <img
          className="w-24"
          src="https://i.ibb.co/K0jRCNy/Screenshot-2023-11-26-121306-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="navbar-center  ">
        <div className="hidden lg:flex ">
          <ul className="menu text-white menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
