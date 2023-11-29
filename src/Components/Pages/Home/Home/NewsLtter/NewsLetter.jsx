import From from "./From";

const NewsLetter = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HhRP3dB/fit-man-holding-dumbbells-side-view.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60 "></div>
      <div className="text-right py-10 p-3 flex">
        <div>

        <h2 className=" text-5xl font-bold text-white uppercase mb-8">
          Join Our <span className="text-[#f47520]">Newsletter</span>
        </h2>
        <p className="text-slate-400 text-base">
          Subscribe our Newsletter and gates latest Of Offers, <br></br> and
          updates of offers, products and promotion from every week we provide.
        </p>
        </div>
        <div className="divider divider-end "></div>
        <From></From>
      </div>
    </div>
  );
};

export default NewsLetter;
