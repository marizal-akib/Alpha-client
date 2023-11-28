

import AboutBanner from "./AboutBanner";
import AboutCall from "./AboutCall";

const About = () => {
  return (
    <div className="p-16 bg-[#141414] ">
      <div className="grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-2 ">
        <AboutBanner></AboutBanner>
        <div className="w-11/12">
         <AboutCall></AboutCall>
        </div>
      </div>
    </div>
  );
};

export default About;
