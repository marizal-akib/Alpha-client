import img1 from "../../../../assets/image/Banner/Img 1.png";
import img2 from "../../../../assets/image/Banner/Img 2.png";
import img3 from "../../../../assets/image/Banner/Img 3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay,  } from "swiper/modules";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
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
          
          // navigation={true}
          modules={[Autoplay]}
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
            <div data-aos-duration="2000" data-aos="fade-right">
              <p className="text-white  md:text-2xl lg:text-4xl  font-bold">
                ACHIEVE YOUR
              </p>
            </div>
            <div data-aos-duration="3000" data-aos="fade-right">
              <p className="text-white md:text-3xl lg:text-6xl mb-4 font-bold">
                <span className="text-[#f47520]">FITNESS</span> GOALS
              </p>
            </div>

            <p className="text-white md:text-base lg:text-2xl font-semibold md:mt-12 lg:mt-20 ">
              With Tailored Workouts from Our Expert Trainers
            </p>

            <div className="mt-20">
              <button className="btn rounded-none text-white btn-error uppercase ">
                Join NOw
              </button>
            </div>
          </div>
          <div className="mr-36  md:mt-32">
            <div data-aos-duration="2500" data-aos="fade-left">
              <p className="uppercase md:text-3xl lg:text-7xl ml-20 font-bold text-white">
                In
                <span className="font-outline-3 text-transparent">crease</span>
              </p>
            </div>
            <div data-aos-duration="2000" data-aos="fade-right">
              <p className="uppercase md:text-4xl lg:text-8xl font-bold text-[#f47520]">
                Mu<span className="font-outline-2 text-transparent ">scle</span>
              </p>
            </div>
            <div data-aos-duration="2500" data-aos="fade-left">
            
            <p className="uppercase md:text-4xl lg:text-8xl font-bold ml-20 text-white">
              <span className="font-outline-3 text-transparent">Po</span>wer
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AOS.init();
export default Banner;
