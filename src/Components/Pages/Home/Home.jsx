import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Alpha | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;