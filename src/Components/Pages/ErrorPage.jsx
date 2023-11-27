import { Link } from "react-router-dom";
import img1 from "../../assets/image/Error/4-removebg-preview.png";
const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/C5yz0qk/cement-texture.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <img src={img1} alt="" />
          <p className="mb-5 text-xl font-semibold text-yellow-50">
            <span className="text-2xl font-bold text-slate-600">
            Lost your way in the fitness realm?
            </span> <br />Get back on track at our{" "}
            <Link to={"/"} className="font-bold text-[#ac653d]">
              homepage{" "}
            </Link>
            and embrace the journey to a healthier you! 💪
          </p>
          <Link to={"/"} className="btn p-2 px-9 text-lg bg-[#f47520] rounded-none border-black text-white">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
