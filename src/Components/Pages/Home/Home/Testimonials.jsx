// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { PiQuotesFill } from "react-icons/pi";

const Testimonials = () => {
  const [reviews, setReview] = useState();
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(reviews);
  return (
    <div className="bg-[#141414]">
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
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-16  ">
              <div className="grid  gap-2  grid-cols-2 ">
                <img src={review.img} alt="" />
                <div className="w-11/12">
                  <div>
                    <div className=" text-center">
                      {" "}
                      <h2 className=" text-5xl ml-56 font-bold text-[#f47520]">
                        <PiQuotesFill />
                      </h2>
                      <h2 className="text-3xl  text-white font-semibold">
                        {review.quote}
                      </h2>
                    </div>
                    <div className="text-center">
                      <p className="text-orange-600 font-extrabold mt-3">
                        _________
                      </p>
                    </div>
                    <div className="text-white mt-5 text-center">
                      <p className="text-sm text-slate-400 font-semibold">
                        {review.profession}
                      </p>
                      <h2 className=" font-bold text-lg">{review.name}</h2>
                    </div>
                    <img
                      
                      className="w-44 relative right-24 bottom-24 opacity-80"
                      src="https://i.ibb.co/K0jRCNy/Screenshot-2023-11-26-121306-removebg-preview.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
