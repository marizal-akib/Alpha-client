import { Link } from "react-router-dom";
import From from "./From";

const NewsLetter = ({ t }) => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HhRP3dB/fit-man-holding-dumbbells-side-view.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60 "></div>
      <div className="text-right align-baseline py-10 p-3 flex">
        <div>
          {!t ? (
            <>
              <h2 className=" text-5xl font-bold text-white uppercase mb-8">
                Join Our <span className="text-[#f47520]">Newsletter</span>
              </h2>
              <p className="text-slate-400 text-base">
                Subscribe our Newsletter and gates latest Of Offers, <br></br>{" "}
                and updates of offers, products and promotion from every week we
                provide.
              </p>
            </>
          ) : (
            <>
              <h2 className=" text-5xl font-bold text-white uppercase mb-8">
                Become a <span className="text-[#f47520]">Trainer</span>
              </h2>
              <p className="text-slate-400 text-base">
                Are you passionate about fitness and wellness?
                <br></br> Join our team of dedicated professionals and share
                your expertise with our community!
              </p>
            </>
          )}
        </div>
        <div className="divider divider-end "></div>
        {!t ? (
          <From></From>
        ) : (
          <Link
            to={"/apply"}
            className="btn bg-[#f47520] justify-end border-black mx-3 rounded-none text-white "
          >
            Apply Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
