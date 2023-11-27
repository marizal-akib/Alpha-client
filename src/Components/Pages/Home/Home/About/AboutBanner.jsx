import img1 from "../../../../../assets/image/About/shirtless-sportsman-training-biceps-with-barbell.jpg";
import img2 from "../../../../../assets/image/About/woman-helping-man-gym.jpg";


const AboutBanner = () => {
  return (
    <div className=" grid grid-cols-2 gap-2">
      <img
        data-aos-offset="600"
        data-aos-easing="ease-in-sine"
        data-aos="fade-right"
        className="col-span-2"
        src={img1}
        alt=""
      />
      <div
        data-aos-duration="3000"
        data-aos="zoom-out-up"
        className="w-10/12 text-center  relative bottom-16 left-7  bg-[#f47520]"
      >
        <div className="mt-12">
          <p className="text-3xl font-bold text-white">
            10+ <br />
            Years
          </p>
          <p className="text-xl mt-4 text-white font-bold">Work Experience</p>
        </div>
      </div>
      <img
        data-aos-offset="600"
        data-aos-easing="ease-in-sine"
        data-aos="fade-left"
        className="mt-6 rounded-md"
        src={img2}
        alt=""
      />
    </div>
  );
};

export default AboutBanner;
