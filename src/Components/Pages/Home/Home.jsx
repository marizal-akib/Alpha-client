import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import FeaturedSection from "./Home/FeaturedSection/FeaturedSection";
import About from "./Home/About/About";
import Classes from "./Classes/Classes";
import Testimonials from "./Home/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Alpha | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <About></About>
            <Classes></Classes>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;