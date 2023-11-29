import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import FeaturedSection from "./Home/FeaturedSection/FeaturedSection";
import About from "./Home/About/About";
import Classes from "./Home/Classes/Classes";
import Testimonials from "./Home/Testimonials";
import NewsLetter from "./Home/NewsLtter/NewsLetter";

import TeamSection from "./Home/Team/TeamSection";
import LatestArticles from "./Home/Articels/LatestArticles";


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
            <LatestArticles></LatestArticles>
            <TeamSection></TeamSection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;