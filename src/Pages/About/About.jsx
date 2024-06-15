import aboutUsPersonImage from "../../assets/images/about_us/person.jpg"
import aboutPartsImage from "../../assets/images/about_us/parts.jpg"
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="container px-4 mx-auto mt-32 font-Inter">
            <div className="md:flex gap-28">
                <div className="w-full md:w-2/4">
                    <div className="h-[473px]">
                        <img className="h-full" src={aboutUsPersonImage} alt="" />
                    </div>
                    <img className="border-4 left-32 rounded border-slate-50 relative w-[250px] h-[332px] bottom-40" src={aboutPartsImage} alt="" />
                </div>
                <div className="w-full md:w-2/4">
                    <h5 className="text-[#FF3811] text-xl font-bold mb-5">About Us</h5>
                    <h1 className="text-3xl md:text-[45px] leading-[50px] text-[#151515]">We are qualified & of experience in this field</h1>
                    <p className="text-base font-normal text-[#737373] mb-5 mt-[30px]">As highly qualified and experienced car repair specialists, we possess extensive expertise in diagnosing and fixing a wide range of vehicle issues. Our team is skilled in utilizing advanced diagnostic tools and employing the latest repair techniques to ensure your car performs optimally.</p>
                    <p className="text-base font-normal text-[#737373] mb-[30px]">With years of hands-on experience in the automotive repair industry, we are fully qualified to handle all your car maintenance and repair needs. Our team excels in delivering reliable, efficient, and high-quality services, from routine maintenance to complex repairs, ensuring your vehicle runs smoothly and safely.</p>
                    <Link className="bg-primary-bg text-white px-4 py-2 rounded">
                        Get More Info
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;