import { useEffect, useState } from "react";
import Card from "./Card";
import AOS from 'aos';
import 'aos/dist/aos.css';


const FeaturedSection = () => {
    const [featured, setFeatured] = useState();

    useEffect(() => {
        fetch('../../../../../../public/features.json')
          .then((res) => res.json())
          .then((data) => setFeatured(data));
      },[]);
   console.log(featured);
    return (
        <div  data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom" className="bg-black grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* {featured?.length} */}
            {featured?.map((item, i) => <Card  key={i} item={item}></Card>)}
        </div>
    );
};

export default FeaturedSection;