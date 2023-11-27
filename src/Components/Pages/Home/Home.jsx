import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import FeaturedSection from "./Home/FeaturedSection/FeaturedSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Alpha | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
        </div>
    );
};

export default Home;