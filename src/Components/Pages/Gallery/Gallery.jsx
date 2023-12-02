import { Helmet } from "react-helmet-async";
import Photos from "./Photos";
import Album from "./Album";

const Gallery = () => {
  return (
    <div>
         <Helmet>
                <title>Alpha | Gallery</title>
            </Helmet>
      <div
        className=" text-center  p-10"
        style={{
            
           backgroundRepeat: "no-repeat",
           
          backgroundImage:
          "url(https://i.ibb.co/h92jGgW/Untitled-design-2.png)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
         
        }}
      >
        <div className="text-center text-5xl font-bold shadow-md mt-5 p-12 text-[#f47520]">
            <h1 className="uppercase relative right-6">Alpha</h1>
            <h2 className="uppercase relative ">gallery</h2>
        </div>

      </div>
      <div>
      <Album></Album>
      </div>
    </div>
  );
};

export default Gallery;
