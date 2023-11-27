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
          className="mySwiper w-screen shadow-2xl md:mt-6 mx-auto"
        >
          <SwiperSlide>
            <img
              className="w-2/6 lg:mt-10 ml-44 md:w-3/12 md:ml-[500px] lg:ml-[800px]"
              src={img1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-2/6  ml-44 md:w-3/12 md:mt-10 md:ml-[500px] lg:ml-[800px]"
              src={img2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-2/6 lg:mt-10  ml-44 md:w-3/12  md:ml-[500px] lg:ml-[800px]"
              src={img3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hero-content z-50 mt-12 w-screen mx-auto ">
        <div className="md:flex  md:gap-16 ">
        <div className="ml-16 flex-1 lg:mt-4">
        <p className="text-white  md:text-2xl lg:text-4xl  font-bold">ACHIEVE YOUR</p>
        <p className="text-white md:text-3xl lg:text-6xl mb-4 font-bold"><span className="text-[#f47520]">FITNESS</span> GOALS</p>
        <p className="text-white md:text-base lg:text-2xl font-semibold md:mt-12 lg:mt-20 ">With Tailored Workouts from Our Expert Trainers</p>

        <div className="mt-20">
          <button className="btn rounded-none text-white btn-error uppercase ">Join NOw</button>
        </div>

        </div>
        <div className="mr-36  md:mt-32">
          <p className="uppercase md:text-3xl lg:text-7xl ml-20 font-bold text-white">In<span className="font-outline-3 text-transparent">crease</span></p>
          <p className="uppercase md:text-4xl lg:text-8xl font-bold text-[#f47520]">Mu<span className="font-outline-2 text-transparent ">scle</span></p>
          <p className="uppercase md:text-4xl lg:text-8xl font-bold ml-20 text-white"><span className="font-outline-3 text-transparent">Po</span>wer</p>
        </div>

        </div>
        
      </div>
    </div>
  //   <div
  //   className="hero min-h-screen"
  //   style={{
  //     backgroundImage: "url(https://i.ibb.co/C5yz0qk/cement-texture.jpg)",
  //   }}
  // >
  //   <div className="hero-overlay bg-opacity-10"></div>
  //   <div className="hero-content text-center text-neutral-content">
  //     <div className="max-w-md">
  //       <img src={img1} alt="" />
  //       <p className="mb-5 text-xl font-semibold text-yellow-50">
  //         <span className="text-2xl font-bold text-slate-600">
  //         Lost your way in the fitness realm?
  //         </span> <br />Get back on track at our{" "}
  //         <Link to={"/"} className="font-bold text-[#ac653d]">
  //           homepage{" "}
  //         </Link>
  //         and embrace the journey to a healthier you! 💪
  //       </p>
  //       <Link to={"/"} className="btn p-2 px-9 text-lg bg-[#f47520] rounded-none border-black text-white">Home</Link>
  //     </div>
  //   </div>
  // </div>
  );
};

export default Banner;
