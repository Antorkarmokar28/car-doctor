import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;