import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const ServiceCard = ({ service }) => {
    const { img, title, price } = service || {};
    return (
        <div className="bg-white shadow-xl font-Inter">
            <figure className="px-3 pt-3">
                <img src={img} alt="services" className="rounded-xl" />
            </figure>
            <div className="px-3 py-3">
                <h2 className='text-2xl mb-5 text-[#444] w-full'>{title}</h2>
                <div className="flex justify-between items-center">
                    <p>Price: ${price}</p>
                    <Link>
                        <GoArrowRight className='w-6 h-6 text-[#FF3811] font-bold' />
                    </Link>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object,
}
export default ServiceCard;