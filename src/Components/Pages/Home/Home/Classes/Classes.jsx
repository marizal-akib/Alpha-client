
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowCircleLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Classes = () => {
  const [classes, setClasses] = useState();

  useEffect(() => {
    fetch("/Classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  console.log(classes);
//   const { _id, className, category, trainerName } = classes;
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/M77Csv5/Black-and-Yellow-Grunge-Gaming-Youtube-Thumbnail-1.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content w-screen mx-auto ">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-5 text-5xl text-white font-bold  ">
              OUR PROGRAMS
            </h2>
            <p className="font-light text-white">
              Elevate Fitness with Trainers ard Programs 
            </p>
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[]}
            className="mySwiper mt-14"
          >
            <SwiperSlide>
              <div
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                data-aos="fade-left"
                className="  mt-32 ml-48  text-6xl text-[#f47520]"
              >
                <FaArrowCircleLeft />
              </div>
            </SwiperSlide>

            {classes?.map((item, i) => (
              <SwiperSlide key={i}>
                <Link to={`/classes/${item._id}`}>
                  <img className="w-11/12" src={item.img} alt="" />
                  <div>
                    <h2 className="text-lg text-[#f47520] font-bold">{item.category}</h2>
                    <div className="flex gap-2 items-baseline">
                      <h2 className="text-2xl text-white font-semibold">{item.className} </h2>
                      <h4 className="text-sm text-white font-light"> with <span className="text-lg">{item.trainerName}</span></h4>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Classes;
