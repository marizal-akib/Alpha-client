import { PiQuotesFill } from "react-icons/pi";


const AboutCall = () => {
    return (
        <div>
             <div>
            {" "}
            <h2 className="text-2xl font-bold text-[#f47520]">ABOUT OUR GYM</h2>
            <h2 className="text-4xl  text-white font-bold">
              A Comfortable Place With High Class Equipments
            </h2>
            <p className="text-white mt-6 text-sm font-semibold">
              Step into a space where your well-being takes center stage. With a
              diverse range of high-class equipment and expert guidance, we're
              here to support you every step of the way. <br /> <br /> Whether
              you're starting your fitness adventure or looking to take it to
              the next level, Our Gym is your sanctuary for achieving your
              fitness goals. Join us and embark on a path to a healthier,
              stronger you!
            </p>
          </div>
          <div className="bg-[#363636] rounded-md p-1 mt-20  w-5/6 flex">
            <h2 className="text-white ml-5 mt-2 z-10">
              Push harder than yesterday if you <br />
              want on the different tomorrow.
            </h2>
            <div
              data-aos-offset="600"
              data-aos-easing="ease-in-sine"
              data-aos="fade-down"
              className="relative bottom-1 right-5 text-7xl text-[#403936]"
            >
              <PiQuotesFill />
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="avatar  mt-4">
              <div className="w-20 rounded-full">
                <img src="https://i.ibb.co/BPcZg1n/img.jpg" />
              </div>
            </div>

              <div className="text-white mt-5" >
                <h2 className=" font-bold text-lg">Ashiq Haque</h2>
                <p className="text-sm font-normal">CEO - CrossFit</p>
              </div>
          </div>
        </div>
    );
};

export default AboutCall;