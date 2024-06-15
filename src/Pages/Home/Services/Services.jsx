import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);
    const [seeMore, setSeeMore] = useState([4])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container px-4 mx-auto mt-32">
            <h5 className="text-center text-[#FF3811] text-xl font-bold">Service</h5>
            <h1 className="text-center text-[#151515] text-3xl md:text-[45px] mb-5 mt-5">Our Service Area</h1>
            <p className="w-full lg:w-[717px] mx-auto text-[#737373] mb-[50px] text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.slice(0, seeMore)?.map(service => <ServiceCard
                        key={service?._id}
                        service={service}
                    >
                    </ServiceCard>
                    )
                }
            </div>
            <div className="w-full flex justify-center mt-[50px]">
                <Link onClick={() => setSeeMore(services.length)} className={`text-[#FF3811] border-[1px] border-[#FF3811] px-4 py-2 rounded ${seeMore === services.length ? 'hidden' : ''}`}>See More</Link>
            </div>
        </div>
    );
};

export default Services;