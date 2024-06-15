import { GoArrowRight } from 'react-icons/go';
import bannerImg1 from '../../assets/images/banner/1.jpg'
import bannerImg2 from '../../assets/images/banner/2.jpg'
import bannerImg3 from '../../assets/images/banner/3.jpg'
import bannerImg4 from '../../assets/images/banner/4.jpg'
import { FiArrowLeft } from 'react-icons/fi';
const Banner = () => {
    return (
        <div className="carousel font-Inter w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerImg1} className="w-full" />
                <div className='absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full'>
                    <div className='w-3/4 md:w-1/3 ml-8 md:ml-20'>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white md:text-lg text-base md:mt-[30px] mt-2 md:font-normal'>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-1 md:gap-2 lg:gap-4 mt-2 md:mt-[30px]'>
                            <button className='bg-[#FF3811] text-sm md:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 rounded text-white'>Discover More</button>
                            <button className='text-sm md:text-base rounded text-white border-[1px] border-white px-1 md:px-2 lg:px-3 py-1 md:py-2'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                    <a href="#slide4" className="w-10 h-10 rounded-full bg-button-clr transition duration-300 ease-in-out flex justify-center items-center hover:bg-[#FF3811] hover:text-white border-none outline-none">
                        <FiArrowLeft className='w-4 text-white' />
                    </a>
                    <a href="#slide2" className="w-10 h-10 rounded-full bg-[#FF3811] transition duration-300 ease-in-out flex justify-center items-center hover:bg-button-clr hover:text-white border-none outline-none">
                        <GoArrowRight className='w-4 text-white font-bold' />
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bannerImg2} className="w-full" />
                <div className='absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full'>
                    <div className='w-3/4 md:w-1/3 ml-8 md:ml-20'>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white md:text-lg text-base md:mt-[30px] mt-2 md:font-normal'>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-1 md:gap-2 lg:gap-4 mt-2 md:mt-[30px]'>
                            <button className='bg-[#FF3811] text-sm md:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 rounded text-white'>Discover More</button>
                            <button className='text-sm md:text-base rounded text-white border-[1px] border-white px-1 md:px-2 lg:px-3 py-1 md:py-2'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="w-10 h-10 rounded-full bg-button-clr transition duration-300 ease-in-out flex justify-center items-center hover:bg-[#FF3811] hover:text-white border-none outline-none">
                        <FiArrowLeft className='w-4 text-white' />
                    </a>
                    <a href="#slide3" className="w-10 h-10 rounded-full bg-[#FF3811] transition duration-300 ease-in-out flex justify-center items-center hover:bg-button-clr hover:text-white border-none outline-none">
                        <GoArrowRight className='w-4 text-white font-bold' />
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bannerImg3} />
                <div className='absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full'>
                    <div className='w-3/4 md:w-1/3 ml-8 md:ml-20'>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white md:text-lg text-base md:mt-[30px] mt-2 md:font-normal'>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-1 md:gap-2 lg:gap-4 mt-2 md:mt-[30px]'>
                            <button className='bg-[#FF3811] text-sm md:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 rounded text-white'>Discover More</button>
                            <button className='text-sm md:text-base rounded text-white border-[1px] border-white px-1 md:px-2 lg:px-3 py-1 md:py-2'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                    <a href="#slide2" className="w-10 h-10 rounded-full bg-button-clr transition duration-300 ease-in-out flex justify-center items-center hover:bg-[#FF3811] hover:text-white border-none outline-none">
                        <FiArrowLeft className='w-4 text-white' />
                    </a>
                    <a href="#slide4" className="w-10 h-10 rounded-full bg-[#FF3811] transition duration-300 ease-in-out flex justify-center items-center hover:bg-button-clr hover:text-white border-none outline-none">
                        <GoArrowRight className='w-4 text-white font-bold' />
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={bannerImg4} className="w-full" />
                <div className='absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full'>
                    <div className='w-3/4 md:w-1/3 ml-8 md:ml-20'>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white md:text-lg text-base md:mt-[30px] mt-2 md:font-normal'>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-1 md:gap-2 lg:gap-4 mt-2 md:mt-[30px]'>
                            <button className='bg-[#FF3811] text-sm md:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 rounded text-white'>Discover More</button>
                            <button className='text-sm md:text-base rounded text-white border-[1px] border-white px-1 md:px-2 lg:px-3 py-1 md:py-2'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                    <a href="#slide3" className="w-10 h-10 rounded-full bg-button-clr transition duration-300 ease-in-out flex justify-center items-center hover:bg-[#FF3811] hover:text-white border-none outline-none">
                        <FiArrowLeft className='w-4 text-white' />
                    </a>
                    <a href="#slide1" className="w-10 h-10 rounded-full bg-[#FF3811] transition duration-300 ease-in-out flex justify-center items-center hover:bg-button-clr hover:text-white border-none outline-none">
                        <GoArrowRight className='w-4 text-white font-bold' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;