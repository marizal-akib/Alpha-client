import img1 from "../../../../assets/image/Banner/Img 1.png";
import img2 from "../../../../assets/image/Banner/Img 2.png";
import img3 from "../../../../assets/image/Banner/Img 3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen  "
      style={{
        backgroundImage: "url(https://i.ibb.co/jVK0Lyt/Black-bg.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-0 ">
        <div className="flex gap-10 mt-32">
        <div className="ml-16 flex-1">
        <p className="text-white text-4xl  font-bold">ACHIEVE YOUR</p>
        <p className="text-white text-6xl mb-4 font-bold"><span className="text-[#f47520]">FITNESS</span> GOALS</p>
        <p className="text-white text-2xl font-semibold mt-20 ">With Tailored Workouts from Our Expert Trainers</p>

        <div className="mt-20">
          <button className="btn rounded-none text-white btn-error uppercase ">Join NOw</button>
        </div>

        </div>
        <div className="mr-36 z-10 mt-16">
          <p className="uppercase text-7xl ml-20 font-bold text-white">In<span className="font-outline-3 text-transparent">crease</span></p>
          <p className="uppercase text-8xl font-bold text-[#f47520]">Mu<span className="font-outline-2 text-transparent">scle</span></p>
          <p className="uppercase text-8xl font-bold ml-20 text-white"><span className="font-outline-3 text-transparent">Po</span>wer</p>
        </div>

        </div>
      </div>
      <div className="hero-content  text-neutral-content">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-screen mx-auto"
        >
          <SwiperSlide>
            <img
              className="w-2/6 ml-44 md:w-3/12 md:ml-[500px] lg:ml-[800px]"
              src={img1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-2/6 ml-44 md:w-3/12 md:mt-10 md:ml-[500px] lg:ml-[800px]"
              src={img2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-2/6 ml-44 md:w-3/12 md:mt-6 md:ml-[500px] lg:ml-[800px]"
              src={img3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
